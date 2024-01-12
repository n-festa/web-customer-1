import Header from '../../ui/header';

export default function Layout({children,}: {children: React.ReactNode;}) {
  	return (
	    <div className="dark-mode">
	        {children}
	    </div>
  	)
}