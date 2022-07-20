import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bye from "./Bye";
import Greetings from "./Greetings";

function App() {

    const userNames: string[] = ["Thomas", "Dominic", "Fabian", "Florian"];

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit TEST <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                {userNames.map((item) => <Greetings name={item}/>)}

                <Bye/>

            </header>
        </div>
    );
}

export default App;
