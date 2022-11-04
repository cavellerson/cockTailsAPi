import React, { useState, useEffect } from 'react'

function SearchDrink() {
    const [drinkName, setDrinkName] = useState('')
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
            .then((response) => response.json()
            .then((data) => {
                console.log(data);
            }))
    })
    return(
        <div>
            <h1>search drink</h1>
            <input type="text" name="inputDrink"onChange={(event) => {
                event.preventDefault();
                setDrinkName(event.target)
            }}/>
        </div>
    )
}

export default SearchDrink;
