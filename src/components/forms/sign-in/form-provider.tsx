'use client'

import Loader from '@/components/custom/loader'
import AuthContextProvider from '@/context/use-auth-context'
import useSignInForm from '@/hooks/use-sign-in'
import React, { ReactNode } from 'react'
import { FormProvider } from 'react-hook-form'

export default function SignInFormProvider({ children }: { children: ReactNode }) {
    const { methods, onHandleSubmit, loading } = useSignInForm()

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
