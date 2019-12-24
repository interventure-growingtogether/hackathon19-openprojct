import React from 'react';
import './App.css';
import Main from "./components/main";
import ProjectWidget from './components/projectWidget/ProjectWidget';
import {json} from './json'

let data=json();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    render() {
        console.log("json",data);
        return (
            <div>
                <Main data={data}></Main>

            </div>
        );
    }

}

export default App;
