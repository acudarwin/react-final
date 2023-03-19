import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState("");
  const [operand, setOperand] = useState("0");

  const handleInput = (event) => {
    const value = event.target.value;
    const type = event.target.getAttribute("data-type");

    if (type === "operator") {
      setOperator(value);
      setOperand(result);
      setResult("0");
    } else if (type === "clear") {
      setResult("0");
      setOperator("");
      setOperand("0");
    } else if (type === "equal") {
      const operand1 = parseFloat(operand);
      const operand2 = parseFloat(result);
      switch (operator) {
        case "+":
          setResult(operand1 + operand2);
          break;
        case "-":
          setResult(operand1 - operand2);
          break;
        case "*":
          setResult(operand1 * operand2);
          break;
        case "/":
          setResult(operand1 / operand2);
          break;
        case "sqrt":
          setResult(Math.sqrt(operand1));
          break;
        case "pow":
          setResult(Math.pow(operand1, operand2));
          break;
        case "log":
          setResult(Math.log(operand1));
          break;
        case "sin":
          setResult(Math.sin(operand1));
          break;
        case "cos":
          setResult(Math.cos(operand1));
          break;
        case "tan":
          setResult(Math.tan(operand1));
          break;
        case "exp":
          setResult(Math.exp(operand1));
          break;
        case "abs":
          setResult(Math.abs(operand1));
          break;
        default:
          break;
      }

      setOperator("");
      setOperand("0");
    } else {
      if (result === "0") {
        setResult(value);
      } else {
        setResult(result + value);
      }
    }
  };

  return (
    <div className='App'>
      <div className="calculator-container">
        
        <div className="fila">
          <div className="display">{result}</div>
        </div>
        <div className="fila">
          <button className="operators" onClick={handleInput} data-type="clear">C</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="/">/</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="*">*</button>
          <button className="operators" onClick={handleInput} value="0">0</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="sqrt">sqrt</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="cos">cos</button>
        </div>
        <div className="fila">
          <button className="operators" onClick={handleInput} value="7">7</button>
          <button className="operators" onClick={handleInput} value="8">8</button>
          <button className="operators" onClick={handleInput} value="9">9</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="-">-</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="pow">pow</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="tan">tan</button>
        </div>
        <div className="fila">
          <button className="operators" onClick={handleInput} value="4">4</button>
          <button className="operators" onClick={handleInput} value="5">5</button>
          <button className="operators" onClick={handleInput} value="6">6</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="+">+</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="log">log</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="exp">exp</button>
        </div>

        <div className="fila">
          <button className="operators" onClick={handleInput} value="1">1</button>
          <button className="operators" onClick={handleInput} value="2">2</button>
          <button className="operators" onClick={handleInput} value="3">3</button>
          <button className="operators" onClick={handleInput} data-type="equal">=</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="sin">sin</button>
          <button className="operators" onClick={handleInput} data-type="operator" value="abs">abs</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
