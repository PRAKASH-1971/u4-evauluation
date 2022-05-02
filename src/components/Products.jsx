import React, { useEffect } from "react";
import { Select , Grid} from "./Styled";
import {Navbar} from "./Navbar"
import {useDispatch, useSelector} from "react-redux";
import actionTypes from "../Redux/actionTypes";


export const Products = () => {
  const dispatch = useDispatch()
  const {data, isLoading} = useSelector((state)=>state.reducer)
  console.log(data)



  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    // dispatch({ type: actionTypes.GET_REQUEST })
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
  };

  const dataaa = async ()=>{
    var res = await("https://movie-fake-server.herokuapp.com/products")
    console.log(res)
  }
     
dataaa()
  return (
    <>
    <Navbar/>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
      </Grid>
    </>
  );
};
