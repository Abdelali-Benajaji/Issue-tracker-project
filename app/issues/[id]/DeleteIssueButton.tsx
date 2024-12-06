'use client'

import { TrashIcon } from '@radix-ui/react-icons'
import { AlertDialog, Button } from '@radix-ui/themes'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function DeleteIssueButton({issueId}: {issueId: number}) {
    const router = useRouter()
  return (
    <AlertDialog.Root>
    <AlertDialog.Trigger>
    <Button color='red'>
        <TrashIcon></TrashIcon>
        Delete issue
    </Button>
    </AlertDialog.Trigger>
    <AlertDialog.Content>
      <AlertDialog.Title>Confirm Deletetion</AlertDialog.Title>
      <AlertDialog.Description>Are you sure you want delete this Item?</AlertDialog.Description>
      <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
					<AlertDialog.Cancel>
						<Button color='violet'>Cancel</Button>
					</AlertDialog.Cancel>
					<AlertDialog.Action>
						<Button color='red' onClick={async()=>{
                            await axios.delete('/api/issues/' + issueId)
                            router.push('/issues')
                            router.refresh()
                        }}>Yes, delete account</Button>
					</AlertDialog.Action>
				</div>
    </AlertDialog.Content>

  </AlertDialog.Root>
  )
}

export default DeleteIssueButton