import { onGetCurrentDomainInfo } from '@/actions/settings'
import InfoBar from '@/components/custom/infobar'
import BotTrainingForm from '@/components/forms/settings/bot-training'
import SettingsForm from '@/components/forms/settings/settings-form'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function SettingsDomainPage({ params }: {
    params: { domain: string }
}) {
    const domain = await onGetCurrentDomainInfo(params.domain)
  if (!domain) redirect('/dashboard')

  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0">
        <SettingsForm
          plan={domain.subscription?.plan!}
          chatBot={domain.domains[0].chatBot}
          id={domain.domains[0].id}
          name={domain.domains[0].name}
        />
        <BotTrainingForm id={domain.domains[0].id} />
        {/* <ProductTable
          id={domain.domains[0].id}
          products={domain.domains[0].products || []}
        /> */}
      </div>
    </>
  )
}
