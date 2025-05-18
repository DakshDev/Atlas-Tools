import { useEffect, useState } from "react";
import useCurrencyInfo from "./hook/useCurrencyInfo";
import { useId} from "react";
import { MdSwapCalls } from "react-icons/md";
import { useAsyncError } from "react-router-dom";




function InputField(
{
  label,
  isDisable,
  currencyOptions,
  onChangeOption,
  setAmount,
  amount,
  select
}
) {



   return (
    <>
      <div className="p-4 rounded-md bg-focusColor w-full m-auto flex items-center justify-between">
        <div className="grid gap-4">
          <label className="capitalize">{label}</label>
          <input
            type="number"
            placeholder="0"
            onClick={(e) => e.target.select()}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="px-4 py-2 bg-focusColor border rounded-md"
            disabled={isDisable}
          />
        </div>
        <div className="grid gap-4">
          <label>Currency</label>
          <select
            className="px-4 py-2 bg-focusColor border rounded-md"
            value={select}
            onChange={(e) => onChangeOption(label, e)}
          >

            {currencyOptions.map(val => (
              <option key={val} value={val}>{val}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}




// main
function CurrencyExchanger() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [output, setOutput] = useState(0);

  const data = useCurrencyInfo(from);
  const keys = Object.keys(data);

  

  function onChangeOption(label, event){
    if(label == "from"){
      setFrom(event.target.value)
    }else if(label == "to"){
      setTo(event.target.value)
    }
  }

  function swap(){
    setFrom(to)
    setTo(from);
  }


  useEffect(() => {
    if(data[to] != undefined){
      setOutput(amount * data[to])
    }
  }, [data])

  function ExchangeRate() {
    setOutput(amount * data[to])
  }
 
   return (
     <div className='flex flex-col justify-center items-center w-full gap-10'>
       <div className='bg-secBgClr rounded-md w-[500px] p-10 flex flex-col justify-start gap-4'>
       <InputField
        label="from"
        onChangeOption={onChangeOption}
        setAmount={setAmount}
        select={from}
        amount={amount}
        currencyOptions={keys}
       />
       <div className='flex justify-center items-center'>
         <button onClick={swap} className='secButton flex items-center justify-center gap-2'>Swap <MdSwapCalls className='text-xl' /></button>
       </div>
       <InputField 
        label="to"
        select={to}
        onChangeOption={onChangeOption}
        currencyOptions={keys}
        isDisable={true}
        amount={output.toFixed(2)}
       />
       <div className='flex justify-center'>
         <button onClick={() => ExchangeRate()} className='priButton'>Convert {from} to {to}</button>
       </div>
     </div>
     </div>
   )
}

export default CurrencyExchanger
