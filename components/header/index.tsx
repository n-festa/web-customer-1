import Link from "next/link";
/*
type HeaderType = {
  isErrorPage?: Boolean;
}
*/
const Header = () => {

    return(
        <section className="full-width-header-navigation">
                <header className="header d-flex align-items-center justify-content-center flex-column h-100">
                    <div className="d-flex justify-content-between align-items-center container">
                        <div className="d-flex align-items-center gap-4">
                            <Link href="/">
                                <img className="fictional-company-logo"
                                     alt="fictional-company-logo"
                                     src="/images/logo1.svg"
                                />
                            </Link>

                            <div className="navigation d-flex gap-4 align-items-center">
                                <div className="navigation-button">
                                    <Link href="#order-section">
                                        <b className="text">Đặt hàng</b>
                                    </Link>
                                </div>
                                <div className="navigation-button">
                                    <Link href="#contact-section">   
                                        <b className="text">Dành cho Đối tác</b>
                                    </Link>
                                </div>
                                <div className="navigation-button">
                                    <Link href="#download-section">
                                        <b className="text">Tải App</b>
                                    </Link>
                                </div>
                                <div className="navigation-button">
                                    <Link href="#footer-section">
                                        <b className="text">Liên hệ</b>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="navigation-actions-wrapper d-flex gap-3">
                            <div className="navigation-actions d-flex align-items-center">
                                <div className="login-button">
                                    <Link href="/login">
                                        <a className="font-weight-600">Đăng nhập</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item-button d-flex">
                                <img className="small-icon"
                                     alt="small-icon"
                                     src="/images/shoppingbag03.svg"
                                />
                            </div>
                            <div className="language-button d-flex align-items-center gap-1">
                                <div className="language-text">VIE</div>
                                <img className="small-icon"
                                     alt=""
                                     src="/images/vn.svg"
                                />
                            </div>
                        </div>
                    </div>
                </header>
            </section>
    )
};


export default Header;
