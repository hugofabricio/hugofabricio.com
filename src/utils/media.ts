import { rem } from 'polished'
import { hasKey } from './helpers'
import { breakpoints } from 'styles/tokens'

const media = (sizes: Record<Breakpoint, number> = breakpoints) => {
  const getNextBreakpoint = (breakpoint: Breakpoint) => {
    const keys = Object.keys(sizes)

    const index = keys.indexOf(breakpoint as string)

    return keys[index + 1]
  }

  const greaterThan = (breakpoint: Breakpoint) => {
    if (!hasKey(breakpoint, sizes)) {
      throw errors.BREAKPOINT_NOT_FOUND(breakpoint)
    }

    return `@media (min-width: ${rem(sizes[breakpoint])})`
  }

  const lessThan = (breakpoint: Breakpoint) => {
    if (!hasKey(breakpoint, sizes)) {
      throw errors.BREAKPOINT_NOT_FOUND(breakpoint)
    }

    const nextBreakpoint = getNextBreakpoint(breakpoint)

    if (!hasKey(nextBreakpoint, sizes)) {
      throw errors.NEXT_BREAKPOINT_NOT_FOUND(breakpoint as string)
    }

    return `@media (max-width: ${rem(sizes[nextBreakpoint] - 0.02)})`
  }

  const between = (min: Breakpoint, max: Breakpoint) => {
    if (!hasKey(min, sizes)) {
      throw errors.BREAKPOINT_NOT_FOUND(min)
    }

    if (!hasKey(max, sizes)) {
      throw errors.BREAKPOINT_NOT_FOUND(max)
    }

    return `@media (min-width: ${rem(sizes[min])}) and (max-width: ${rem(
      sizes[max] - 0.02
    )})`
  }

  const only = (breakpoint: Breakpoint) => {
    const nextBreakpoint = getNextBreakpoint(breakpoint)

    return hasKey(nextBreakpoint, sizes)
      ? between(breakpoint, nextBreakpoint)
      : greaterThan(breakpoint)
  }

  return {
    greaterThan,
    lessThan,
    between,
    only
  }
}

const errors = {
  BREAKPOINT_NOT_FOUND: (breakpoint: string) => `Breakpoint '${breakpoint}' not found`,
  NEXT_BREAKPOINT_NOT_FOUND: (breakpoint: string) =>
    `Next breakpoint for '${breakpoint}' not found`
}

export default media()
