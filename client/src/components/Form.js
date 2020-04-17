import React, { useState } from 'react'
import { Form, TextArea, Header, Button } from 'semantic-ui-react'

const FormSection = (props) => {
  const [urls, setUrls] = useState('')

  const onSubmit = async () => {
    props.setLoading(true)
    setInterval(() => props.setLoading(false), 2000)
  }

  return (
    <div>
      <Header as='h3'>URL</Header>
      <Form>
        <TextArea
          rows={5}
          placeholder='Insert URLs divided by enter character'
        ></TextArea>
        <Button onClick={onSubmit} style={{ marginTop: '1em' }} primary>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default FormSection
