import logo from "./logo.svg";
import "./App.css";
import Greet from "components/Greet";
import WelcomeClass from "components/WelcomeClass";
import State from "components/State";
import Counter from "components/Counter";
import FunctionClick from "components/FunctionClick";
import EventBind from "components/EventBind";
import ParentComponent from "components/ParentComponent";
import UserGreeting from "components/UserGreeting";
import NameList from "components/NameList";
import StyleSheet from "components/StyleSheet";

function App() {
    return (
        <div className="App">
            <h1>Tushar</h1>
            <StyleSheet />
            {/* <NameList /> */}
            {/* <UserGreeting /> */}
            {/* <ParentComponent /> */}
            {/* <EventBind /> */}
            {/* <FunctionClick /> */}
            {/* <State /> */}
            {/* <Counter /> */}
            {/* <Greet></Greet>
            <WelcomeClass></WelcomeClass> */}

            {/* <header className="App-header">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                />
                <p>
                    Edit <code>src/App.js</code>{" "}
                    and save to reload. Hello
                    React!
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    );
}

export default App;
