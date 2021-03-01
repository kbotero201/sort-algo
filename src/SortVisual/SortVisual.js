import React, {useState} from 'react'
import './SortVisual.css'

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

    //const displayArray = array.map((value) => {
    //const heightVlaue = value + "px"
    //console.log(height)
    //return(
    //    <div 
    //        className="bar"
    //        style= {{height: heightVlaue}}
    //        key={value}>
    //            {value}
    //    </div>
    //)})


    return (
        <div>
            <div className="container">
                {array.map((value) => (
                    <div 
                        key={value}
                        style={{height: "700px"}}
                        className="bar">
                            

                    </div>
                ))} 
            </div>
            <h1> Here is the array:{/*displayArray*/} </h1>
            <button onClick={newArray}> Generate array</button>
        </div>
    )
}

export default SortVisual