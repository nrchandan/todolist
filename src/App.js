import logo from './logo.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
// import Counter from './Counter';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited <code>src/App.js</code> and saved to reload.
        </p>
        {/* <WelcomeMessage name1={'Chetan'} name2={'Komal'} name3={'Rohit'}/> */}
        <WelcomeMessage setFriendCount={setCount} count={count}>Chetan</WelcomeMessage>
        {/* <WelcomeMessage setFriendCount={setCount} count={count}>Rohit</WelcomeMessage> */}
        {/* <WelcomeMessage setFriendCount={setCount} count={count}>Komal</WelcomeMessage> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>You have {count} friends.</p>
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
