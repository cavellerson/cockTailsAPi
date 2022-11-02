import React, { useState, useEffect } from 'react'

function RandomDrink() {
    const [randomDrinkName, setRandomDrinkName] = useState()
    const [randomDrinkObject, setRandomDrinkObject] = useState()
    const [randomDrinkIngredients, setRandomDrinkIngredients] = useState('')

    const getDrinkIngredients = (randomDrinkObject) => {

        let ingredientsArray = []
        for (let i=1; i<=15 ;i++) {
            if (randomDrinkObject[`strIngredient${i}`] && randomDrinkObject[`strMeasure${i}`] != null) {
                ingredientsArray.push(randomDrinkObject[`strMeasure${i}`]+randomDrinkObject[`strIngredient${i}`])
            }
        }

        setRandomDrinkIngredients(ingredientsArray.join(', '))
        // console.log(ingredientsArray.join(', '));

    }

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php',{
            mode: "cors"
        }).then((response) => response.json())
        .then((data) => {
            setRandomDrinkObject(data.drinks[0])
            setRandomDrinkName(data.drinks[0].strDrink)
            getDrinkIngredients(data.drinks[0])
        })

    }, [])

    return (
        <div>
            <h1>Random Drink</h1>
            {randomDrinkObject ?
                <div>
                    <h1>{randomDrinkName}</h1>
                    <img src={randomDrinkObject.strDrinkThumb}/>
                    <h2>{randomDrinkObject.strAlcoholic}</h2>
                    <h2>{randomDrinkObject.strTags}</h2>
                    <h2> Ingredients: {randomDrinkIngredients} </h2>
                    {randomDrinkName[0].toLowerCase() == 'a' || 'e' || 'i' || 'o' || 'u' || 'y' ? <h2>How to make an {randomDrinkName} </h2> : <h2>How to make a {randomDrinkName} </h2>}

                    <p>{randomDrinkObject.strInstructions}</p>
                    <pre>{JSON.stringify(randomDrinkObject, null, "\t")}</pre>
                </div>
            : null }

        </div>
    )
};

export default RandomDrink;
