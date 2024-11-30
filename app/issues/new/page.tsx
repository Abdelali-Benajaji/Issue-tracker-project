'use client'

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios'
import { Button, TextField } from '@radix-ui/themes'
import {useForm, Controller} from "react-hook-form"
import { useRouter } from "next/navigation";

interface IssueForm{
  title: string;
  description: string;
}
function NewIssue() {

  const router = useRouter()
  const {register, control, handleSubmit} = useForm<IssueForm>();

  // const   submitData = async (data) => {
  //     await axios.post('/api/issues',data)
  // }

  
  return (
    <form className='max-w-90 space-y-4' onSubmit={handleSubmit(async (data) =>{
      await axios.post('/api/issues', data)
      router.push('/issues')
    })}>
        <h1>Create New Issue</h1>
        <TextField.Root placeholder="Title"  {...register('title')} />

        <Controller 
          name="description"
          control={control}
          render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
        />
        

        <Button>Create New Issue</Button>

    </form>
  )
}

export default NewIssue