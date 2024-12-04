'use client'

import dynamic from 'next/dynamic'
import IssueFormSkeleton from '../_components/issueFormSkeleton';

const IssueForm = dynamic(
  () => import('@/app/issues/_components/IssueForm'),
  { ssr : false,
    loading : () =><IssueFormSkeleton />
   }
);

function NewIssueForm() {
  return (
    <IssueForm />
  )
}

export default NewIssueForm