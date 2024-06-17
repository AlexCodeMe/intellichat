import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import BookAppointmentDate from './booking-date'
import QuestionsForm from './questions-form'
import PaymentCheckout from './payment-checkout'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
  questions: {
    id: string
    question: string
    answered: string | null
  }[]
  type: 'Appointment' | 'Payment'
  register: UseFormRegister<FieldValues>
  error: FieldErrors<FieldValues>
  onNext(): void
  step: number
  date: Date | undefined
  onBooking: React.Dispatch<React.SetStateAction<Date | undefined>>
  onBack(): void
  onSlot(slot: string): void
  slot?: string
  loading: boolean
  bookings?:
  | {
    date: Date
    slot: string
  }[]
  | undefined
  products?:
  | {
    name: string
    image: string
    price: number
  }[]
  | undefined
  amount?: number
  stripeId?: string
}

export default function PortalSteps({
  questions,
  type,
  register,
  error,
  onNext,
  step,
  onBooking,
  date,
  onBack,
  onSlot,
  loading,
  slot,
  products,
  bookings,
  amount,
  stripeId,
}: Props) {
  if (step == 1) {
    return (
      <QuestionsForm
        register={register}
        error={error}
        onNext={onNext}
        questions={questions}
      />
    )
  }

  if (step == 2 && type == 'Appointment') {
    return (
      <BookAppointmentDate
        date={date}
        bookings={bookings}
        currentSlot={slot}
        register={register}
        onBack={onBack}
        onBooking={onBooking}
        onSlot={onSlot}
        loading={loading}
      />
    )
  }


  if (step == 2 && type == 'Payment') {
    return (
      <PaymentCheckout
        products={products}
        stripeId={stripeId}
        onBack={onBack}
        onNext={onNext}
        amount={amount}
      />
    )
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div>
        <h2 className="font-bold text-gray-600 text-4xl">Thank You</h2>
        <p className="text-center">
          Thank you for taking the time to fill in this form. We look forward to
          <br /> speaking to you soon.
        </p>
      </div>
      <div>
        <Button className='bg-grandis text-lg border-ironside'>
          <Link href='/dashboard'>Back to the Dashboard</Link>
        </Button>
        <Button className='bg-grandis text-lg border-ironside'>
          <Link href='/appointment'>View Appointments</Link>
        </Button>

      </div>
    </div>
  )
}
