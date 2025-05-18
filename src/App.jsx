import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/layout/AppLayout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

// Import from project
import {CalculatorApp, WeatherForecast, CurrencyExchanger, TodoList, PasswordGenerator} from "./projects/index"

function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/weather",
          element: <WeatherForecast />
        },
        {
          path: "/calculator",
          element: <CalculatorApp />
        },
        {
          path: "/todo",
          element: <TodoList />
        },
        {
          path: "/currency",
          element: <CurrencyExchanger />
        },
        {
          path: "/password",
          element: <PasswordGenerator />
        },
      ]
    }
  ])

  return ( <RouterProvider router={routers}></RouterProvider>)
}

export default App
