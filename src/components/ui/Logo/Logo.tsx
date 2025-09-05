import cx from 'classnames'
import Image from 'next/image'

import { Href } from 'components/navigation'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <Image
        src="/images/flywheel.jpg"
        alt="Flywheel"
        width={40}
        height={40}
        className="h-10 w-10 rounded fire-pulse"
      />
      <span className="ml-2 text-white font-extrabold text-2xl leading-none tracking-wide">flywheel</span>
      <span className="ml-2 px-2.5 py-0.5 rounded bg-orange-500 text-black text-[11px] font-extrabold uppercase leading-none fire-glow">
        bet
      </span>
    </Href>
  )
}

export default Logo
