import React from 'react'
import FormGenerator from '../form-generator'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    message: string
    register: UseFormRegister<FieldValues>
    errors: FieldErrors<FieldValues>
}

export default function WelcomeMessage({
    message,
    register,
    errors, }: Props) {
    return (
        <div className="flex flex-col gap-2">
            <div>
                <p className='text-sm font-medium'>Greeting message</p>
                <p className='text-sm font-light'>Customize your welcome message"</p>
            </div>
            <div className="lg:w-[500px]">
                <FormGenerator
                    placeholder={message}
                    inputType="textarea"
                    lines={2}
                    register={register}
                    errors={errors}
                    name="welcomeMessage"
                    type="text"
                />
            </div>
        </div>
    )
}