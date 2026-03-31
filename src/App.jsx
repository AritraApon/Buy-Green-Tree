import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import CategoryButton from './Components/CatagoryButton/CatagoryButton'
import LoadTreeCard from './Components/Tree Card/LoadTreeCard'
import { ToastContainer } from 'react-toastify'
import ComCart from './Components/Campaigin/ComCart'
import Footer from './Components/Footer/Footer'
import Impact from './Components/ImpactCarts/Impact'


const fetchCategories = () => {
  return fetch('https://openapi.programming-hero.com/api/categories')
    .then(res => res.json());
};

const fetchPlants = () => {
  return fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json());
};

function App() {
  const [allCategories, setAllCategories] = useState([]);
  const [allPlants, setAllPlants] = useState([]);
  const [displayPlants, setDisplayPlants] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);


  useEffect(() => {
    fetchCategories().then(data => setAllCategories(data.categories));

    fetchPlants().then(data => {
      setAllPlants(data.plants);
      setDisplayPlants(data.plants)
    });
  }, []);

  const handleFilter = (categoryName) => {
    if (categoryName === 'All') {
      setDisplayPlants(allPlants)
      setSelectedCategories(null)
    } else {
      const remaining = allPlants.filter(tree => tree.category === categoryName);
      setDisplayPlants(remaining);
      setSelectedCategories(categoryName)
    }
  }

  return (
    <>
      <Navbar allCategories={allCategories} handleFilter={handleFilter}>

      </Navbar>
      <Banner></Banner>
      <Suspense fallback={<div><span className="loading loading-dots loading-xl"></span></div>} >
        <CategoryButton allCategories={allCategories}
          handleFilter={handleFilter}
          selectedCategories={selectedCategories}
        ></CategoryButton>
      </Suspense>

      <Suspense fallback={<div className="flex items-center justify-center mt-[10%]">
        <span className="loading loading-dots loading-lg"></span>
      </div>}>
        <LoadTreeCard displayPlants={displayPlants}></LoadTreeCard>
      </Suspense>


       <ComCart/>
       <Impact/>
       <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
