import IssuesStatusBadge from '@/app/components/issuesStatusBadge'
import { Issue } from '@prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

function IssueDetailsComponent({issue}: {issue: Issue}) {
    return (
        <div>
            <Heading>{issue.title}</Heading>
            <Flex gap="3" my="3">
                <IssuesStatusBadge status={issue.Status} />
                <Text>{issue.createdAt.toDateString()}</Text>
            </Flex>

            <Card className="prose" mt="4">
                <ReactMarkdown>{issue.description}</ReactMarkdown>
            </Card>
        </div>
    )
}

export default IssueDetailsComponent