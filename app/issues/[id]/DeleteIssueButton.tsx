'use client'

import { TrashIcon } from '@radix-ui/react-icons'
import { AlertDialog, Button } from '@radix-ui/themes'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import delay from 'delay';
import Spinner from '@/app/components/Spinner'


function DeleteIssueButton({ issueId }: { issueId: number }) {
    const router = useRouter()
    const [error, setError] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <Button color='red' disabled={isDeleting}>
                        <TrashIcon></TrashIcon>
                        {isDeleting && <Spinner />} Delete issue
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
                            <Button color='red' onClick={async () => {
                                try {
                                    setIsDeleting(true)
                                    await axios.delete('/api/issues/' + issueId)
                                    router.push('/issues')
                                    router.refresh()
                                } catch (error) {
                                    setIsDeleting(false)
                                    setError(true);
                                }

                            }}>Yes, delete account</Button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>

            </AlertDialog.Root>

            <AlertDialog.Root open={error}>
                <AlertDialog.Content>
                    <AlertDialog.Title>Error</AlertDialog.Title>
                    <AlertDialog.Description>This issue could not be deleted</AlertDialog.Description>
                    <Button color='gray' variant='soft' onClick={()=>setError(false)}>OK</Button>
                    
                </AlertDialog.Content>

            </AlertDialog.Root>
        </>
    )
}

export default DeleteIssueButton