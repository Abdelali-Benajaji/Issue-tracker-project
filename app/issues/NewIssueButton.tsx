import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

function NewIssueButton() {
  return (
    <div className='mb-5'>
        <Button asChild><Link href="/issues/new">Create New Issue</Link></Button>
    </div>
    )
}

export default NewIssueButton