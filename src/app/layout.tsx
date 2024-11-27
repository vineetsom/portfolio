import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Footer from '../components/layout/Footer'
import CustomCursor from '../components/ui/CustomCursor'
import PageTransition from '../components/ui/PageTransition'
import { generateMetadata } from '../lib/metadata'
import ScrollToTop from '../components/ui/ScrollToTop';
import { ThemeProvider } from '../context/ThemeContext';
import ClientOnly from '../components/ClientOnly';
import NavbarMenu from '../components/ui/navbar-menu';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...generateMetadata('/')
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="viewport-fix" strategy="beforeInteractive">{`
          function setViewportHeight() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
          }
          
          // Initial set
          setViewportHeight();
          
          // Update on resize and orientation change
          window.addEventListener('resize', setViewportHeight);
          window.addEventListener('orientationchange', () => {
            setTimeout(setViewportHeight, 100);
          });
          
          // Update on page load
          window.addEventListener('load', setViewportHeight);
          
          // Update on scroll for mobile browsers
          if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            window.addEventListener('scroll', () => {
              clearTimeout(window.scrollTimeout);
              window.scrollTimeout = setTimeout(setViewportHeight, 100);
            });
          }
        `}</Script>
      </head>
      <body className={`${inter.className} min-h-screen text-black dark:text-white bg-transparent`}>
        <ThemeProvider>
          <ClientOnly>
            <CustomCursor />
          </ClientOnly>
          <NavbarMenu />
          <main className="relative">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <ClientOnly>
            <ScrollToTop />
          </ClientOnly>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
