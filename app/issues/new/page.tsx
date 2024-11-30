'use client'

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios'
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import {useForm, Controller} from "react-hook-form"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssuesSchema } from "@/app/validation";
import { z } from "zod";

type IssueForm = z.infer<typeof createIssuesSchema>;
function NewIssue() {

  const [error ,setError] = useState('')
  const router = useRouter()
  const {register, control, handleSubmit, formState: { errors }} = useForm<IssueForm>({
    resolver :zodResolver(createIssuesSchema)
  });

  // const   submitData = async (data) => {
  //     await axios.post('/api/issues',data)
  // }

  
  return (
    <div className="max-w-100">
      {error && <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
      <form className=' space-y-4' onSubmit={handleSubmit(async (data) =>{
        try {
            await axios.post('/api/issues', data)
            router.push('/issues')
        } catch (error) {
          setError("Unespected error")
        }

      })}>
          <h1>Create New Issue</h1>
          <TextField.Root placeholder="Title"  {...register('title')} />
          {errors.title && <Text color="red" as="p">{errors.title.message}</Text>}
          <Controller 
            name="description"
            control={control}
            render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
          />
          {errors.description && <Text color="red" as="p">{errors.description.message}</Text>}
          

          <Button>Create New Issue</Button>

      </form>
    </div>
  )
}

export default NewIssue