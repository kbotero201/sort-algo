
function mergeSort(arr){

        if(arr.length <= 1) return arr
        let mid = Math.floor(arr.length/2)
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))
        
        let results = []
        let i = 0
        let j = 0
    
        while(i < left.length && j < right.length){
            if(right[j] > left[i]){
                results.push(left[i])
                i++
            } else {
                results.push(right[j])
                j++
            }
        }
        while(i < left.length) {
            results.push(left[i])
            i++
        }
        while(j < right.length) {
            results.push(right[j])
            j++
        }
        
        return results

}

export default mergeSort

