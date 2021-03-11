function sum(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; arr.length; j++) { 
            if(arr[i] === arr[j]){
                return [arr[i], arr[j]]
            }
        }
    }
}


[1,2,3,4,5,6,7,8,9]

function countUniqueValues(arr) {
    let i = 0
    let j = i + 1
    while (j < arr.length)
        if (arr[i] !== arr[j]){
            arr[i] = arr[j]
            i++
        } else {
            return i 
        }
}

function countUniqueValues(arr) {
    if(array === 0) return 0
    let i = 0
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        return i + 1 
    }
}


function search(arr, value) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === value){
            return i
        }
    }
    return -1 
}