import { Link } from "react-router-dom";
import { FaLink  } from "react-icons/fa6";


export default function  ProjectCard({title, description, component, link}) {
  return (
    <div className="p-8 w-full rounded-md bg-secBgClr flex justify-between gap-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <span className="text-secTextClr">{description}</span>
        <div className="flex">
          <Link to={link} className="cursor-pointer flex px-5 py-2 rounded-md gap-2 items-center bg-priClr hover:opacity-80 text-lg"><FaLink />Open</Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {component}
      </div>
    </div>
  )
}