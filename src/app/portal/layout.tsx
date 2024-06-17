import Image from 'next/image'
import React, { ReactNode } from 'react'

export default function PortalLayout({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-col md:h-screen'>
            <div className="w-full bg-muted flex justify-center py-5">
                <Image src="/images/logo.png"
                    alt="LOGO"
                    sizes="100vw"
                    style={{
                        width: '100px',
                        height: 'auto',
                    }}
                    width={0} height={0}
                />
            </div>
            <div className="container flex justify-center flex-1 h-0 mt-12">
                {children}
            </div>
        </div>
    )
}
