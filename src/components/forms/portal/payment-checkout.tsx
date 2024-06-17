import React from 'react'

type Props = {
    onBack(): void
    products?:
    | {
        name: string
        image: string
        price: number
    }[]
    | undefined
    amount?: number
    onNext(): void
    stripeId?: string
}

export default function PaymentCheckout({
    onBack,
    onNext,
    amount,
    products,
    stripeId,
}: Props) {
    return (
        <div>PaymentCheckout</div>
    )
}