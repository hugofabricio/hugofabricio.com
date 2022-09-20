import { AnimatePresence } from 'framer-motion'

import { wavePathVariant, waveVariant } from './Waves.animations'
import paths from './Waves.path'
import * as S from './Waves.styled'

export interface WavesProps {
  type?: 'left' | 'small'
}

const Waves = ({ type = 'left' }) => (
  <AnimatePresence>
    <S.Wave
      className="waves"
      viewBox="0 0 543 445"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={waveVariant}
      initial="hidden"
      animate="visible"
    >
      <S.WavePath
        // @ts-ignore
        d={paths[type].small}
        variants={wavePathVariant}
        fill="url(#waveGradientSmall)"
      />
      <S.WavePath
        // @ts-ignore
        d={paths[type].big}
        variants={wavePathVariant}
        fill="url(#waveGradientBig)"
      />
      <defs>
        <linearGradient
          id="waveGradientSmall"
          x1="270"
          y1="45"
          x2="270"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5825C7" />
          <stop offset="1" stopColor="#F61067" />
        </linearGradient>
        <linearGradient
          id="waveGradientBig"
          x1="230"
          y1="200"
          x2="230"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F61067" />
          <stop offset="1" stopColor="#5825C7" />
        </linearGradient>
      </defs>
    </S.Wave>
  </AnimatePresence>
)

export default Waves
