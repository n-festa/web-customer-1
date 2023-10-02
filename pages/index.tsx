import Image from 'next/image'

export default function Home() {
  return (
    <main className="landing-page-option-3">
        <div className="full-width-header-navigation">
            <div className="full-width-header-navigation1">
                <div className="header">
                    <div className="container">
                        <div className="content">
                            <img className="fictional-company-logo" alt="" src="./images/fictional-company-logo.svg"
                            />

                            <div className="navigation">
                                <div className="button">
                                    <img className="placeholder-icon" alt=""  src="./images/placeholder.svg"  />
                                    <b className="text">Đặt hàng</b>
                                    <img  className="placeholder-icon"   alt=""   src="./images/vn.svg"    />
                                </div>
                                <div className="button1">
                                    <img className="placeholder-icon" alt=""  src="./images/placeholder.svg" />
                                    <b className="text">Dành cho Đối tác</b>
                                    <img  className="placeholder-icon" alt=""  src="./images/chevrondown.svg" />
                                </div>
                                <div className="button1">
                                    <img  className="placeholder-icon" alt=""   src="./images/placeholder1.svg" />

                                    <b className="text">Tải App</b>
                                    <img className="placeholder-icon"  alt="" src="./images/chevrondown.svg"  />
                                </div>
                                <div className="button1">
                                    <img  className="placeholder-icon"   alt=""  src="./images/placeholder2.svg" />
                                    <b className="text">Liên hệ</b>
                                    <img  className="placeholder-icon" alt=""  src="./images/placeholder1.svg"  />
                                </div>
                            </div>
                        </div>
                        <div className="navigation-actions-parent">
                            <div className="navigation-actions">
                                <div className="button4">
                                    <img  className="placeholder-icon"    alt="" src="./images/placeholder.svg"   />
                                    <div className="text4">Đăng nhập</div>
                                    <img className="placeholder-icon" alt="" src="./images/placeholder.svg"  />
                                </div>
                                <div className="button5">
                                    <img  className="placeholder-icon"  alt="" src="./images/placeholder3.svg"  />
                                    <div className="text5">Đăng nhập</div>
                                    <img  className="placeholder-icon"  alt=""  src="./images/placeholder3.svg" />
                                </div>
                            </div>
                            <div className="nav-item-button">
                                <img className="shopping-bag-03-icon" alt="" src="./images/shoppingbag03.svg"  />
                            </div>
                            <div className="button6">
                                <img  className="placeholder-icon" alt=""  src="./images/placeholder4.svg"   />
                                <div className="text5">VIE</div>
                                <img  className="marker-pin-03-icon"   alt="" src="./images/vn.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
