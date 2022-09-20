export const waveVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  }
}

export const wavePathVariant = {
  hidden: {
    opacity: 0,
    translateY: '100%'
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      type: 'tween',
      duration: 1
    }
  }
}
