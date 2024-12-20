import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

function EditIssueButton({issueId}: {issueId: number}) {
  return (
    <Button asChild>
        
        <Link href={`/issues/${issueId}/edit`} ><Pencil2Icon></Pencil2Icon> Edit issue</Link>
    </Button>
  )
}

export default EditIssueButton