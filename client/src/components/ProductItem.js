import React from 'react'
import { Label, Icon, Grid, Image, Header } from 'semantic-ui-react'

import './ProductItem.css'

const ProductItem = (props) => {
  const { name, price, image, rating, seller, description } = props.data
  return (
    <Grid
      style={{
        marginTop: '0.75em',
        marginBottom: '0.75em',
        borderColor: '#000000',
        borderRadius: '10px',
        boxShadow: '1px 1px 2px 2px rgba(0,0,0,0.07)',
      }}
    >
      <Grid.Column width={4}>
        <Image
          src={
            image
              ? image
              : 'https://react.semantic-ui.com/images/wireframe/square-image.png'
          }
        />
      </Grid.Column>
      <Grid.Column width={9}>
        <Header style={{ marginBottom: '1em' }} as='a'>
          {name}
        </Header>
        <br />
        <span className='cinema'>{seller}</span>
        <br />
        <div style={{ marginTop: '1em', marginBottom: '1em' }}>
          <Label tag as='a'>
            {price + 'đ'}
          </Label>
          <Icon color='yellow' name='star' /> {rating}
        </div>
        <p>{description}</p>
      </Grid.Column>
    </Grid>
  )
}

export default ProductItem
