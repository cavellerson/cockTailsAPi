import React, { useState, useEffect } from 'react'

function RandomDrink() {
    const [randomDrinkName, setRandomDrinkName] = useState()
    const [randomDrinkObject, setRandomDrinkObject] = useState()
    const [randomDrinkIngredients, setRandomDrinkIngredients] = useState('')
    const [nextDrinkButton, setNextDrinkButton] = useState(false)
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

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

    }, [nextDrinkButton])

    return (
        <div>
            <h1>random drink</h1>
            <button onClick={(event) => {
                event.preventDefault();
                if (nextDrinkButton) {
                    setNextDrinkButton(false)
                } else {
                    setNextDrinkButton(true)
                }
            }}>next drink</button>
            {randomDrinkObject ?
                <div>
                    <h1>{randomDrinkName}</h1>
                    <img src={randomDrinkObject.strDrinkThumb}/>
                    <h2>{randomDrinkObject.strAlcoholic}</h2>
                    <h2>{randomDrinkObject.strTags}</h2>
                    <h2> Ingredients: {randomDrinkIngredients} </h2>
                    {vowels.includes(randomDrinkName[0].toLowerCase()) ? <h2>How to make an {randomDrinkName} </h2> : <h2>How to make a {randomDrinkName} </h2>}

                    <p>{randomDrinkObject.strInstructions}</p>
                </div>
            : null }

        </div>
    )
};

export default RandomDrink;
