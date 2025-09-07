'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
// import { openModal } from '@locmod/modal'
import { useWallet } from 'wallet'
import { usePrivy } from '@privy-io/react-auth'
import { useFreezeBodyScroll } from 'hooks'

import { Icon, Logo } from 'components/ui'
import { Button, buttonMessages } from 'components/inputs'
import Navigation from 'compositions/Navigation/Navigation'
import LiveSwitcher from 'compositions/LiveSwitcher/LiveSwitcher'

import Controls from '../Controls/Controls'


const Content: React.FC = () => {
  useFreezeBodyScroll()

  return (
    <div className="fixed top-[54px] bottom-0 left-0 nr:w-[22.5rem] mb:w-full bg-bg-l0 overflow-auto no-scrollbar">
      <LiveSwitcher />
      <Navigation className="mt-2" />
    </div>
  )
}

const Header: React.FC = () => {
  const { account, isReconnecting, isConnecting } = useWallet()
  const pathname = usePathname()
  const { login } = usePrivy()
  const [ isVisible, setVisibility ] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setVisibility((v) => !v)
  }

  useEffect(() => {
    if (isVisible) {
      const handleOutsideClick = (event: MouseEvent) => {
        const composedPath = event.composedPath()

        if (!composedPath.includes(containerRef.current!)) {
          setVisibility(false)
        }
      }

      document.addEventListener('click', handleOutsideClick, { capture: true })

      return () => {
        document.removeEventListener('click', handleOutsideClick, { capture: true })
      }
    }
  }, [ isVisible ])

  useEffect(() => {
    setVisibility(false)
  }, [ pathname ])

  return (
    <div ref={containerRef} className="py-2 px-5 bg-bg-l0">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div onClick={handleClick}>
            <Icon
              className="text-grey-60 h-6 w-6 mr-3"
              name={isVisible ? 'interface/close' : 'interface/burger_menu'}
            />
          </div>
          <Logo className="h-4" />
        </div>
        <a
          href="https://x.com/flywheelbet"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-3 text-grey-60 hover:text-orange-500 transition-colors"
          title="Follow us on X (Twitter)"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        {
          Boolean(account) ? (
            <Controls />
          ) : (
            <Button
              className="ml-auto"
              title={buttonMessages.connectWallet}
              size={32}
              loading={isConnecting || isReconnecting}
              onClick={login}
            />
          )
        }
      </div>
      {
        isVisible && (
          <Content />
        )
      }
    </div>
  )
}

export default Header
