import prisma from '@/prisma/client';
import { Box, Grid } from '@radix-ui/themes';
import { notFound } from 'next/navigation';
import EditIssueButton from './EditIssueButton';
import IssueDetailsComponent from './IssueDetailsComponent';

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
    <Grid columns={{initial:"1", md:"2"}} gap="5">
        <Box>
            <IssueDetailsComponent issue={issue} />
        </Box>
        <Box>
            <EditIssueButton issueId={issue.id}/>
        </Box>
    </Grid>
  )
}

export default IssueDetails