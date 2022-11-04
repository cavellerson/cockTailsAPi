import { useState, useEffect } from 'react'
import RandomDrink from './components/randomdrink.js'
import Homepage from './components/homepage.js'
import SearchDrink from './components/searchdrink.js'


function App() {

    const [tab, setTab] = useState('homepage')

    const pageTab = {
        randomDrink: <RandomDrink/>,
        homepage: <Homepage />,
        searchDrink: <SearchDrink/>
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

        <button onClick={(event) => {
            event.preventDefault();
            setTab('searchDrink')
        }}>search drink</button>


        {pageTab[tab]}

    </div>
  );
}

export default App;
