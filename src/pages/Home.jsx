import React, {useEffect, useState} from 'react'
import ThemeButton from '../components/ThemeButton'
import ProductCard from '../components/ProductCard'
import { mockTheme1Produdcts } from '../data/mockData'

const Home = () => {
  const [products, setProducts] =useState([])

  useEffect(()=>{
    setTimeout(()=>{
      setProducts(mockTheme1Produdcts)
    }, 1000)
  },[])


  return (
    <>
    <ThemeButton products={products} setProducts={setProducts}/>
    <ProductCard products={products} setProducts={setProducts} />
    </>
  )
}

export default Home