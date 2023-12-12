import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})

export const metadata = {
  title: {
    default:
      "Optimize and Increase Your Site's Engagement Rate | Publisher Analytics",
  },
  description:
    "Publisher Analytics leverages A/B testing to help you optimize your site's engagement. Understanding what keeps your audience intrigued has never been easier.",
  icons: {
    icon: ['/assets/favicon.ico?v=7'],
    apple: ['/assets/apple-touch-icon.png?v=7'],
    shortcut: ['/assets/apple-touch-icon.png'],
  },
  openGraph: {
    title:
      "Optimize and Increase Your Site's Engagement Rate | Publisher Analytics",
    description:
      "Publisher Analytics leverages A/B testing to help you optimize your site's engagement. Understanding what keeps your audience intrigued has never been easier.",
    url: 'https://publisheranalytics.ai',
    siteName: 'PublisherAnalytics.ai',
    images: [
      {
        url: '/assets/publisher-analytics-logo-1800-1600.png',
        width: 800,
        height: 600,
        alt: 'Publisher Analytics logo',
      },
      {
        url: '/assets/publisher-analytics-logo-800-600.png',
        width: 1800,
        height: 1600,
        alt: 'Publisher Analytics logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
