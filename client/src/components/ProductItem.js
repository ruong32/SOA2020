import React from 'react'
import { Label, Icon, Grid, Image, Header } from 'semantic-ui-react'

import './ProductItem.css'

const ProductItem = () => {
  return (
    <Grid>
      <Grid.Column width={4}>
        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
      </Grid.Column>
      <Grid.Column width={9}>
        <Header style={{ marginBottom: '1em' }} as='a'>
          Cute Dog
        </Header>
        <br />
        <span className='cinema'>Điện máy Pico</span>
        <br />
        <div style={{ marginTop: '1em', marginBottom: '1em' }}>
          <Label tag as='a'>
            $10.00
          </Label>
          <Icon color='yellow' name='star' /> 4.9
        </div>
        <p>
          Many people also have their own barometers for what makes a cute dog. Many
          people also have their own barometers for what makes a cute dog.
        </p>
      </Grid.Column>
    </Grid>
  )
}

export default ProductItem
