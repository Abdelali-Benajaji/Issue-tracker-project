import { Box, Skeleton } from '@radix-ui/themes'
import React from 'react'

function IssueFormSkeleton() {
  return (
    <Box className='space-y-4'>
      <Skeleton height="2rem"/>
      <Skeleton height="20rem"/>
    </Box>
  )
}

export default IssueFormSkeleton