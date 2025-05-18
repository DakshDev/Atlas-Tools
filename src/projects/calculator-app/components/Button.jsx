export default function Button({clickHandler, nameField, className, display}){
  return (
    <button onClick={clickHandler} name={nameField} className={`${className} active:opacity-85 rounded-md h-12 flex justify-center items-center`}>{display}</button>
  )
}