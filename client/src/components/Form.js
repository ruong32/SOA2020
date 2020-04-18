import React, { useState } from 'react'
import { Form, TextArea, Header, Button } from 'semantic-ui-react'
import axios from 'axios'

const FormSection = (props) => {
  const [urls, setUrls] = useState('')

  const onSubmit = async () => {
    props.setLoading(true)
    const res = await axios.post(
      '/get-product',
      { urls: urls },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    )
    props.setProducts(res.data)
    props.setLoading(false)
  }

  return (
    <div>
      <Header as='h3'>URL</Header>
      <Form>
        <TextArea
          rows={5}
          placeholder='Insert URLs divided by enter character'
          onChange={(e) => setUrls(e.target.value)}
        ></TextArea>
        <Button onClick={onSubmit} style={{ marginTop: '1em' }} primary>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default FormSection
