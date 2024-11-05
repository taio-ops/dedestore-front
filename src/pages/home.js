import React, {useState} from "react";
import Header from '../Components/Header';


const Home = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Header/>
            <h1>Welcome To DedeStore</h1>
            <p>You've clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <button onClick={() => setCount(count - 1)}>Click Me -</button>
        </>
    )
}

export default Home;











// <button onClick={() => setCount (count + 1)}>click me +</button>
// <button onClick={() => setCount (count -  1)}>click me -</button>