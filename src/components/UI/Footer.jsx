import { Link } from "react-router-dom"
import useMainContext from "../../context/mainContext";

function Footer() {
  const {appName} = useMainContext();
  return (
  <footer className="flex justify-center items-center">
      <div className="bg-secBgClr w-full p-8 rounded-md">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="text-priTextClr font-bold text-2xl">{appName}</Link>
            <div className="flex gap-2">
              <Link 
                target="_blank"
                to="https://www.instagram.com/sync_coder/"
                className="rounded-md p-2 text-sm hover:underline text-secTextClr">Instagram</Link>
              <Link 
                target="_blank"
                to="https://github.com/DakshDev"
                className="rounded-md p-2 text-sm hover:underline text-secTextClr">Github</Link>
              <Link 
                target="_blank"
                to="/"
                className="rounded-md p-2 text-sm hover:underline text-secTextClr">LinkedIn</Link>
              <Link 
                target="_blank"
                to="/"
                className="rounded-md p-2 text-sm hover:underline text-secTextClr">Buy Me Coffee</Link>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">{appName}</Link>. All Rights Reserved.</span>
      </div>
  </footer>
  )
}

export default Footer
