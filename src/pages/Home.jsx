
import Aside from "../components/Aside"
import Body from "../components/Body"
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