'use client'

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { useHelpDesk } from '@/hooks/use-settings'
import React from 'react'
import FormGenerator from '../form-generator'
import { Button } from '@/components/ui/button'
import Loader from '@/components/custom/loader'
import Accordion from '@/components/custom/accordion'

export default function HelpDesk({ id }: { id: string }) {
    const {
        register,
        errors,
        onSubmitQuestion,
        isQuestions,
        loading
    } = useHelpDesk(id)

    return (
        <Card className="w-full grid grid-cols-1 lg:grid-cols-2">
            <CardContent className="p-6 border-r-[1px]">
                <CardTitle>Help Desk</CardTitle>
                <form
                    onSubmit={onSubmitQuestion}
                    className="flex flex-col gap-6 mt-10"
                >
                    <div className="flex flex-col gap-3">
                        <div>
                            <p className='text-sm font-normal'>Question</p>
                            <p className='text-sm font-light'>Add a question that you believe is frequently asked.</p>
                        </div>
                        <FormGenerator
                            inputType="input"
                            register={register}
                            errors={errors}
                            form="help-desk-form"
                            name="question"
                            placeholder="Type your question"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                    <div>
                            <p className='text-sm font-normal'>Answer to question</p>
                            <p className='text-sm font-light'>The answer for the question above.</p>
                        </div>
                        <FormGenerator
                            inputType="textarea"
                            register={register}
                            errors={errors}
                            name="answer"
                            form="help-desk-form"
                            placeholder="Type your answer"
                            type="text"
                            lines={5}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="bg-orange hover:bg-orange hover:opacity-70 transition duration-150 ease-in-out text-white font-semibold"
                    >
                        Create
                    </Button>
                </form>
            </CardContent>
            <CardContent className="p-6 overflow-y-auto chat-window">
                <Loader loading={loading}>
                    {isQuestions.length ? (
                        isQuestions.map((question) => (
                            <Accordion key={question.id}
                                trigger={question.question}
                                content={question.answer}
                            />
                        ))
                    ) : (
                        <CardDescription>No Questions to show</CardDescription>
                    )}
                </Loader>
            </CardContent>
        </Card>
    )
}
