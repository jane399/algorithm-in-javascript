function solution(arrayA, arrayB) {
    //해당 수가 배열의 모든 숫자를 나눌 수 있는지 확인
    const checkAllDivNum = (arr, a) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i]%a !== 0) {
                return false
            }
        }
        return true
    }

    //해당 수가 배열의 모든 숫자를 나눌 수 없는지 확인
    const checkNotDivNum = (arr, a) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i]%a === 0) {
                return false
            }
        }
        return true
    }

    const setA = [...new Set(arrayA)]
    const setB = [...new Set(arrayB)]

    const arrA = setA.sort((a, b) => {return a-b})
    const arrB = setB.sort((a, b) => {return a-b})

    let ansA = 0
    let ansB = 0

    for(let i = arrA[0]; i > 1; i--){
        if(checkAllDivNum(arrA, i) && checkNotDivNum(arrB, i)){
            ansA = i
            break
        }
    }

    for(let i = arrB[0]; i > 1; i--){
        if(checkAllDivNum(arrB, i) && checkNotDivNum(arrA, i)){
            ansB = i
            break
        }
    }
    return ansA > ansB ? ansA : ansB;
}
console.log(solution([10, 17], [5, 20]))
console.log(solution([10, 20], [5, 17]))
console.log(solution([14, 35, 119], [18, 30, 102]))