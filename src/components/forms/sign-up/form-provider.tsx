'use client'

import Loader from '@/components/custom/loader'
import AuthContextProvider from '@/context/use-auth-context'
import { useSignUpForm } from '@/hooks/use-sign-up'
import React, { ReactNode } from 'react'
import { FormProvider } from 'react-hook-form'

export default function SignUpFormProvider({ children }: { children: ReactNode }) {
  const { methods, onHandleSubmit, loading } = useSignUpForm()

  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form
          onSubmit={onHandleSubmit}
          className="h-full"
        >
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  )
}
