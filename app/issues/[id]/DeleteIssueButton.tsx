import { Pencil2Icon, TrashIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

function DeleteIssueButton({issueId}: {issueId: number}) {
  return (
    <Button color='red'>
        <TrashIcon></TrashIcon>
        <Link href={`/issues/${issueId}/edit`} >Delete issue</Link>
    </Button>
  )
}

export default DeleteIssueButton