
const OrderDetailPage = () =>{
    return (
        <section className="body-section container">
        <div className="order-steps d-flex flex-column">
            <div className="order-detail-title d-flex flex-column align-items-center py-2">
                <div className="title">Chi tiết đơn hàng</div>
                <div className="d-flex gap-3">
                    <span>ID: #1234567</span>
                    <span>-</span>
                    <span>Ngày: 26/07/2023</span>
                </div>
            </div>
    
            <div className="position-relative py-4 d-flex justify-content-center gap-3 ">
                <div className="step-base">
                    <div className="step-base-icon">
                        <img src="/images/step-base-done.svg" alt="" />
                    </div>
                    <div className="step-base-text">
                        <div className="status">Xác Nhận Đơn Hàng</div>
                        <div className="time">11:05 AM</div>
                    </div>
                </div>
    
                <div className="step-base">
                    <div className="step-base-icon">
                        <img src="/images/step-base-done.svg" alt="" />
                    </div>
                    <div className="step-base-text">
                        <div className="status">Tài Xế Đã Tới Nhà Hàng</div>
                        <div className="time">11:15 AM</div>
                    </div>
                </div>
    
                <div className="step-base">
                    <div className="step-base-icon">
                        <img src="/images/step-base-done.svg" alt="" />
                    </div>
                    <div className="step-base-text">
                        <div className="status">Tài Xế Đã Rời Nhà Hàng</div>
                        <div className="time">11:25 AM</div>
                    </div>
                </div>
    
                <div className="step-base">
                    <div className="step-base-icon">
                        <img src="/images/step-base-done.svg" alt="" />
                    </div>
                    <div className="step-base-text">
                        <div className="status">Tài Xế Đã Đến Nơi</div>
                        <div className="time">11:40 AM</div>
                    </div>
                </div>
    
                <span className="position-absolute progress-line active"></span>
                <span className="position-absolute progress-line active"></span>
                <span className="position-absolute progress-line active"></span>
            </div>
        </div>
    
        <div className="order-details-wrapper w-100 d-flex justify-content-center">
            <div className="order-details d-flex flex-column mb-4">
                <div className="shipper d-flex flex-column gap-2">
                    <div className="label">
                        Tài xế
                    </div>
                    <div className="shipper-detail d-flex gap-3 py-3">
                        <img className="shipper-avatar" src="/images/shipper.png" alt=""/>
                        <div className="shipper-info d-flex flex-column">
                            <div className="shipper-name mb-1">
                                Nguyễn Văn A
                            </div>
                            <div>
                                +84 909 123 123
                            </div>
                            <div>
                                Honda Wave | 54-XI 125.55
                            </div>
                        </div>
                    </div>
                    <div className="note-to-shipper">
                        <div className="font-weight-600">
                            Ghi chú dành cho tài xế:
                        </div>
                        <div className="">
                            Gặp tại sảnh A toà nhà
                        </div>
                    </div>
                </div>
    
                <div className="destination d-flex flex-column gap-2">
                    <div className="label">
                        Giao đến
                    </div>
                    <div className="d-flex gap-3 align-items-center">
                        <img className="marker-icon" src="/images/marker-pin-02.svg" alt="" />
                        <div className="font-weight-500">
                            24 Nguyễn Đình Thi, P. Phước Long B, Tp. Thủ Đức, Tp. Hồ Chí Minh
                        </div>
                    </div>
                </div>
    
                <div className="cart-info d-flex flex-column gap-2">
                    <div className="label-section">
                        <img src="/images/chef-icon.png" alt="" />
                        <div>The Chef Town</div>
                    </div>
    
                    <div className="cart-item px-3 d-flex">
                        <img className="me-2" src="/images/6387ec276a4eb-62aa10dfb2adca268416cf2fd03d82f5transformed-3@2x.png"
                             alt="" />
                        <div className="cart-item-info d-flex flex-column">
                            <div className="cart-item-name">
                                Mỳ Cá Cờ Sốt Yakitori
                            </div>
                            <div className="cart-item-description">
                                Ghi chú 1 - Lorem ipsum dolor sit amet Ghi chú 1 - Lorem ipsum dolor sit amet Lorem ipsum
                                dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
                                ametLorem ipsum dolor sit amet
                            </div>
                        </div>
                        <div className="quantity d-flex justify-content-center">1</div>
                        <div className="price d-flex flex-column align-items-end">
                            <span className="price-after">80,000</span>
                            <span className="price-before">95.000</span>
                        </div>
                    </div>
                    <div className="cart-item px-3 d-flex">
                        <img className="me-2" src="/images/6387ec276a4eb-62aa10dfb2adca268416cf2fd03d82f5transformed-3@2x.png"
                             alt="" />
                        <div className="cart-item-info d-flex flex-column">
                            <div className="cart-item-name">
                                Mỳ Cá Cờ Sốt Yakitori
                            </div>
                            <div className="cart-item-description">
                                Ghi chú 1  - Lorem ipsum dolor sit amet Ghi chú 1  - Lorem ipsum dolor sit amet
                            </div>
                        </div>
                        <div className="quantity d-flex justify-content-center">1</div>
                        <div className="price d-flex flex-column align-items-end">
                            <span className="price-after">50,000</span>
                            <span className="price-before">90.000</span>
                        </div>
                    </div>
    
                    <div className="payment-detail d-flex flex-column gap-1">
                        <div className="label px-3">
                            Thông tin thanh toán
                        </div>
    
                        <div className="general-fee mx-3 pb-1">
                            <div className="d-flex justify-content-between">
                                <span>Tổng món ăn</span>
                                <span>130,000 đ</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Phí đóng gói</span>
                                <span>6,000 đ</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Dụng cụ ăn</span>
                                <span>0 đ</span>
                            </div>
                        </div>
    
                        <div className="delivery-fee mx-3 py-1">
                            <div className="d-flex justify-content-between">
                                <span>Phí giao hàng | 0.8 km</span>
                                <span>10,000 đ</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Phí nền tảng</span>
                                <span>2,000 đ</span>
                            </div>
                        </div>
    
                        <div className="promo mx-3 py-1">
                            <div className="d-flex justify-content-between">
                                <span>Khuyến mãi</span>
                                <span>-1,000 đ</span>
                            </div>
                        </div>
    
                        <div className="total-amount p-3">
                            <div className="d-flex justify-content-between">
                                <span>Tổng thanh toán </span>
                                <span>147,000 đ</span>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="packing d-flex flex-column gap-2">
                    <div className="label">
                        Đóng gói
                    </div>
                    <div>
                        Đóng gói bằng hộp bã mía
                    </div>
                    <div>
                        Không lấy dụng cụ ăn uống
                    </div>
                </div>
    
                <div className="payment-method d-flex flex-column gap-2">
                    <div className="label">
                        Phương thức thanh toán
                    </div>
                    <div>
                        Đã thanh toán bằng Momo
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default OrderDetailPage;