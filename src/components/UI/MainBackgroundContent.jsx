import { useCallback, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";


function HomePathContent() {
  return (
    <div className="flex justify-between items-center gap-10 px-10 bg-ed w-full">
      <div className="w-full flex flex-col gap-4 justify-start">
        <h1 className="text-7xl font-bold">Utility Tools</h1>
        <span>This project is a multi-functional utility web application designed to provide essential daily tools in one place. The goal is to enhance user productivity by offering simple, efficient, and user-friendly solutions to common tasks through a clean interface.</span>
      </div>
      <div className="w-full flex justify-center">
        <div className="size-72 rounded-full bg-white p-2 overflow-hidden">
          <div id="profileImgHome" className="size-full rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

function AnotherPathHeading({title}) {

  const [heading, setHeading] = useState("");
  useEffect(() => {
    if(title == "/calculator") {setHeading("calculator"); window.scrollTo(0, 0);}
    if(title == "/currency") {setHeading("currency Exchanger"); window.scrollTo(0, 0);}
    if(title == "/weather")  {setHeading("weather forecast"); window.scrollTo(0, 0);}
    if(title == "/todo")  {setHeading("todo list"); window.scrollTo(0, 0);}
    if(title == "/password")  {setHeading("password generator"); window.scrollTo(0, 0);}
    if(title == "/contact")  {setHeading("contact me"); window.scrollTo(0, 0);}
  }, [title])

  return (
    <h1 className="text-7xl leading-tight font-bold text-center capitalize bg-[#2d343675] backdrop-blur-[5px] py-6 px-8 rounded-md">{heading}</h1>
  )
}


function MainBackgroundContent() {
      const {pathname}  = useLocation();
     
      const CheckPath = useCallback(() => {
        if(pathname != "/"){
          return <AnotherPathHeading title={pathname} />
        }else{
          window.scrollTo(0, 0);
          return <HomePathContent/>
        }
      }, [pathname])
      
  

  return (
    <div className="py-40 w-full flex justify-center items-center relative" id="BackImage">
      <CheckPath />
    </div>
  )
}

export default MainBackgroundContent
