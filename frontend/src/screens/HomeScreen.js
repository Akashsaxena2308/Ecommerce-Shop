import React , { useState ,useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fecthProducts = async () => {
      const Data = await axios.get('/api/products')

      setProducts(Data.data)
    }

    fecthProducts();
  } , [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
