import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function DashboardPage() {
  return (
    <div className='flex justify-center items-center h-full'>
        <UserButton afterSignOutUrl='/auth/sign-in'/>
    </div>
  )
}
