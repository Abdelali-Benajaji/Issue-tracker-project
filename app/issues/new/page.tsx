import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

function NewIssue() {
  return (
    <div className='m-w-80 space-y-4'>
        <h1>Create New Issue</h1>
        <TextField.Root placeholder="title" >
        </TextField.Root>

        <TextArea placeholder='description'></TextArea>

        <Button>Create New Issue</Button>

    </div>
  )
}

export default NewIssue