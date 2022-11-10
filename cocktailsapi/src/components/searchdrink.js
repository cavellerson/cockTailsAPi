import React, { useState, useEffect } from 'react'

function SearchDrink() {
    const [drinkName, setDrinkName] = useState('')
    const [drinksArray, setDrinksArray] = useState()
    const [drinkIngredients, setDrinkIngredients] = useState([]);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
            .then((response) => response.json()
            .then((data) => {
                // console.log(data.drinks);
                setDrinksArray(data.drinks)

            }))
            console.log({drinksArray});
    },[drinkName])

    const parseDrinkIngredients = () => {
        console.log(drinksArray);
    }


    const handleSearchDrink = (event) => {
        event.preventDefault();
        setDrinkName(event.target.inputDrink.value)
    }
    // <pre>{JSON.stringify(drinksArray, null, "\n")}</pre>

    return(
        <div>
            <h1>search drink</h1>
            <form onSubmit={handleSearchDrink}>
                <label>Search Drink: </label>
                <input type="text" name="inputDrink"/>
            </form>
            <ul className="drinks">
                {drinksArray ? drinksArray.map((drink) =>
                    <li key={drink.idDrink}>

                        {drink.strDrink}
                        <img src={drink.strDrinkThumb}/>


                    </li>

                    ) : null}
            </ul>

        </div>
    )
}

export default SearchDrink;
