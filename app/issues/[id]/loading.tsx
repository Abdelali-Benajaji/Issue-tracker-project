import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

async function IssueDetailsLoading() {
  
  return (
    <Box>
        <Heading><Skeleton/></Heading>
        <Flex gap="3" my="3">
            <Skeleton/>
            <Text><Skeleton/></Text>            
        </Flex>

        <Card className="prose" mt="4">
            <Skeleton/>
        </Card>
    </Box>
  )
}

export default IssueDetailsLoading