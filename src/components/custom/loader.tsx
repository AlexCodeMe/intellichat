import { cn } from '@/lib/utils'
import React from 'react'
import Spinner from './spinner'

type Props = {
    loading: boolean
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}

export default function Loader({
    loading,
  children,
  noPadding,
  className,
}: Props) {
  return loading ? (
    <div className={cn(className || 'w-full py-5 flex justify-center')}>
      <Spinner noPadding={noPadding} />
    </div>
  ) : (
    children
  )
}