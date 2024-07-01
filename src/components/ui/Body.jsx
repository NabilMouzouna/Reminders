import Header from "./Header"
import Tasks from "./Tasks"
import { TaskContextProvider } from "../../context/AddTaskContext"
const Body = () => {
  return (
    <section className="bg-darkBodyColor w-5/6 sm:w-4/5 p-6">
      <TaskContextProvider>
      <Header />
      <Tasks />
      </TaskContextProvider>
    </section>
  )
}

export default Body