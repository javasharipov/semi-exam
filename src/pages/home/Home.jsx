import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import Editors from '../../components/editors/Editors'
import Cta from '../../components/cta/Cta'
import Posts from '../../components/posts/Posts'
import Products from '../../components/products/Products'
import { request } from '../../api'

const Home = () => {

const [products, setProducts] = useState([]);

  useEffect(() => {
    request
      .get("/products", {
        params: {
          limit: 8,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <>
        <Hero />
        <Editors />
        <Products products={products} />
        <Cta />
        <Posts />
    </>
  )
}

export default Home