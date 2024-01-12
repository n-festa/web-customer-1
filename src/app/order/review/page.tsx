
const ReviewPage = () =>{
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
                    <div className="quick-review tab-button-base active">
                        Đánh giá nhanh
                    </div>
                    <div className="detail-review tab-button-base">
                        Đánh giá chi tiết
                    </div>
                </div>
        
                <div className="shipper-review">
                    <div className="label d-flex gap-3 align-items-center">
                        <img src="/images/Friver.svg" alt="" />
                        <div>Đánh giá tài xế</div>
                    </div>
        
                    <div className="big-rating-stars">
                        <img src="/images/star-icon.svg" alt="" />
                        <img src="/images/star-icon.svg" alt="" />
                        <img src="/images/star-icon.svg" alt="" />
                        <img src="/images/star-icon.svg" alt="" />
                        <img src="/images/star-icon.svg" alt="" />
                    </div>
                </div>
        
                <div className="dishes-review">
                    <div className="label d-flex gap-3 align-items-center">
                        <img src="/images/Frame%20427320394.svg" alt="" />
                        <div>Đánh giá món ăn</div>
                    </div>
        
                    <div className="big-rating-stars">
                        <img src="/images/star-icon.svg" alt="" />
                        <img src="/images/star-icon.svg" alt="" />
                        <img src="/images/star-icon.svg" alt="" />
                        <img src="/images/star-icon.svg" alt="" />
                        <img src="/images/star-icon.svg" alt="" />
                    </div>
                </div>
        
                <div className="dishes-review-2 d-flex flex-column gap-2">
                    <div>
                        Bạn có hài lòng về món ăn của chúng tôi không? Hãy cho chúng tôi biết ý kiến của bạn
                    </div>
        
                    <div className="d-flex gap-3">
                        <div className="dish-rating-tag">Đồ ăn chất lượng</div>
                        <div className="dish-rating-tag active">Đóng gói chắc chắn</div>
                        <div className="dish-rating-tag">Đồ ăn hợp khẩu vị</div>
                        <div className="dish-rating-tag">Đồ ăn tươi</div>
                    </div>
                </div>
        
                <input className="review-comment" type="text" placeholder="Hãy chia sẻ nhận xét cho dịch vụ này bạn nhé!" />
        
                <div className="divider"></div>
        
                <div className="review-with-images">
                    <img src="/images/1a6dae6eb45d59381766dc0807588d37.png" alt="" />
                    <img src="/images/2b15aafddc47045162b39e37730e23c7.png" alt="" />
                </div>
        
                <div className="review-action-buttons">
                    <button type="button" className="review-action-button">Thêm ảnh</button>
                    <button type="button" className="review-action-button primary">Gửi đánh giá</button>
                </div>
            </div>
        </section>
    )
}

export default ReviewPage;
