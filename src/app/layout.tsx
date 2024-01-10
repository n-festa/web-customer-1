import '@/styles/bootstrap.min.scss'

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  	return (
	    <html lang="en">
	      	<body>
	        {/* <ProgressBar /> */}
	        {children}
	      	</body>
	    </html>
  )
}
