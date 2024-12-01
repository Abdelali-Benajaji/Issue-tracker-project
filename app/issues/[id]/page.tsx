import IssuesStatusBadge from '@/app/components/issuesStatusBadge';
import prisma from '@/prisma/client';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import ReactMarkdown from  'react-markdown'

interface Props{
    params: {id: string};
}

async function IssueDetails({params}:Props) {
    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(params.id)}
    })

    if(!issue)
        notFound()
  return (
    <div>
        <Heading>{issue.title}</Heading>
        <Flex gap="3" my="3">
            <IssuesStatusBadge status={issue.Status}/>
            <Text>{issue.createdAt.toDateString()}</Text>            
        </Flex>

        <Card className="prose" mt="4">
            <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
    </div>
  )
}

export default IssueDetails