import Breadcrumb from "@/app/ui/breadcrumb";
import Cart from "@/app/ui/cart";

const SearchPage = () =>{
    return (
        <section className="confirm-order-section d-flex container">
    		<div className="confirm-order-wrapper flex-grow-1">
				<Breadcrumb />
                <div className="address-wrapper mb-3">
                    <div className="heading">
                        <div className="title ">Giao đến</div>
                    </div>
                    <div className="address">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Tỉnh / Thành phố</label>
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option selected>Ho CHi Minh</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Quận  / Huyện</label>
                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Phường / Xã</label>
                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Số nhà & Tên đường</label>
                                <input type="text" className="form-control" placeholder="24 Nguyen Dinh thi" aria-label="Last name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Ghi chú cho tài xế</label>
                                <input type="text" className="form-control" placeholder="24 Nguyen Dinh thi" aria-label="Last name"/>
                            </div>
                        </form>
                    </div>
                </div>
				<div className="delivery-timer-section mb-3">
                    <div className="heading">
                        <div className="title ">Thời gian giao hàng</div>
                    </div>
                    <div className="delivery-timer">
                        <input type="text" className="delivery-timer-day mx-2" placeholder="Hôm nay" />
                        <input type="text" className="delivery-timer-time" placeholder="11h30 - 12h" />
                    </div>
                </div>
                <div className="packing-section mb-3">
                    <div className="heading">
                        <div className="title ">Đóng gói</div>
                    </div>
                </div>
                <div className="payment-section mb-3">
                    <div className="heading">
                        <div className="title ">Phương thức thanh toán</div>
                    </div>
                    <div className="payment">
                        
                    </div>
                </div>
                <div className="voucher-section mb-3">
                    <div className="heading">
                        <div className="title ">Khuyến mãi</div>
                    </div>
                </div>
			</div>
				
			<Cart />
		</section>
    )
}

export default SearchPage;