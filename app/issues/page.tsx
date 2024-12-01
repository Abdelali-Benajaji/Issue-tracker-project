import prisma from '@/prisma/client'
import { Badge, Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssuesStatusBadge from '../components/issuesStatusBadge'
import delay from 'delay';
import NewIssueButton from './NewIssueButton'

async function  IssuesPage() {

  const issues = await prisma.issue.findMany()

  await delay(2000);
  return (
    <div>
      <NewIssueButton />
      

      <Table.Root variant='surface'>
        <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='hidden md:table-cell'>Created At</Table.ColumnHeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className='block md:hidden'>
                <IssuesStatusBadge status={issue.Status}/>
                </div>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><IssuesStatusBadge status={issue.Status}/></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default IssuesPage