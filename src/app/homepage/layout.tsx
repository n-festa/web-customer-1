import Header from '../ui/header';

export default function Layout({children,}: {children: React.ReactNode;}) {
  	return (
	    <div className="">
            <Header />
	        {children}
	    </div>
  	)
}
