import React, { useEffect, useState } from 'react'
import myContext from './myContext'
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';

 
function myState(props) {

  const [mode,setMode]=useState('Light')

  const toggleMode = ()=> {
    if(mode==='Light'){
      setMode('dark');
      document.body.style.backgroundColor="rgb(17,24,39)"
    }
    else{
      setMode('Light');
      document.body.style.backgroundColor="white"
    }
  }

  const [loading, setLoading] =useState(false);
  
  const [products, setProducts]=useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  const addProduct=async()=>{
    if(products.title==null || products.price==null || products.imageUrl==null || products.category==null || products.description==null){
      return toast.error('Please fill all fields')
    }

    setLoading(true)

    try{

      const productRef= collection(fireDB,'products')

      await addDoc(productRef,products)
      toast.success("product added successfully");
      setTimeout(() => {
        window.location.href='/dashboard'
      }, 1000);
      getProductData();
      setLoading(false)


    }catch(error){
      console.log(error);
      setLoading(false)
    }


  }


  const [product, setProduct] = useState([]);

  // getproductdata 

  const getProductData = async()=>{

    setLoading(true)

    try {

      const q=query(
        collection(fireDB,'products'),
        orderBy('time')
      );

      const data= onSnapshot(q,(QuerySnapshot)=>{
        let productArray=[];
        QuerySnapshot.forEach((doc)=>{
          productArray.push({...doc.data(),id: doc.id});
        });
        setProduct(productArray)
        setLoading(false)
      });

      return ()=>data;

    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  }


  useEffect(()=>{
    getProductData();
  },[]);


  // update product data 


  const edithandle= (item)=>{
    setProducts(item);
  }

  const updateProduct= async ()=>{
    setLoading(true);
    try {
      
      await setDoc(doc(fireDB,'products',products.id),products)
      toast.success("Product updated successfully")
      getProductData();
      setTimeout(()=>{
        window.location.href= '/dashboard';
      }, 1000);
      setLoading(false);


    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }


  // delete product 

  const deleteProduct = async (item)=>{
    setLoading(true);
    try {
      
      await deleteDoc(doc(fireDB,'products',item.id))
      toast.success('Product Deleted successfully');
      getProductData();
      setLoading(false);

    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }


  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "order"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData();
    getOrderData()

  }, []);




  return (
    <myContext.Provider value={{mode,toggleMode,loading,setLoading,products,setProducts,addProduct,product,edithandle,updateProduct,deleteProduct,order}} >
        {props.children}
    </myContext.Provider>
  )
}

export default myState;