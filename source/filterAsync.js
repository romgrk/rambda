import { filter } from './filter.js'
import { mapAsync } from './mapAsync.js'

export function filterAsync(predicate, listOrObject){
  if (arguments.length === 1){
    return async holder => filterAsync(predicate, holder)
  }

  return new Promise((resolve, reject) => {
    mapAsync(predicate, listOrObject)
      .then(predicateResult => {
        if (Array.isArray(predicateResult)){
          const filtered = listOrObject.filter((_, i) => predicateResult[ i ])

          return resolve(filtered)
        }
        const filtered = filter((_, prop) => predicateResult[ prop ], listOrObject)

        return resolve(filtered)
      })
      .catch(reject)
  })
}
