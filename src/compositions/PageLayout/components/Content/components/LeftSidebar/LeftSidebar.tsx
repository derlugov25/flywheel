'use client'

import React from 'react'

import { Logo } from 'components/ui'
import Navigation from 'compositions/Navigation/Navigation'
import LiveSwitcher from 'compositions/LiveSwitcher/LiveSwitcher'


const LeftSidebar: React.FC = () => {
  return (
    <div className="h-full">
      <div className="px-4 py-5 sticky top-0 flex items-center justify-start">
        <Logo className="h-6" />
        <a
          href="https://x.com/flywheelbet"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-10 text-grey-60 hover:text-orange-500 transition-colors"
          title="Follow us on X (Twitter)"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        {/* <button className="text-grey-60 hover:text-grey-90 transition" onClick={() => openModal('SearchModal')}>
          <Icon className="size-5" name="interface/search" />
        </button> */}
      </div>
      <div className="overflow-auto wd:h-[calc(100vh_-_4rem)] no-scrollbar">
        <LiveSwitcher />
        <Navigation className="mt-2" />
      </div>
    </div>
  )
}

export default LeftSidebar
