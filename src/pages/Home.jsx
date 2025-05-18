import { FaCalculator, FaCloudBolt, FaRectangleList } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsCurrencyExchange } from "react-icons/bs";
import ProjectCard from "../components/other/ProjectCard"
import useMainContext from "../context/mainContext"

function Home() {
  const {appName} = useMainContext();

  return (
    <>
    <div className="my-20 flex-col flex gap-40">
      <div className="flex-col flex gap-10">
        <h1 className="text-5xl font-bold">Tools</h1>
        <div className="flex gap-5">
          <div className="flex flex-col gap-5 w-1/2">
            <ProjectCard
              link="/calculator"
              title="Calculator"
              description="Performs basic arithmetic operations."
              component={<FaCalculator className="size-24 bg-focusColor p-4 rounded-md"/>} />
            <ProjectCard
              link="/weather"
              title="Weather"
              description="Real-time weather updates using an API."
              component={<FaCloudBolt className="size-24 bg-focusColor p-4 rounded-md"/>} />
            <ProjectCard
              link="/todo"
              title="Todo List"
              description="Add, remove, and mark tasks as complete."
              component={<FaRectangleList className="size-24 bg-focusColor p-4 rounded-md"/>} />
          </div>
          <div className="flex flex-col gap-5 w-1/2">
            <ProjectCard
              link="/currency"
              title="Currency Exchnager"
              description="Live currency conversion using exchange rate API."
              component={<BsCurrencyExchange className="size-24 bg-focusColor p-4 rounded-md"/>} />
            <ProjectCard
              link="/password"
              title="Password Generator"
              description="Strong password generator with customizable length."
              component={<RiLockPasswordFill  className="size-24 bg-focusColor p-4 rounded-md"/>} />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex-col flex gap-8 max-w-2xl">
          <h1 className="text-4xl font-bold text-center">🚀 Conclusion</h1>
          <span className="text-center bg-secBgClr p-6 rounded-md">This {appName} web app is a lightweight and useful platform that can be used daily by students, professionals, or casual users. In the future, additional tools like notes app, etc. can be integrated to expand its functionality.</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
