import React, {useState} from 'react'
import './SortVisual.css'
import mergeSort from '../SortAlgorithims/mergeSort.js'
import quickSort from '../SortAlgorithims/quickSort.js'

function SortVisual(){
    const [array, setArray] = useState([])

    function newArray(){
        const array = []
        for (let i = 0; i < 5; i++) {
            array.push(randomNumber(10, 1000))
        }
        setArray(array)
        console.log(array)
    }

    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function handleMergeSort(){
        const testSortedResult = array.slice().sort((a, b) => a - b)
        console.log(testSortedResult)

        const mergeSortedResult = mergeSort(array)
        console.log(mergeSortedResult)
    }

    function handleQuickSort(){
        const testSortedResult = array.slice().sort((a, b) => a - b)
        console.log(testSortedResult)

        const quickSortedResult = quickSort(array)
        console.log(quickSortedResult)
    }


    const displayArray = array.map((value, index) => (
        <div className="bar"
             style= {{height: `${value}px`}}
             key={index}>
        </div>
    ))

    return (
        <div >
            <div className="container">
                {displayArray}
            </div>
            <h1> Here is the array:{displayArray} </h1>
            <button onClick={newArray}> Generate array </button>
            <button onClick={handleMergeSort}> Merge Sort </button>
            <button onClick={handleQuickSort}> Quick Sort </button>
        </div>
    )
}

export default SortVisual


