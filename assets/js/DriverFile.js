import AestheticTreeProblem from './Aesthetic_Tree_Problem.js'

let obj = new AestheticTreeProblem([1,3,4,1])

let result = obj.performTreeCheck()

document.getElementById('aesthetic-tree-input').addEventListener('keypress', aestheticTreeInput)
document.getElementById('aesthetic-tree-button').addEventListener('click', aestheticTreeStart)

function aestheticTreeInput(e) {
  const numCommaRegex = /^\d|\,$/g
  if (!numCommaRegex.test(e.key)) e.preventDefault()
}

function aestheticTreeStart(e) {
  let inputEl = document.getElementById('aesthetic-tree-input')
  let aestheticTreeTestData = inputEl.value
  let numArr = aestheticTreeTestData.split(',')

  let numArr2 = numArr.map((val) => {
    return parseInt(val)
  })

  let obj = new AestheticTreeProblem(numArr2)

  let result = obj.performTreeCheck()

  let resultEl = document.getElementById('aesthetic-tree-result')
  resultEl.value = result
}
