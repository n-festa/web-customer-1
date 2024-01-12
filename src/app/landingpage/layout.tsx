
import Header1 from '../ui/header/header1';

export default function Layout({children,}: {children: React.ReactNode;}) {
  	return (
	    <div className="landing-page-option-3 d-flex flex-column">
            <Header1 />
	        {children}
	    </div>
  )
}
