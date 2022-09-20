import styled from 'styled-components'
import { motion } from 'framer-motion'
import { media } from 'utils'

export const Waves = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  overflow: hidden;

  ${media.lessThan('xs')} {
    .waves:last-child {
      display: none;
    }
  }
`

export const SocialWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  margin-top: auto;
`

export const SectionContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 240px;
  padding-bottom: 60px;
  width: 100%;

  ${media.lessThan('xs')} {
    padding-top: 140px;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
`

export const SectionIntro = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 40px;
  height: 100%;
  min-height: 100%;
`
