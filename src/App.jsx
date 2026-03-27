import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import CategoryButton from './Components/CatagoryButton/CatagoryButton'
import LoadTreeCard from './Components/Tree Card/LoadTreeCard'


const categoryTrees = fetch('https://openapi.programming-hero.com/api/categories').then(res => res.json())

const allTreeData = fetch('https://openapi.programming-hero.com/api/plants').then(res => res.json())

function App() {


  return (
   <>
 <Navbar categoryTrees={categoryTrees}></Navbar>
 <Banner></Banner>
 <Suspense fallback={<div><span className="loading loading-dots loading-xl"></span></div>} >
  <CategoryButton categoryTrees={categoryTrees}></CategoryButton>
 </Suspense>

 <Suspense fallback={<div><span className="loading loading-dots loading-xl"></span></div>}>
  <LoadTreeCard allTreeData={allTreeData}></LoadTreeCard>
 </Suspense>


   </>
  )
}

export default App
