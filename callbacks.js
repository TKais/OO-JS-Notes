var array = [1,2,3,4]

// array.map(function(element) {
//   console.log(element)
//   return element
// })

function incrementValues(element) {
  return element + 1
}

array.map(incrementValues)


// function invokeArgumentFunc(functionToInvoke) {
//   functionToInvoke()
// }
