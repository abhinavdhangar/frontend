import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage'
import Products from './components/Products'
import Product_Content from './components/Product_content'

function App() {
  const [count, setCount] = useState(0)
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })
  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:slug" element={<Product_Content />} />
          {/* <Route path='/image' element={<Swippe />} /> */}
          {/* <Route path='/rrr' element={<Example />} /> */}
        </Routes>
      </ApolloProvider>

    </Router>
  )
}

export default App
