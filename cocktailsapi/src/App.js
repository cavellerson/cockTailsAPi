import { useState, useEffect } from 'react'
import RandomDrink from './components/randomdrink.js'
import Homepage from './components/homepage.js'

function App() {

    const [tab, setTab] = useState('homepage')

    const pageTab = {
        randomDrink: <RandomDrink/>,
        homepage: <Homepage />
    }
    useEffect(() => {

    }, [tab])
  return (
    <div className="App">
        <h1> {pageTab.tab} </h1>

        <button onClick={(event) => {
            event.preventDefault();
            setTab('homepage')
        }}>homepage</button>

        <button onClick={(event) => {
            event.preventDefault();
            setTab('randomDrink')
        }}>random drink</button>



        {pageTab[tab]}

    </div>
  );
}

export default App;
