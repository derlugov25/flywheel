import cx from 'classnames'

import { Href } from 'components/navigation'


type LogoProps = {
  className?: string
}

const Logo: React.FC<LogoProps> = (props) => {
  const { className } = props

  return (
    <Href to="/" className={cx('flex items-center', className)}>
      <span className="text-white font-extrabold text-2xl leading-none tracking-wide">flywheel</span>
      <span className="ml-2 px-2.5 py-0.5 rounded bg-orange-500 text-black text-[11px] font-extrabold uppercase leading-none">
        bet
      </span>
    </Href>
  )
}

export default Logo
