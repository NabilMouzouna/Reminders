import CategoryContextConsumer from "../../context/CategoryContext"
import TaskContextConsumer from '../../context/AddTaskContext'
import { db } from "../../config/firebase.config"
import { collection, deleteDoc,getDocs } from "firebase/firestore"
import { AuthContextConsumer } from "../../context/AuthContext"
const Header = () => {
  const {Category} = CategoryContextConsumer()
  const {setAddTask} = TaskContextConsumer()
  const {User} = AuthContextConsumer()

  const DeleteAllTask = async () => { 
    const refCollection = collection(db,"Users",User.email,Category.title)
    await getDocs(refCollection).then((querySnap) => { 
      querySnap.forEach((doc) => { 
         deleteDoc(doc.ref)

       })
     })
   }
  return (
    <header className=" text-end">
      <button 
      onClick={() => { setAddTask(true) }}
      className="text-xl font-normal px-2">+</button>
      <h1 
      style={{color:Category.activeColor}}
      className="text-start text-4xl font-bold mb-3 text-[#0387FF]">{(Category.title === undefined || null)?'Today':Category.title}</h1>
      <span 
      onClick={() => { DeleteAllTask() }}
      className="text-start block text-xs cursor-pointer">clear All</span>
      <hr className="mt-2 mb-5 border-[0.5px] border-gray-500"/>
    </header>
  )
}

export default Header