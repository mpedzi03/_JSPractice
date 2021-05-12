class AestheticTreeProblem {
  constructor (arrayOfIntegers) {
    this.arrayOfIntegers = arrayOfIntegers
  }

  performTreeCheck() {
    if (this.checkIsAethetic(this.arrayOfIntegers)) return 0

    let aestheticCount = 0

    for (let i = 0; i < this.arrayOfIntegers.length; i++) {
      let newArray = this.copyArrayWithoutIndex(this.arrayOfIntegers, i)

      if (this.checkIsAethetic(newArray)) {
        aestheticCount++
      }
    }

    return aestheticCount === 0 ? -1 : aestheticCount
  }

  copyArrayWithoutIndex(arr, indexToDelete) {
    let arrLength = arr.length
    let newArray = new Array(arrLength - 1)
    let tempI = 0

    for (let i = 0; i < arrLength; i++) {
      if (i !== indexToDelete) {
        newArray[tempI++] = A[i]
      }
    }

    return newArray
  }

  checkIsAethetic(arr) {
    let increaseCt = 0

    for (let i = 0; i < arr.length; i++) {
      if (increaseCt === 0) {
        if (arr[i] < arr[i+1]) {
          increaseCt = 1
        } else {
          increaseCt = 2
        }
      } else {
        if (increaseCt === 1) {
          if (i % 2 == 1 && arr[i] > arr[i - 1]){
          } else if (i % 2 == 0 && arr[i] < arr[i - 1]) {
          } else {
            return false
          }
        } else {
          if (i % 2 == 1 && arr[i] < arr[i-1]) {
          } else if (i % 2 == 0 && arr[i] > arr[i-1]) {
          } else {
            return false
          }
        }
      }
    }
  }
}
let firstName = 1
export {AestheticTreeProblem, firstName}