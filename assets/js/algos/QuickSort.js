class QuickSortAlgo {
    constructor(arrOfNums) {
        this.arr = arrOfNums
    }

    swap(arr, left, right) {
        const temp  = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
    }

    partition(arr, left, right) {
        let pivot = arr[Math.floor(left + (right-left)/ 2)]

        while (left <= right) {
            while (arr[left] < pivot) left++

            while (arr[right] > pivot) right--

            if (left <= right) {
                this.swap(arr, left, right)
                left++
                right--
            }
        }
        return left
    }

    quickSort(arr, left, right) {
        let index = partition(arr, left, right)

        if (left < index - 1) {
            this.quickSort(arr, left, index - 1)
        }

        if (right > index) {
            this.quickSort(arr, index, right)
        }
    }
}