import React from 'react'
import { Button } from '../ui/button'
import Loader from '../custom/loader'
import { useStripe } from '@/hooks/use-billing'

export default function StripeConnect({ connected }: {
    connected: boolean
}) {
    const { onStripeConnect, onStripeAccountPending } = useStripe()

    return (
      <Button
        disabled={connected}
        onClick={onStripeConnect}
      >
        <Loader loading={onStripeAccountPending}>
          {connected ? 'Connected' : 'Connect to stripe'}
        </Loader>
      </Button>
    )
}
