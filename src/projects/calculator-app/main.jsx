import { FaEquals, FaDivide, FaMinus, FaPlus } from "react-icons/fa6";
import Button from "./components/Button";
import { memo, useCallback, useEffect, useRef, useState } from "react";


function CalculatorApp() {

  const [displayValue, setDisplayValue] = useState(0);
  const [numArr, setNumArr] = useState([]);
  const [secNumArr, setSecNumArr] = useState([]);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(0);

  const [operator, setOperator] = useState("");
  const [step, setStep] = useState(1);
  const [resMem, setResMem] = useState(""); 
  const [result, setResult] = useState(0);

  const inputField = useRef();

  useEffect(() => {
    if(step === 1) {
      setPrev(Number(numArr.join("")))
      setDisplayValue(prev)
    }else{
      setNext(Number(secNumArr.join("")))
      setDisplayValue(next);
    }
  }, [next, prev, numArr, secNumArr]);

  // Result
  useEffect(() => {
    setResMem(result);
    setPrev(resMem)
    setSecNumArr(String(resMem).split(""))
    setOperator("")
  }, [result, resMem])



  const [inpValCheck, setInpValCheck] = useState(false);
  function inpChecker(){
    if(inpValCheck){
      return (inputField.current.value == resMem) ? checkInputVal() : "";
    }
  }
  const checkInputVal = useCallback(() => {
      setPrev(0)
      setSecNumArr([])
  }, [])




  const onClickHandler = (e) => {
    const value = e.currentTarget.name;

    if(value === "ac"){
      setDisplayValue(0)
      setNumArr([])
      setSecNumArr([])
      setPrev(0)
      setNext(0)
      setOperator("")
      setStep(1)
      setResMem("")
      setResult(0)
    }
    else if(value === "c"){
      setDisplayValue(0)
      setNumArr([])
      setSecNumArr([])
      setPrev(0)
      setNext(0)
      setOperator("")
    }
    else if(value === "."){return;}
    else if(value === "/"){
      setInpValCheck(true);
      setOperator(value);
      setStep(2)
    }
    else if(value === "*"){
      setInpValCheck(true);
      setOperator(value);
      setStep(2)
    }
    else if(value === "-"){
      setInpValCheck(true);
      setOperator(value);
      setStep(2)
    }
    else if(value === "+"){
      setInpValCheck(true);
      setOperator(value);
      setStep(2)
    }
    else if(value === "="){
      if(operator === "/"){
        resMem != "" ? setResult(resMem / next) : setResult(prev / next);
      }
      else if(operator === "*"){
        resMem != "" ? setResult(resMem * next) : setResult(prev * next);
      }
      else if(operator === "-"){
        resMem != "" ? setResult(resMem - next) : setResult(prev - next);
      }
      else if(operator === "+"){
        resMem != "" ? setResult(resMem + next) : setResult(prev + next);
      }
    }else{
      inpChecker();
      if(step === 1){
        setNumArr(prev => [...prev, value]);
      }else{
        setSecNumArr(prev => [...prev, value]);
      }   
    }
    
    
  }

  return (
    <>
    <div className="flex flex-col gap-10 justify-center items-center">
      {/* <h1 className="text-center text-4xl font-bold">Calculator</h1> */}
      <div className="p-4 bg-secBgClr rounded-md">
        {/* calculator Body */}
        <div>
          <div className="p-1">
            <div className="px-4 py-2 text-right text-sm flex items-center justify-between w-full rounded-md h-10 bg-priBgClr">
              <h1>Result</h1>
              <span>
                {(resMem === 0) ? "" : resMem}
                {operator}
              </span>
            </div>
          </div>
          <div className="p-1">
            <input
              ref={inputField}
              value={displayValue}
              onChange={() => {}}
              type="text"
              // disabled
              placeholder="0"
              className="px-4 py-2 text-right text-xl w-full rounded-md h-14 bg-focusColor"/>
          </div>
          <div>
            {/* clickHandler, nameField, className, display */}
            <table className="w-full text-lg">
              <tbody>
                <tr>
                  <td colSpan={2}><p className="p-1"><Button clickHandler={onClickHandler} nameField="ac" display="AC" className="bg-red-500 w-full"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="c" display="C" className="bg-blue-500 w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="/" display={<FaDivide className="size-4"/>} className="bg-focusColor w-16"/></p></td>
                </tr>
                <tr>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="7" display="7" className="bg-focusColor w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="8" display="8" className="bg-focusColor w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="9" display="9" className="bg-focusColor w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="*" display="x" className="bg-focusColor font-medium w-16"/></p></td>
                </tr>
                <tr>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="4" display="4" className="bg-focusColor w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="5" display="5" className="bg-focusColor w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="6" display="6" className="bg-focusColor w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="-" display={<FaMinus className="size-4"/>} className="bg-focusColor w-16"/></p></td>
                </tr>
                <tr>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="1" display="1" className="bg-focusColor w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="2" display="2" className="bg-focusColor w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="3" display="3" className="bg-focusColor w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="+" display={<FaPlus className="size-4" />} className="bg-focusColor w-16"/></p></td>
                </tr>
                <tr>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="0" display="0" className="bg-focusColor w-16"/></p></td>
                  <td><p className="p-1"><Button clickHandler={onClickHandler} nameField="." display="." className="bg-focusColor w-16"/></p></td>
                  <td colSpan={2}><p className="p-1"><Button clickHandler={onClickHandler} nameField="=" display={<FaEquals className="size-4" />} className="w-full bg-emerald-500"/></p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CalculatorApp
