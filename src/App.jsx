import { useState } from 'react'
import './App.css'
import { Cart } from './components/Cart/Cart'
import { Header } from './components/Header/Header'
import { Products } from './components/Products/Products'
import { CartProvider } from './context/cart'
import { useFilters } from './hooks/useFilters'
import { products as initialProducts } from './mocks/products.json'



function App() {
  const [products] = useState(initialProducts)
  const { filterProduts } = useFilters()

  const filteredProducts = filterProduts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
