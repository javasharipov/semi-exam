import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import Products from '../../components/products/Products';
import { use } from 'react';

const Wishlist = () => {
    const [state] = useGlobalContext()
    console.log(state.wishlist);
    
    useEffect(() => {
        window.scrollTo({behavior: "smooth", left:0, top:0})
    }, [])

  return (
    <div>
        <Products products={state.wishlist} />
    </div>
  )
}

export default Wishlist