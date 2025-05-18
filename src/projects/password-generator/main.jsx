import { useEffect, useId, useRef, useState } from "react";


function PasswordGenerator(){
  const LengthId = useId();
  const NumberId = useId();
  const SpecialCharId = useId();

  const displayPasswordField = useRef();

  const [passLength, setPassLength] = useState(8);
  const [addNumber, setAddNumber] = useState(true);
  const [addSpecialChar, SetAddSpecialChar] = useState(false);

  const [password, setPassword] = useState("");

  useEffect(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(addNumber) str += "1234567890";
    if(addSpecialChar) str += "~!@#$%^&*?";

    for(let i = 1; i <= passLength; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass);
    
  }, [passLength, addNumber, addSpecialChar]);



  function copyPassword() {
    // console.log(displayPasswordField.current.value.select());
    
    displayPasswordField.current.select();
    window.navigator.clipboard.writeText(password)
  }

  

  return (
    <div className="flex justify-center items-center">
      <div className="w-[400px] bg-secBgClr p-8 rounded-md flex flex-col gap-5">
        <input
          type="text"
          ref={displayPasswordField}
          value={password}
          onChange={() => {}}
          placeholder="Password Generator"
          className="py-2 px-4 bg-secBgClr border-2 border-focusColor rounded-md w-full"
        />
        <div className="flex flex-col gap-2">
          <div className="w-full">
            <label htmlFor={LengthId} className="rounded-md flex gap-2 justify-center items-center bg-focusColor p-2 px-4">
              <span>Password&nbsp;Length</span>
              <input id={LengthId} value={passLength} onChange={(e) => setPassLength(Number(e.target.value))} type="range" min={6} max={20} className="w-full"/>
              <span>{passLength}</span>
            </label>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <label htmlFor={NumberId} className="w-full rounded-md flex gap-2 justify-center items-center bg-focusColor p-2 px-4">
              <span>Numbers</span>
              <input id={NumberId} checked={addNumber} onChange={(e) => setAddNumber(e.target.checked)} type="checkbox"/>
            </label>
            <label htmlFor={SpecialCharId} className="w-full rounded-md flex gap-2 justify-center items-center bg-focusColor p-2 px-4">
              <span>Special Char</span>
              <input id={SpecialCharId} checked={addSpecialChar} onChange={(e) => SetAddSpecialChar(e.target.checked)} type="checkbox"/>
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={copyPassword} className="priButton">Copy Password</button>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator;