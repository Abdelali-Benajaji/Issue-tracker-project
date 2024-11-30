'use client'

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'

function NewIssue() {

  
  return (
    <div className='max-w-90 space-y-4'>
        <h1>Create New Issue</h1>
        <TextField.Root placeholder="title" >
        </TextField.Root>

        <SimpleMDE placeholder="Description" />

        <Button>Create New Issue</Button>

    </div>
  )
}

export default NewIssue