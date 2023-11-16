import React, { useContext } from 'react';

import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import HeroSection from '../../components/heroSection/HeroSection';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonials/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';


function Home() {
  // const dispatch= useDispatch();
  // const cartItem = useSelector((state)=>state.cart);

  // console.log(cartItem)
  // const addCart=()=>{
  //   dispatch(addToCart("shirt"))
  // }
  // const deleteCart=()=>{
  //   dispatch(deleteFromCart("shirt"))
  // }

  return (
    <Layout>
      {/* <div className="flex">
        <button className='bg-gray-300 p-5' onClick={()=>addCart()} > add</button>
        <button className='bg-gray-300 p-5' onClick={()=>deleteCart()} > del</button>
      </div> */}
     <HeroSection/>
    
     <ProductCard/>
     <Track/>
     <Testimonial/>
    </Layout>
  )
}

export default Home