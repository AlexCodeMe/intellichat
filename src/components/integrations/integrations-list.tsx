'use client'

import Image from "next/image"
import { Card, CardContent, CardDescription } from "../ui/card"
import IntegrationTrigger from "./integration-trigger"

type IntegrationsListItemProps = {
    id: string
    name: 'stripe'
    logo: string
    description: string
    title: string
    modalDescription: string
}

export const INTEGRATION_LIST_ITEMS: IntegrationsListItemProps[] = [
    {
        id: '1',
        name: 'stripe',
        description:
            'Stripe is the fastest and easiest way to integrate payments and financial services into your software platform or marketplace.',
        logo: '914be637-39bf-47e6-bb81-37b553163945',
        title: 'Connect Stripe Account',
        modalDescription:
            'The world’s most successful platforms and marketplaces including Shopify and DoorDash, use Stripe Connect.',
    },
]


export default function IntegrationsList({ connections }: {
    connections: {
        stripe: boolean
    }
}) {
    return (
        <div className="flex-1 h-0 grid grid-cols-1 content-start lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {INTEGRATION_LIST_ITEMS.map((item) => (
                <Card key={item.id}>
                    <CardContent className="flex flex-col p-5 gap-2">
                        <div className="flex w-full justify-between items-start gap-x-20">
                            <div className="">
                                <div className="w-10 h-10 relative">
                                    <Image
                                        sizes="100vw"
                                        src={`https://ucarecdn.com/${item.logo}/`}
                                        alt="Logo"
                                        fill
                                    />
                                </div>
                                <h2 className="font-bold capitalize">{item.name}</h2>
                            </div>
                            <IntegrationTrigger
                                connections={connections}
                                title={item.title}
                                descrioption={item.modalDescription}
                                logo={item.logo}
                                name={item.name}
                            />
                        </div>
                        <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
