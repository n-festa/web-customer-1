
const ReviewAdvencePage = () =>{
    return (
        <section className="body-section container">
    <div className="back-to-previous">
        <img src="/images/chevronleft.svg" alt="" />
        <div>Quay lại trang trước</div>
    </div>

    <div className="rating-service d-flex flex-column">
        <div className="title">
            Đánh giá dịch vụ
        </div>

        <div className="order-number-and-date">
            <div>Đơn hàng: #1234567</div>
            <div>-</div>
            <div>Ngày: 26/07/2023</div>
        </div>

        <div className="review-tabs">
            <div className="quick-review tab-button-base">
                Đánh giá nhanh
            </div>
            <div className="detail-review tab-button-base active">
                Đánh giá chi tiết
            </div>
        </div>

        <div className="shipper-review review-rating-row">
            <div className="review-rating-wrapper d-flex flex-column">
                <div className="label d-flex gap-3 align-items-center">
                    <img src="/images/Friver.svg" alt=""/>
                    <div>Đánh giá tài xế</div>
                </div>

                <div className="d-flex gap-2 align-items-center">
                    <div className="small-rating-stars">
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                    </div>
                    <div className="rating-text">Rất hài lòng</div>
                </div>

                <div className="upload-image-wrapper">
                    <img src="/images/camera-plus.svg" alt=""/>
                </div>
            </div>

            <input className="review-comment flex-grow-1" type="text" placeholder="Nhận xét thêm về tài xế..."/>
        </div>

        <div className="dishes-review review-rating-row">
            <div className="review-rating-wrapper d-flex flex-column">
                <div className="label d-flex gap-3 align-items-center">
                    <img src="/images/Frame%20427320394.svg" alt="" />
                    <div>Đánh giá Mỳ Cá Cờ Sốt Yakitori</div>
                </div>

                <div className="d-flex gap-2 align-items-center">
                    <div className="small-rating-stars">
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                    </div>
                    <div className="rating-text">Rất hài lòng</div>
                </div>

                <div className="upload-image-section d-flex gap-3">
                    <img className="food-rating-image" src="/images/food-rating.png"/>
                    <div className="upload-image-wrapper uploaded">
                        <img className="camera-icon" src="/images/camera-plus.svg" alt=""/>
                        <div>1/3</div>
                    </div>
                </div>
            </div>

            <input className="review-comment flex-grow-1" type="text" placeholder="Nhận xét thêm về món ăn..."/>
        </div>

        <div className="divider"></div>

        <div className="dishes-review review-rating-row">
            <div className="review-rating-wrapper d-flex flex-column">
                <div className="label d-flex gap-3 align-items-center">
                    <img src="/images/Frame%20427320394.svg" alt=""/>
                    <div>Đánh giá Summer Avocado Salad</div>
                </div>

                <div className="d-flex gap-2 align-items-center">
                    <div className="small-rating-stars">
                        <img src="/images/star-icon.svg" alt="" />
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                        <img src="/images/star-icon.svg" alt=""/>
                    </div>
                    <div className="rating-text">Rất hài lòng</div>
                </div>

                <div className="upload-image-section d-flex gap-3">
                    <img className="food-rating-image" src="/images/food-rating.png"/>
                    <div className="upload-image-wrapper uploaded">
                        <img className="camera-icon" src="/images/camera-plus.svg" alt=""/>
                        <div>1/3</div>
                    </div>
                </div>
            </div>

            <input className="review-comment flex-grow-1" type="text" placeholder="Nhận xét thêm về món ăn..."/>
        </div>

        <div className="divider"></div>

        <button type="button" className="review-action-button primary my-2">GỬI ĐÁNH GIÁ</button>
    </div>
</section>
    )
}

export default ReviewAdvencePage;
