'use client'
import Link from "next/link";

type HeaderType = {
    isErrorPage?: Boolean;
}

const Header1 = ({ isErrorPage }: HeaderType) => {
    
    return(
        <section className="full-width-header-navigation">
            <div className="header d-flex align-items-center justify-content-center flex-column h-100">
                <div className="d-flex justify-content-between align-items-center container">
                    <div className="d-flex align-items-center gap-4">
                        <img className="" alt="" src="/images/logo1.svg" />
                        <div className="navigation d-flex gap-4 align-items-center">
                            <div className="navigation-button">
                                <Link href="http://localhost:3001/#order-section1" className="text fw-bolder">
                                    Đặt hàng
                                </Link>
                            </div>
                             <div className="navigation-button">
                                <Link href="http://localhost:3001/#contact-section" className="text fw-bolder">   
                                    Dành cho Đối tác
                                </Link>
                            </div>
                             <div className="navigation-button">
                                <Link href="http://localhost:3001/#send-message-button" className="text fw-bolder">
                                    Tải App
                                </Link>
                            </div>
                            <div className="navigation-button">
                                <Link href="http://localhost:3001/#footer-section" className="text fw-bolder">
                                     Liên hệ
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navigation-actions-wrapper d-flex gap-3">
                    <div className="navigation-actions d-flex align-items-center">
                        <div className="login-button">
                            <div className="font-weight-600">Đăng nhập</div>
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
                             src="./public/vn.svg"
                        />
                    </div>
                </div>

            </div>

            
        </section>
    )
};


export default Header1;
