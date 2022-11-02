import { useState, useEffect } from 'react'

function App() {
    const [randomDrink, setRandomDrink] = useState()
    const [randomDrinkObject, setRandomDrinkObject] = useState()

    useEffect(() => {

        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php', {
            mode: "cors"
        }).then((response) => response.json())
        .then((data) => {
            setRandomDrinkObject(data.drinks[0])
        })

    }, [])

  return (
    <div className="App">

        <h1>Hello World</h1>
        <pre>{JSON.stringify(randomDrinkObject, null, 4)}</pre>
    </div>
  );
}

export default App;
