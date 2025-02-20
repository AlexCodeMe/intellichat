'use client'

import React from 'react'
import FormGenerator from '../form-generator'
import { useFormContext } from 'react-hook-form'

type UserRegistrationProps = {
    id: string
    type: 'email' | 'text' | 'password'
    inputType: 'select' | 'input'
    options?: { value: string; label: string; id: string }[]
    label?: string
    placeholder: string
    name: string
}

const USER_LOGIN_FORM: UserRegistrationProps[] = [
    {
        id: '1',
        inputType: 'input',
        placeholder: 'Enter your email',
        name: 'email',
        type: 'email',
    },
    {
        id: '2',
        inputType: 'input',
        placeholder: 'Password',
        name: 'password',
        type: 'password',
    },
]

export default function LoginForm() {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    return (
        <>
            <h2 className="text-gravel md:text-4xl font-bold">Login</h2>
            <p className="text-iridium md:text-sm">
                You will receive a one time password
            </p>
            {USER_LOGIN_FORM.map((field) => (
                <FormGenerator
                    key={field.id}
                    {...field}
                    errors={errors}
                    register={register}
                    name={field.name}
                />
            ))}
        </>
    )
}
