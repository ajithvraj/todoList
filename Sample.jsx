import { useState } from "react";

function Sample() {
    const [numbers, setNumbers] = useState([]);
    const [newNumber, setNewNumber] = useState("");

    function handleChange(event) {
        setNewNumber(event.target.value);
    }

    function addNumber() {
        if (newNumber !== "") {
            setNumbers(numbers => [...numbers, Number(newNumber)]);
            setNewNumber("");
        }
    }

    return (
        <div>
            <input
                type="number"
                placeholder="enter the number"
                onChange={handleChange}
                value={newNumber}
            />
            <button onClick={addNumber}>enter</button>
            <ol>
                {numbers.map((number, index) => (
                    <li key={index}>
                        <span>{number}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Sample;
