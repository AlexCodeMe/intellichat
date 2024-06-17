import InfoBar from '@/components/custom/infobar'
import BillingSettings from '@/components/settings/billing-settings'
import ChangePassword from '@/components/settings/change-password'
import DarkModeToggle from '@/components/settings/mode-toggle'
import React from 'react'

export default function SettingsPage() {
  return (
    <>
        <InfoBar />
        <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
            <BillingSettings />
            <DarkModeToggle />
            <ChangePassword />
        </div>
    </>
  )
}
