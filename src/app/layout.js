import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL("https://watsonassistantxi.com"),
  title: { default: "Eco Incentive Bot", template: "%s | Eco Incentive Bot" },
  description: "Eco Incentive Bot",
  openGraph: {
    title: "🍉",
    description: "Eco Incentive",
    url: "https://watsonassistantxi.com",
    siteName: "",
    images: {
      url: "https://watson-xi.vercel.app/og1.png",
      width: 1920,
      height: 1080,
    },
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Eco Incentive Bot",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
