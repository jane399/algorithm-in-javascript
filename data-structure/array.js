// 1. 배열 생성 및 초기화
// [참고] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

let arr1 = []
arr1[0] = '1'
arr1[1] = '2'
arr1[2] = '3'
console.log(arr1)

let arr2 = ['item1', 'item2', 'item3']
console.log(arr2)

let arr3 = new Array()
arr3[0] = '1'
arr3[1] = '2'
arr3[2] = '3'
console.log(arr3)

let arr4 = new Array('item1', 'item2', 'item3')
console.log(arr4)

let arr5 = new Array(5)
console.log(arr5)

let arr6 = Array.from({length: 5}, () => 0)
console.log(arr6)

let arr7 = Array.from({length: 5}, (item, index) => index+1)
console.log(arr7)

// 2. 2차원 배열 생성하기
let arr8 = Array.from({length: 5}, () => Array.from({length: 5}, () => 0))
console.log(arr8)

let arr9 = Array(5).fill().map(() => Array.from({length: 5}, () => 0))
console.log(arr9)