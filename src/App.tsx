import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { getProductBySlug } from './data/siteContent'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { scrollToHash, useRouteLocation } from './lib/router'
import { useLighting } from './context/useLighting'
import { AboutPage } from './pages/AboutPage'
import { CartPage } from './pages/CartPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { JournalPage } from './pages/JournalPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductPage } from './pages/ProductPage'
import { ShopPage } from './pages/ShopPage'

function resolvePage(pathname: string) {
  if (pathname === '/') {
    return { key: '/', node: <HomePage />, title: 'LUMORA | Premium Sculptural Lighting' }
  }

  if (pathname === '/shop') {
    return { key: '/shop', node: <ShopPage />, title: 'Shop | LUMORA' }
  }

  if (pathname === '/about') {
    return { key: '/about', node: <AboutPage />, title: 'About | LUMORA' }
  }

  if (pathname === '/journal') {
    return { key: '/journal', node: <JournalPage />, title: 'Journal | LUMORA' }
  }

  if (pathname === '/contact') {
    return { key: '/contact', node: <ContactPage />, title: 'Contact | LUMORA' }
  }

  if (pathname === '/cart') {
    return { key: '/cart', node: <CartPage />, title: 'Cart | LUMORA' }
  }

  const productMatch = pathname.match(/^\/product\/([^/]+)$/)

  if (productMatch) {
    const product = getProductBySlug(productMatch[1])

    if (product) {
      return {
        key: `/product/${product.slug}`,
        node: <ProductPage product={product} />,
        title: `${product.name} | LUMORA`,
      }
    }
  }

  return { key: '404', node: <NotFoundPage />, title: 'Page Not Found | LUMORA' }
}

function App() {
  const { lampOn } = useLighting()
  const location = useRouteLocation()
  const page = useMemo(() => resolvePage(location.pathname), [location.pathname])
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    document.title = page.title
  }, [page.title])

  useEffect(() => {
    if (location.hash) {
      scrollToHash(location.hash)
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.hash, location.pathname])

  return (
    <main
      className="lumora-app-shell lumora-theme-transition"
      data-lamp-state={lampOn ? 'on' : 'off'}
    >
      <Header pathname={location.pathname} />
      <AnimatePresence mode="sync">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: 6 }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
          key={page.key}
          transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          {page.node}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </main>
  )
}

export default App
