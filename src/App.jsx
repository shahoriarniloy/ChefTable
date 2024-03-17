import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header.jsx';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import SingleProduct from './SingleProduct';



function App() {

  const  [products, setProducts]=useState([]);
  const [cart,setCart]=useState([]);
  const [preparedItems, setPreparedItems] = useState([]);
  const totalPreparingTime = preparedItems.reduce((total, item) => total + parseInt(item.preparing_time), 0);
  const totalCalories = preparedItems.reduce((total, item) => total + parseInt(item.calories), 0);
  

  useEffect(()=> {
    fetch("/data.json")
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
    })
  },[])

  const handleCart=(p)=>{
    // console.log(p);

    const isExist=cart.find(item =>item.recipe_id==p.recipe_id);
    if(!isExist){
      setCart([...cart,p]);

    }
    else{
      // alert("Already Added");
      toast.error("Recipe Is Already Added");
    }
  }
  // console.log(cart);


  const handlePrepare = (item) => {
    setPreparedItems([...preparedItems, item]);
    const updatedCart = cart.filter(cartItem => cartItem.recipe_id !== item.recipe_id);
    setCart(updatedCart);
}

  

  return (
    <>
      <Header></Header>
      <h1 className='text-slate-900 text-3xl font-semibold text-center mt-16 mb-4'>Our Recipes</h1>
      <p className=' text-slate-900 text-opacity-60 text-base text-center mb-8'>Our recipes offer a delightful blend of flavors and simplicity, ensuring easy preparation and delicious results for every mealtime adventure.</p>
<div className="grid lg:grid-cols-3  lg:mx-24 mx-6 lg:gap-x-6 max-w-[1320px]">
  <div className="lg:col-span-2 grid lg:grid-cols-2 grid-cols-1  gap-6">
    {products.map(pd => (
      <SingleProduct key={pd.recipe_id} product={pd} handleCart={handleCart} />
    ))}
  </div>


  <div className=" rounded-lg py-6 border w-full h-fit ">
    <h1 className=" text-zinc-800 text-xl font-semibold text-center mb-8">Want to Cook: {cart.length}</h1>
    <table className="text-center text-zinc-500 text-base font-medium border w-full ">
      <thead >
        <tr>
          <td ></td>
          <td>Name</td>
          <td >Time</td>
          <td >Calories</td>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => (
          <tr key={index} className="border-b bg-slate-100">
            <td className='pl-4'>{index + 1}</td>
            <td >{item.recipe_name}</td>
            <td >{item.preparing_time}</td>
            <td >{item.calories}</td>
            <td><button className="prep-btn " onClick={() => handlePrepare(item)}>Preparing</button></td>
          </tr>
        ))}
      </tbody>
    </table>


    <h1 className="text-zinc-800 text-xl font-semibold text-center mb-8 mt-8">Currently Cooking: {preparedItems.length}</h1>
    <table className="text-center text-zinc-500 text-base font-medium border w-full mb-12 ">
      <thead >
          <tr>
            <td ></td>
            <td>Name</td>
            <td >Time</td>
            <td >Calories</td>
          </tr>
        </thead>
      <tbody>
        {preparedItems.map((item, index) => (
          <tr key={index} className="border-b  bg-slate-100">
            <td className='pl-4'>{index + 1}</td>
            <td>{item.recipe_name}</td>
            <td>{item.preparing_time}</td>
            <td>{item.calories}</td>
          </tr>
          ))}
      </tbody>

      <tfoot >
        <tr>
          <td colSpan="2"></td>
          <td className='max-w-8 '>Total Time = {totalPreparingTime} minutes</td>
          <td className='max-w-8 '>Total Calories = {totalCalories} calories</td>
        </tr>
      </tfoot>
    </table>


  </div>
  
  </div>  
  <ToastContainer />    
     
    </>
  )
}

export default App
