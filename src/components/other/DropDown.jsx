import { Link } from "react-router-dom"

function DropDown({stopProp}) {
  return (
      <div onClick={(e) => stopProp(e)} className="z-10 absolute left-0 top-full py-2">
        <div id="dropdown" className="bg-secBgClr border border-focusColor rounded-lg  w-48">
          <div className="py-2 font-normal" aria-labelledby="dropdownButton">
            <Link
              to="/weather"
              className="block py-2 px-4 hover:bg-focusColor border-focusColor border-b">Weather Forecast</Link>
            <Link
              to="/calculator"
              className="block py-2 px-4 hover:bg-focusColor border-focusColor border-b">Calculator</Link>
            <Link
              to="/currency"
              className="block py-2 px-4 hover:bg-focusColor border-focusColor border-b">Currency Exchanger</Link>
            <Link
              to="/password"
              className="block py-2 px-4 hover:bg-focusColor border-focusColor border-b">Passsword Generator</Link>
            <Link
              to="/todo"
              className="block py-2 px-4 hover:bg-focusColor">Todo App</Link>
          </div>
        </div>
      </div>
  )
}

export default DropDown