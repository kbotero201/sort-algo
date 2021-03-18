import React, {useState} from 'react'
import './SortVisual.css'
import mergeSort from '../SortAlgorithims/mergeSort.js'
import quickSort from '../SortAlgorithims/quickSort.js'
import bubbleSort from '../SortAlgorithims/bubbleSort.js'
import radixSort from '../SortAlgorithims/radixSort.js'

function SortVisual(){
    const [array, setArray] = useState([])

    function newArray(){
        const array = []
        for (let i = 0; i < 100; i++) {
            array.push(randomNumber(10, 1000))
        }
        setArray(array)
        console.log(array)
    }

    //test fully sorted array 
    const testSortedResult = array.slice().sort((a, b) => a - b)


    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function handleMergeSort(){
        const mergeSortedResult = mergeSort(array)
        console.log(mergeSortedResult)
        console.log(arraysAreSame(testSortedResult, mergeSortedResult))
    }

    function handleQuickSort(){
        const quickSortedResult = quickSort(array)
        console.log(quickSortedResult)
        console.log(arraysAreSame(testSortedResult, quickSortedResult))

    }

    function handleBubbleSort(){
        const bubbleSortedResult = bubbleSort(array)
        console.log(bubbleSortedResult)
        console.log(arraysAreSame(testSortedResult, bubbleSortedResult))

    }


    function handleRadixSort(){
        const radixSortedResult = radixSort(array)
        console.log(radixSortedResult)
        console.log(arraysAreSame(testSortedResult, radixSortedResult))
    }


    const displayArray = array.map((value, index) => (
        <div className="bar"
             style= {{height: `${value}px`}}
             key={index}>
        </div>
    ))

    function arraysAreSame(arr1, arr2){
       if(arr1.length !== arr2.length) return false 
       for(let i = 0; i < arr1.length; i++){
           if(arr1[i] !== arr2[i]){
               return false
           }
       }
       return true
    }
    return (
        <div >
            <div className="container">
                {displayArray}
            </div>
            <h1> Here is the array:{displayArray} </h1>
            <button onClick={newArray}> Generate array </button>
            <button onClick={handleMergeSort}> Merge Sort </button>
            <button onClick={handleQuickSort}> Quick Sort </button>
            <button onClick={handleBubbleSort}> Bubble Sort </button>
            <button onClick={handleRadixSort}> Radix Sort </button>
        </div>
    )
}

export default SortVisual


