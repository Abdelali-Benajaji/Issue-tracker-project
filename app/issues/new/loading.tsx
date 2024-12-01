import { Box } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

async function CreateIssueLoading() {


  return (
    <Box className='max-w-xl'>
      <Skeleton />
      <Skeleton height="8rem"/>
    </Box>
  )
}

export default CreateIssueLoading