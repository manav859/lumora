import { useEffect, useState } from 'react'

export const navigationEventName = 'lumora:navigate'

export type RouteLocation = {
  hash: string
  pathname: string
}

function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/'
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

function readLocation(): RouteLocation {
  if (typeof window === 'undefined') {
    return { pathname: '/', hash: '' }
  }

  return {
    pathname: normalizePathname(window.location.pathname),
    hash: window.location.hash,
  }
}

export function scrollToHash(hash: string) {
  if (typeof window === 'undefined' || !hash) {
    return
  }

  const id = hash.replace('#', '')

  window.requestAnimationFrame(() => {
    const target = document.getElementById(id)

    if (target) {
      target.scrollIntoView({ behavior: 'auto', block: 'start' })
    }
  })
}

export function navigateTo(href: string, options?: { replace?: boolean }) {
  if (typeof window === 'undefined') {
    return
  }

  const url = new URL(href, window.location.origin)
  const nextHref = `${normalizePathname(url.pathname)}${url.hash}`
  const currentHref = `${normalizePathname(window.location.pathname)}${window.location.hash}`

  if (currentHref === nextHref) {
    if (url.hash) {
      scrollToHash(url.hash)
    }

    return
  }

  if (options?.replace) {
    window.history.replaceState({}, '', nextHref)
  } else {
    window.history.pushState({}, '', nextHref)
  }

  window.dispatchEvent(new Event(navigationEventName))
}

export function useRouteLocation() {
  const [location, setLocation] = useState<RouteLocation>(readLocation)

  useEffect(() => {
    const syncLocation = () => setLocation(readLocation())

    window.addEventListener('popstate', syncLocation)
    window.addEventListener('hashchange', syncLocation)
    window.addEventListener(navigationEventName, syncLocation)

    return () => {
      window.removeEventListener('popstate', syncLocation)
      window.removeEventListener('hashchange', syncLocation)
      window.removeEventListener(navigationEventName, syncLocation)
    }
  }, [])

  return location
}
