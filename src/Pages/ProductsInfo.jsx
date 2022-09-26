import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {fetchProducts} from '../store/productSlices';

const ProductsInfo = () => {

const {data}=useSelector((state)=>state.product);
const [currentProduct,setCurrentProduct]=useState({});
const dispatch=useDispatch();
const {id}=useParams();
useEffect(()=>{
  if(data?.length ===0){
    dispatch(fetchProducts())
  }
  },[data?.length,dispatch]);

 useEffect(()=>{
    if(id){
        const tempData= data?.find((product)=>product._id===id);
        tempData && setCurrentProduct(tempData)
    }
 },[id])
 
  return (
    <div className="flex flex-wrap gap-5 justify-around items-start  object-center" >
     <div className="w-9/12  w-full border-2 rounded-xl  " key={currentProduct?._id}>
      <img src={currentProduct?.avatar} alt='' className='w-6/12 h-1/4 px-20 mx-56' />
        <h4>{currentProduct?.name}</h4>
        <h4>₹{currentProduct?.price}</h4>
        <h4 className="content-between p-2">{currentProduct?.description}</h4>
        {/* <button className="border-gray-50" onClick={()=>handelAdd(el)} >Add to cart</button> */}
      </div>
      
    </div>
  )
}

export default ProductsInfo
