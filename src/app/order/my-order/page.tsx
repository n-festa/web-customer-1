
const MyOrderPage = () =>{
    return (
        <section className="body-section container py-3">
            <div className="my-order-wrapper d-flex flex-column">
                <div className="heading">
                    <div className="title">Đơn hàng của tôi</div>
                    <div className="tabs d-flex gap-3 align-items-center">
                        <div className="tab d-flex gap-2 align-items-center">
                            <div className="progress-status">Đang giao</div>
                            <div className="badge">2</div>
                        </div>

                        <div className="tab active d-flex gap-2 align-items-center">
                            <div className="progress-status">Lịch sử</div>
                            <div className="badge">5</div>
                        </div>
                    </div>
                </div>

                <div className="search-bar d-flex gap-3">
                    <img src="/images/searchmd.svg" alt="" />
                    <input className="flex-grow-1" type="text" placeholder="Gõ tên món ăn, nhà hàng mà bạn đang muốn tìm" />
                </div>

                <div className="filter-and-sort d-flex gap-3">
                    <div className="filter-dish-and-restaurant d-flex">
                        <div className="filter-button">
                            Món ăn
                        </div>
                        <div className="filter-button active">
                            Nhà hàng
                        </div>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="sort-latest d-flex gap-1">
                        <div>
                            Ngày gần nhất
                        </div>
                        <img className="small-icon" src="/images/chevron-down.svg" alt="" />
                    </div>

                    <div className="filter-status d-flex gap-1">
                        <div>
                            Tất cả trạng thái
                        </div>
                        <img className="small-icon" src="/images//chevron-down.svg" alt="" />
                    </div>

                    <div className="filter-date d-flex gap-1">
                        <img className="small-icon" src="/images//calendar.svg" alt="" />
                        <div>
                            20/7/2023 - 28/8/2023
                        </div>
                    </div>

                </div>

                <div className="order-history-wrapper my-2">
                    <div className="heading d-flex justify-content-between">
                        <div className="order-number">
                            <span>Đơn hàng</span>
                            <span className="font-weight-700"> #1234567</span>
                        </div>

                        <div className="order-date">
                            Ngày: 26/07/2023
                        </div>
                    </div>

                    <div className="cart-history-info tab-restaurant d-flex">
                        <img className="" src="/images/chef-icon.png" alt="" />
                        <div className="detail px-3 d-flex flex-column flex-grow-1">
                            <div className="chef-name">The Chef House</div>
                            <div className="sub-chef-name">Eat clean | Cơm Nhật Tonkatsu | 40 năm KN</div>
                            <div className="dishes d-flex gap-3">
                                <div>
                                    Summer Avocado Salad x2
                                </div>
                                <div>Mỳ Cá Cờ Sốt Yakitori x 1</div>
                            </div>
                            <div className="d-flex gap-1 align-items-center">
                                <div className="">Thanh toán momo</div>
                                <div className="payment-method-icon">
                                    <img src="/images/momo.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="cart-history-price">
                            160,000 đ
                        </div>
                    </div>

                    <div className="delivery-status p-3 d-flex justify-content-between align-items-center">
                        <div className="delivery-status-text success">Giao hàng thành công</div>
                        <div className="d-flex delivery-status-group-actions">
                            <button className="delivery-action-button rating" type="button">Đánh giá</button>
                            <button className="delivery-action-button" type="button">Mua lại</button>
                            <button className="delivery-action-button" type="button">Xem chi tiết</button>

                        </div>
                    </div>
                </div>
        
                <div className="order-history-wrapper my-2">
                    <div className="heading d-flex justify-content-between">
                        <div className="order-number">
                            <span>Đơn hàng</span>
                            <span className="font-weight-700"> #1234567</span>
                        </div>

                        <div className="order-date">
                            Ngày: 26/07/2023
                        </div>
                    </div>

                    <div className="cart-history-info tab-restaurant d-flex">
                        <img className="" src="/images/chef-icon.png" alt="" />
                        <div className="detail px-3 d-flex flex-column flex-grow-1">
                            <div className="chef-name">The Chef House</div>
                            <div className="sub-chef-name">Eat clean | Cơm Nhật Tonkatsu | 40 năm KN</div>
                            <div className="dishes d-flex gap-3">
                                <div>
                                    Summer Avocado Salad x2
                                </div>
                                <div>Mỳ Cá Cờ Sốt Yakitori x 1</div>
                            </div>
                            <div className="d-flex gap-1 align-items-center">
                                <div className="">Thanh toán momo</div>
                                <div className="payment-method-icon">
                                    <img src="/images/momo.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="cart-history-price">
                            160,000 đ
                        </div>
                    </div>

                    <div className="delivery-status p-3 d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-4 align-items-center">
                            <div className="delivery-status-text success">Giao hàng thành công</div>
                            <div className="rating-stars d-flex gap-1">
                                <img src="/images/star-icon.svg" alt="" />
                                <img src="/images/star-icon.svg" alt="" />
                                <img src="/images/star-icon.svg" alt="" />
                                <img src="/images/star-icon.svg" alt="" />
                                <img src="/images/star-icon.svg" alt="" />
                            </div>
                        </div>
                        <div className="d-flex delivery-status-group-actions">
                            <button className="delivery-action-button" type="button">Mua lại</button>
                            <button className="delivery-action-button" type="button">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyOrderPage;