import { onDomainCustomerResponses } from '@/actions/appointment'
import { onGetDomainProductsAndConnectedAccountId } from '@/actions/payments'
import PortalForm from '@/components/forms/portal/portal-form'
import React from 'react'

export default async function PortalPaymentPage({ params }: {
  params: {
    domainid: string
    customerid: string
  }
}) {
  const questions = await onDomainCustomerResponses(params.customerid)
  const products = await onGetDomainProductsAndConnectedAccountId(
    params.domainid
  )

  console.log('[portalpaymentpage customerid]', params.customerid)

  if (!questions) return null
  return <PortalForm
    email={questions.email!}
    products={products?.products}
    amount={products?.amount}
    domainid={params.domainid}
    customerId={params.customerid}
    questions={questions.questions}
    stripeId={products?.stripeId!}
    type="Payment"
  />
}
