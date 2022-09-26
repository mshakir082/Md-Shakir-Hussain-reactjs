import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import {
  fetchProducts,
  setFilter,
  
} from "../store/productSlices";
import {fetchCategories,setFilterCate} from '../store/categoriesSlice'
import { STATUSES } from "../store/productSlices";
import { Link } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    status,
    filter,
  } = useSelector((state) => state.product);
  const { categories, filterCat } = useSelector((state) => state.category);
  const [singl, setProducts] = useState("");
  useEffect(() => {
    if (singl) {
      dispatch(setFilter(singl));
      dispatch(setFilterCate(singl));
      } else {
      dispatch(fetchProducts());
      dispatch(fetchCategories());
    }
  }, [singl]);
  const handelAdd = (product) => {
    dispatch(add(product));
  };

  const handelChange = (e) => {
    let value = e.target.value;
    setProducts(value);
  };

  if (status == STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status == STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      <div className=" flex flex-wrap gap-5 justify-around divide-gray-500 border rounded-md w-full p-4 my-1 ">
        <div>
          <label>Filter by: Products category </label>
          <select id="selectTegFilter" onChange={handelChange}>
            <option value="all">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Accessories">Accessories</option>
            <option value="Hobby">Hobby</option>
          </select>
        </div>
        <div>
          {" "}
          <h1 className="text-2xl">Products</h1>
        </div>
        <div>
          <Link to="/addToProduct">
            <button className="border-green-500 border rounded-md p-2 ">
              Add new Product
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 justify-around items-start">
        {products
          ?.filter((el) => {
            if (filter === "all") {
              return el;
            } else if (filter) {
              return el.category === filter;
            } else {
              return el;
            }
          })
          .map((el) => (
            <div
              className="max-w-xs  w-full border-2 rounded-xl  "
              key={el._id}
            >
              <Link to={`/product/${el._id}`}>
                {" "}
                <div>
                  <img src={el.avatar} alt="" className="w-9/14 h-1/4 px-14" />
                  <h4>{el.name}</h4>
                  <h4>₹{el.price}</h4>
                </div>
              </Link>
              <button
                className="border-red-500 border rounded-md my-1 p-1"
                onClick={() => handelAdd(el)}
              >
                favorite
              </button>
            </div>
          ))}
      </div>

      {/* Category Map Sections */}

      <div className="flex flex-wrap gap-5 justify-around items-start">
        {categories
          ?.filter((el) => {
            if (filterCat === "all") {
              return el;
            } else if (filterCat) {
              return el.category === filterCat;
            } else {
              return el;
            }
          })
          .map((el) => (
            <div
              className="max-w-xs  w-full border-2 rounded-xl  "
              key={el._id}
            >
              <Link to={`/product/${el._id}`}>
                {" "}
                <div>
                  <img src={el.avatar} alt="" className="w-9/14 h-1/4 px-14" />
                  <h4>{el.name}</h4>
                  <h4>₹{el.price}</h4>
                </div>
              </Link>
              <button
                className="border-red-500 border rounded-md my-1 p-1"
                onClick={() => handelAdd(el)}
              >
                favorite
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
