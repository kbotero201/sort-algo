import React, {useState} from 'react'
import './SortVisual.css'
import MergeSort from '../SortAlgorithims/mergeSort.js'

function SortVisual(){
    const [array, setArray] = useState([])

    function newArray(){
        const array = []
        for (let i = 0; i < 5; i++) {
            array.push(randomNumber(10, 1000))
        }
        setArray(array)
    }

    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function mergeSort(){
        const sortedArrayResult = array.slice().sort((a, b) => a - b)
        //console.log(sortedArray)
        const mergeSortedArray = mergeSort(array)
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
            <button onClick={mergeSort}> Merge Sort </button>
            <button onClick={mergeSort}> Quick Sort </button>
            <button onClick={mergeSort}> Heap Sort </button>

            <MergeSort />
        </div>
    )
}

export default SortVisual


