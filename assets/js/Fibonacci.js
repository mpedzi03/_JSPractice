// Great example in Memoization

class Fibber {
  constructor() {
    this.memo = {}
  }

  fib(n) {
    if (n < 0) {
      throw new Error('Index was negative, there is no such thing as a negative index in a series.')
    } else if (n === 0 || n === 1) {
      return n
    }


    // Check if we already have have the value stored in our memo
    if (this.memo.hasOwnProperty(n)) {
      console.log(`..Grabbing memo[${n}]`)
      return this.memo[n]
    }

    console.log(`..Computing fib(${n})`)
    const result = this.fib(n-1) + this.fib(n-2)

    //Memoize baby
    this.memo[n] = result

    return result
  }
}

export default Fibber

/*
Classless / classic approach

function fibonacciMaster(n) {
  const cache = {}
  return function fib(n) {
    if (n < 0) {
      throw new Error('N cannot be negative')
    } else if (n === 0 || n === 1) {
      return n
    } else {
      if (cache.hasOwnProperty(n)) {
        return cache[n]
      } else {
        let result = fib(n-1) + fib(n-2)

        cache[n] = result
        return result
      }
    }
  }
}
*/