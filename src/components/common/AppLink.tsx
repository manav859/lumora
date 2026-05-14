import type { ComponentPropsWithoutRef, MouseEvent } from 'react'
import { navigateTo } from '../../lib/router'

type AppLinkProps = ComponentPropsWithoutRef<'a'>

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
}

export function AppLink({ href = '/', onClick, target, ...props }: AppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      isModifiedEvent(event) ||
      target === '_blank'
    ) {
      return
    }

    if (href.startsWith('/') || href.startsWith('#')) {
      event.preventDefault()

      const nextHref =
        href.startsWith('#') && typeof window !== 'undefined'
          ? `${window.location.pathname}${href}`
          : href

      navigateTo(nextHref)
    }
  }

  return <a {...props} href={href} onClick={handleClick} target={target} />
}
