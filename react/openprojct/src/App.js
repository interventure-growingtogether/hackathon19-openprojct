import React from 'react';
import './App.css';
import Main from "./components/main";
import {json} from './json'

let data=json();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        console.log("json",data);
        return (
            <div className="App">
                <Main data={data}></Main>

            </div>
        );
    }

}

export default App;
