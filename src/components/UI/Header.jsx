import { Link } from "react-router-dom"
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import DropDown from "../other/DropDown";
import { useEffect, useRef, useState } from "react";
import useMainContext from "../../context/mainContext";

function Header() {
  const {appName} = useMainContext();
  
  const toolsBtn = useRef(null)
  const [toolsBtnState, setToolsBtnState] = useState(false)
  const toggleDropDown = () => {
    if(toolsBtnState){
      setToolsBtnState(false)
    }else{
      setToolsBtnState(true)
    }
  };

  const stopProp = (e) => {
      e.stopPropagation()
  }


  document.querySelector("body").addEventListener("click", () => {
    if(toolsBtnState) toggleDropDown()
  })


  

  return (
    <nav className="flex justify-center items-center fixed z-10 left-0 top-0 w-full">
      <div className="bg-secBgClr max-w-[1400px] m-4 w-full py-4 px-8 rounded-md relative flex items-center justify-between">
          <div className="flex flex-1 items-center justify-between">
            <Link to="/" className="font-bold text-2xl">{appName}</Link>

            <div className="flex gap-4">
              <Link 
                to="/"
                className="rounded-md px-3 py-2 text-sm font-medium bg-focusColor">Home</Link>
              <div className="relative">
                <span
                  ref={toolsBtn}
                  onClick={(e) => {
                    toggleDropDown()
                    stopProp(e)
                  }}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium bg-focusColor flex items-center gap-2">Tools {toolsBtnState ? <FaCaretUp /> : <FaCaretDown />}</span>
                {toolsBtnState ? <DropDown stopProp={stopProp}/> : null}
              </div>
              <Link
                to="/contact"
                className="rounded-md px-3 py-2 text-sm font-medium bg-focusColor">Contact</Link>
              <Link
                to="https://dakshdev.vercel.app/"
                target="_blank"
                className="rounded-md px-3 py-2 text-sm font-medium bg-focusColor">My Portfolio</Link>
            </div>
          </div>

      </div>
    </nav>
  )
}

export default Header
