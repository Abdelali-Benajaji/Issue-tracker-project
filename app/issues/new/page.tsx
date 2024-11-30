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
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssuesSchema>;

function NewIssue() {

  const [error ,setError] = useState('')
  const [isSubmit ,setIsSubmit] = useState(false)
  const router = useRouter()
  const {register, control, handleSubmit, formState: { errors }} = useForm<IssueForm>({
    resolver :zodResolver(createIssuesSchema)
  });
  
  return (
    <div className="max-w-100">
      {error && <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>}
      <form className=' space-y-4' onSubmit={handleSubmit(async (data) =>{
        try {
          setIsSubmit(true)
            await axios.post('/api/issues', data)
            router.push('/issues')
        } catch (error) {
          setIsSubmit(false)
          setError("Unespected error")
        }

      })}>
          <h1>Create New Issue</h1>
          <TextField.Root placeholder="Title"  {...register('title')} />
          <ErrorMessage>
            {errors.title?.message}
          </ErrorMessage>
          <Controller 
            name="description"
            control={control}
            render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}
          />
          <ErrorMessage>
            {errors.description?.message}
          </ErrorMessage>
          

          <Button disabled={isSubmit}>Submit New Issue {isSubmit && <Spinner />}</Button>

      </form>
    </div>
  )
}

export default NewIssue