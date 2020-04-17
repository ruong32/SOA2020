import React, { useState } from 'react'
import { Container, Header, Icon, Divider } from 'semantic-ui-react'

import FormSection from '../components/Form'
import ProductList from '../components/ProductList'

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <Container>
      <Header as='h2'>
        <Icon name='shop' />
        <Header.Content>
          Shopping Spider
          <Header.Subheader>Get what you want</Header.Subheader>
        </Header.Content>
      </Header>
      <Divider></Divider>
      <FormSection setLoading={setLoading} setProducts={setProducts} />
      <Divider />
      <ProductList loading={loading} products={products} />
    </Container>
  )
}

export default Home
