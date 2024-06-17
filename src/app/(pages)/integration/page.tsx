import { onGetPaymentConnected } from '@/actions/settings'
import InfoBar from '@/components/custom/infobar'
import IntegrationsList from '@/components/integrations/integrations-list'
import React from 'react'

export default async function IntegrationPage() {
  const payment = await onGetPaymentConnected()

  const connections = {
    stripe: payment ? true : false,
  }

  return (
    <>
    <InfoBar />
    <IntegrationsList connections={connections} />
  </>
  )
}
