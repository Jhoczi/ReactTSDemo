import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greetings} from './components/greetings';
import {Person} from './components/person';
import {PersonList} from './components/person-list';
import {Status} from './components/status';
import {Heading} from './components/heading';
import {Oscar} from './components/oscar';
import {Button} from "./components/button";
import {Input} from "./components/input";
import {Container} from "./components/container";

function App() {

    const personName = {
        first: "Jakub",
        last: "Hoczek"
    };

    const nameList = [
        {
            first: "Filip",
            last: "Grygierczyk"
        },
        {
            first: "Radosław",
            last: "Piłot"
        },
        {
            first: "Kacper",
            last: "Pałka"
        },
    ];

    return (
        <div className="App">
            <Status status='loading'/>
            <Heading>Placeholder text</Heading>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
            </Oscar>
            <Greetings name="Rajesh" messageCount={2137} isLoggedIn={true}/>
            <Greetings name="Jakub" isLoggedIn={false}/>
            <Person name={personName}/>
            <PersonList names={nameList}/>
            <Button handleClick={() => {
                console.log("Button clicked!");
            }}/>
            <Button handleClick={(event, id) => {
                console.log("Button clicked!", event, id);
            }} />
            <Input value='' handleChange={(event) => {console.log(event)} }/>
            <Container styles={{border: '1px solid black', padding: '1rem'}}/>
        </div>
    );
}

export default App;
