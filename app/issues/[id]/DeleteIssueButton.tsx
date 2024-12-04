import { TrashIcon } from '@radix-ui/react-icons'
import { AlertDialog, Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

function DeleteIssueButton({issueId}: {issueId: number}) {
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
						<Button color='red'>Yes, delete account</Button>
					</AlertDialog.Action>
				</div>
    </AlertDialog.Content>

  </AlertDialog.Root>
  )
}

export default DeleteIssueButton