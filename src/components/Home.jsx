
import Aside from "./ui/Aside"
import Body from "./ui/Body"
import { CategoryContextProvider } from "../context/CategoryContext"
const Home = () => {
  return (
    <CategoryContextProvider>
      <main className="min-h-screen flex text-fontColor">
      <Aside />
      <Body />
    </main>
    </CategoryContextProvider>
  )
}

export default Home