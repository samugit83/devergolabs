import './globals.css'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '../redux/redux_useclient_export.js'; 


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: {
		default: 'Devergolabs',
		template: 'Devergolabs'
	},
	description: 'This is the Awesome Devergolabs.',
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};


export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={`w-screen h-screen ${inter.className}`}  data-theme="devergolabs">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
