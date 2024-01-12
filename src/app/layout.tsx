import '@/styles/global.css';
import '@/styles/bootstrap.min.css';
import '@/styles/layout.css'
import '@/styles/fonts.css'
import '@/styles/order.css'
import '@/styles/login.css'
import '@/styles/style.css'

import Head from "next/head"

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  	return (
	    <html lang="en">
			<Head>
				<link rel="icon" href="/images/logo.ico" />
			</Head>
	      	<body>
	        {/* <ProgressBar /> */}
			
	        {children}
			
	      	</body>
	    </html>
  )
}
