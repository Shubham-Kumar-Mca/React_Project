import { useState } from 'react';
import './App.css';
import Button from './Components.jsx/Button';
import Screen from './Components.jsx/Screen';

const btnVal = [
  ["C", "%", "/"],
  [7, 8, 9, "x"],
  [1, 2, 3, "+"],
  [4, 5, 6, "-"],
  [".", 0, "="],
]

function App() {
  const [calculate, setCalculate] = useState({
    sing: "",
    num: 0,
    res: 0
  })
  //User Click Dot
  const DotClick = () => {
    setCalculate({ ...calculate, num: 50 })
  }

  const ClearClick = () => {
    setCalculate({ sing: "", num: 0, res: 0 })
  }

  const handelClickButton = (value) => {
    const numString = value.toString()

    let numValue;
    if (numString === '0' && calculate.num === 0) {
      numValue = '0'
    } else {
      numValue = Number(calculate.num + numString)
    }

    setCalculate({ ...calculate, num: numValue })
  }

  const singClick = (value) => {
    setCalculate({
      sing: value,
      res: !calculate.res && calculate.num ? calculate.num : calculate.res,
      num: 0
    })
  }

  const equalsClick = () => {

    if (calculate.res && calculate.num) {
      const mathCalcilation = (a, b, sing) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          'x': (a, b) => a * b,
          '/': (a, b) => a / b,
        }
        return result[sing](a, b)
      }

      setCalculate({
        res: mathCalcilation(calculate.res, calculate.num, calculate.sing),
        sing: '',
        num: 0
      })
    }
  }

  const percentageClick = ()=>{
    setCalculate({
      num : (calculate.num / 100),
      res : (calculate.res / 100),
      sing :''
    })
  }

  const handelClick = (value) => {

    const result = {
      '.': DotClick,
      'C': ClearClick,
      '/': singClick,
      'x': singClick,
      '-': singClick,
      '+': singClick,
      '=': equalsClick,
      '%': percentageClick,
    }

    if (result[value]) {
      //Dot and Clear Button
      return result[value](value)
    } else {
      //Rest All Button
      return handelClickButton(value)
    }

  }

  return (
    <div className="App">
      <Screen calculate={calculate} />
      {/* {question === "" ? <Screen cal={answer} /> : <Screen cal={question} />} */}
      <div className='buttonBox'>
        {btnVal.flat().map((button, i) => (
          <Button value={button} handelClick={handelClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
