import Header from "../UI/Header"
import Footer from "../UI/Footer"
import MainBackgroundContent from "../UI/MainBackgroundContent"
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { MainContextProvider } from "../../context/mainContext";
import { useEffect, useState } from "react";

function AppLayout(){
  const {pathname} = useLocation();
  const appName = "Atlas Tools"
  const [gradientClass, setGradientClass] = useState("");

  useEffect(() => {
    if(pathname != "/" && pathname != "/contact"){
      setGradientClass("bg-gradient-to-tr to-purple-400 from-purple-800 ");
    }else{
     setGradientClass("")
  }
  }, [pathname])



// Only For Web
// ==============================================
  const [isWebView, setIsWebView] = useState(true);
  function onlyForWeb() {
    if(window.innerWidth <= 980) return setIsWebView(false);
    setIsWebView(true)
  }
  useEffect(() => {
    onlyForWeb();
    window.addEventListener("resize", onlyForWeb)
  }, [])
// ==========================================


if(isWebView){
  return (
    <MainContextProvider value={{appName}}>
      <div className="max-w-[1440px] h-screen m-auto relative">
        <Header />
        <MainBackgroundContent/>
        <div className={`px-10 py-20 grid content-center items-center ${gradientClass}`}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </MainContextProvider>
  )
}else{
  return (
    <div className="flex justify-center items-center h-screen p-5">
      <h1 className="text-3xl font-bold text-center text-orange-400">{appName} is available for Website Only</h1>
    </div>
  )
}
  
}


export default AppLayout;

// bg-gradient-to-t to-purple-300 from-purple-600