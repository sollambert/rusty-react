import React, {useState} from "react";

export function App({wasm}: any): JSX.Element {
    const [name, setName] = useState("");
    const handleChange = (e: any) => {
        setName(e.target.value);
    };
    const handleClick = () => {
        wasm.welcome(name);
    };

    console.log(wasm)

    return (
        <>
            <div>
                <h1>Hi there</h1>
                <button onClick={() => wasm.find_divisors(BigInt(1), BigInt(250000), true)}>Run Computation</button>
            </div>
            <div>
                <input type="text" onChange={handleChange} />
                <button onClick={handleClick}>Say hello!</button>
            </div>
        </>
    );
};