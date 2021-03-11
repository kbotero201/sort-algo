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

    function sliceSort(){
        const arr = [1,2,3,4,5,6,7,8,9]
        const result = arr.slice(1)
        //console.log(result)
    }

    function concat(){
        const arr1 = [1,2,3]
        const arr2 = [14,15,16]
        const result = arr1.concat(arr2)
        console.log(result)
    }

    function power(num,power){
            let result = 0;
            for(let i= 0; i < power; i++ ){
                result = result * (num * num);
            }
            return result;
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
            <button onClick={sliceSort}> Slice </button>
            <button onClick={concat}> Concat </button>
            <button onClick={power(2,3)}> Power </button>

            <MergeSort />
        </div>
    )
}

export default SortVisual


