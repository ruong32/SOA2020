import React from 'react'
import ProductItem from './ProductItem'
import { ItemGroup, Header, Segment, Loader, Image, Grid } from 'semantic-ui-react'

const ProductList = (props) => {
  const data = [1, 2, 3]
  const { loading } = props
  return (
    <div>
      <Header as='h3'>Result</Header>
      {loading ? (
        <Segment>
          <Loader active />
          <Grid>
            <Grid.Column width={4}>
              <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
            </Grid.Column>
            <Grid.Column width={9}>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
          </Grid>
        </Segment>
      ) : (
        <ItemGroup>
          {data.map((product) => (
            <ProductItem></ProductItem>
          ))}
        </ItemGroup>
      )}
    </div>
  )
}

export default ProductList
