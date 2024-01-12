

import Breadcrumb from "@/app/ui/breadcrumb";
const PaymentProcessPage = () =>{
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="payment-process d-flex flex-column">
                <div className="heading">
                    <div className="momo-icon">
                        <img src="/images/momo.svg" alt=""/>
                    </div>

                    <div>
                        Cổng thanh toán Momo
                    </div>

                    <div className="spacer flex-grow-1"></div>

                    <div className="close-button cursor-pointer">x</div>
                </div>

                <div className="payment-with-qr-code d-flex gap-4">
                    <div className="qr-code-and-amount d-flex flex-column">
                        <div className="qr-code">
                            <img src="/images/qrcode.png" alt="" />
                        </div>

                        <div>Tổng tiền: 170,000đ</div>
                    </div>

                    <div className="tutorial-and-timing d-flex flex-column gap-2">
                        <div className="heading">
                            Quét mã QR để thanh toán
                        </div>

                        <div className="tutorial-row d-flex gap-2 align-items-center">
                            <div className="step-number">1</div>
                            <div>Mở ứng dụng MoMo trên điện thoại</div>
                        </div>

                        <div className="tutorial-row d-flex gap-2 align-items-center">
                            <div className="step-number">2</div>
                            <div className="d-flex gap-2">Trên MoMo, chọn biểu tượng 
                                <img src="/images/qrcode-1.png" alt="" /> 
                                <span className="font-weight-700">Quét mã QR</span>
                            </div>
                        </div>

                        <div className="tutorial-row d-flex gap-2 align-items-center">
                            <div className="step-number">3</div>
                            <div>Quét mã QR ở trang này và thanh toán</div>
                        </div>

                        <div className="payment-timing">
                            <div className="heading">
                                Giao dịch sẽ hết hạn sau:
                            </div>

                            <div className="d-flex gap-3 justify-content-center w-100">
                                <div className="timing-card">
                                    <div className="time">04</div>
                                    <div className="unit">Phút</div>
                                </div>

                                <div className="timing-card">
                                    <div className="time">41</div>
                                    <div className="unit">Giây</div>
                                </div>
                            </div>
                        </div>

                        <div className="change-other-method d-flex justify-content-center gap-2">
                            <img src="/images/switch-horizontal-01.svg" alt=""/>
                            <div className="">
                                Đổi phương thức thanh toán
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentProcessPage;