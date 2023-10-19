import Layout from '../layouts/main';
import Footer from '../components/footer';

const IndexPage = () => {
    return (
        <Layout>
       <section className="full-width-header-navigation">
        <header className="header d-flex align-items-center justify-content-center flex-column h-100">
            <div className="d-flex justify-content-between align-items-center container">
                <div className="d-flex align-items-center gap-4">
                    <img className="fictional-company-logo"
                         alt="fictional-company-logo"
                         src="./public/fictional-company-logo.svg"
                    />

                    <div className="navigation d-flex gap-4 align-items-center">
                        <div className="navigation-button">
                            <b className="text">Đặt hàng</b>
                        </div>
                        <div className="navigation-button">
                            <b className="text">Dành cho Đối tác</b>
                        </div>
                        <div className="navigation-button">
                            <b className="text">Tải App</b>
                        </div>
                        <div className="navigation-button">
                            <b className="text">Liên hệ</b>
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
                             src="./public/shoppingbag03.svg"
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
        </header>
    </section>

    <section className="banner-section d-flex justify-content-center">
        <div className="container d-flex align-items-center">
            <div className="d-flex flex-column align-items-start gap-5">
                <div className="heading-and-supporting-text d-flex flex-column gap-3">
                    <div className="heading-and-subheading">
                        <div className="heading font-weight-600">
                            <p className="mb-0">Đặt ngay bữa ăn</p>
                            <p className="ngon-lanh mb-0">ngon & lành</p>
                            <p className="mb-0">của riêng bạn</p>
                        </div>
                    </div>
                    <div className="supporting-text">
                        Một bữa ăn ngon lành, đầy đủ dưỡng chất, được chế biến theo khẩu
                        vị của bạn. Không cần lo nghĩ, không cần nấu, hẹn giờ giao linh
                        hoạt.
                    </div>
                </div>
                <div className="find-food-wrapper d-flex justify-content-center">
                    <div className="address-input-wrapper d-flex gap-2">
                        <div className="d-flex justify-content-between align-items-center px-3 gap-3">
                            <img className="small-icon"
                                 alt=""
                                 src="./public/markerpin03.svg"
                            />

                            <input className="address-input font-weight-500"
                                   placeholder="Nhập địa chỉ để tìm món ngon gần bạn"/>
                        </div>
                        <button type="button" className="find-food-button d-flex">
                            <span className="font-weight-600">Tìm món</span>
                        </button>
                    </div>
                </div>
            </div>
            <img className="food-image"
                 alt=""
                 src="./public/screen-shot-20230829-at-11-28-37-pmtransformed-5@2x.png"
            />
        </div>
    </section>

    <section className="daily-food-section d-flex flex-column">
        <div className="container d-flex flex-column align-items-center gap-5">
            <b className="title">Món ngon hôm nay</b>
            <div className="food-cards d-flex justify-content-between">
                <div className="food-card d-flex flex-column">
                    <div className="frame-parent d-flex flex-column">
                        <div className="discount-wrapper">
                            <b className="discount">GIẢM GIÁ</b>
                        </div>
                        <div className="image-wrapper d-flex justify-content-center">
                            <img className=""
                                 alt=""
                                 src="./public/6387ec276a4eb-62aa10dfb2adca268416cf2fd03d82f5transformed-3@2x.png"
                            />
                        </div>
                    </div>
                    <div className="card-info-wrapper d-flex flex-column">
                        <div className="card-info d-flex flex-column gap-1">
                            <div className="food-and-chef-name d-flex flex-column gap-1">
                                <b>Mỳ Cá Cờ Sốt Yakitori</b>
                                <div className="chef-name">
                                    <span className="font-weight-500">by </span>
                                    <b className="name">The Chef Town</b>
                                </div>
                            </div>
                            <div className="general-info d-flex gap-2">
                                <div className="d-flex align-items-center gap-2px">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/markerpin02.svg"
                                    />

                                    <div className="kcal font-weight-600">356 Kcal</div>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/star-icon1.svg"
                                    />

                                    <div className="text">4.5</div>
                                </div>
                                <div className="d-flex align-items-center gap-2px">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/markerpin021.svg"
                                    />

                                    <div className="text">3,2 km</div>
                                </div>
                                <div className="d-flex align-items-center gap-2px">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/timer.svg"
                                    />

                                    <div className="text">20 min</div>
                                </div>
                            </div>
                            <div className="ingredient-wrapper">
                                <span className="cooking-method font-weight-600">Luộc</span>
                                <span className="font-weight-500">| Hành tây, tiêu xanh, cà chua, bắp, ngò rí, bơ chín và nước cốt chanh.</span
                                >
                            </div>
                            <div className="pricing-wrapper d-flex align-items-center gap-2">
                                <div className="price-before">95,000</div>
                                <b className="price-after">80,000</b>
                            </div>
                            <div className="discount-up-to-wrapper d-flex align-items-center gap-1">
                                <img className="small-icon"
                                     alt=""
                                     src="./public/frame-2729.svg"
                                />

                                <div className="discount-up-to">Ưu đãi đến 50k</div>
                            </div>
                            <div className="flavor-time-wrapper d-flex align-items-center gap-1">
                                <img className="small-icon"
                                     alt=""
                                     src="./public/frame-2725.svg"
                                />

                                <div className="flavor-time">
                                    Đặt trước 09:00 giờ sáng để điều chỉnh vị
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-card d-flex flex-column">
                    <div className="frame-parent d-flex flex-column">
                        <div className="discount-wrapper">
                            <b className="discount">GIẢM GIÁ</b>
                        </div>
                        <div className="image-wrapper d-flex justify-content-center">
                            <img className=""
                                 alt=""
                                 src="./public/6387ec276a4eb-62aa10dfb2adca268416cf2fd03d82f5transformed-3@2x.png"
                            />
                        </div>
                    </div>
                    <div className="card-info-wrapper d-flex flex-column">
                        <div className="card-info d-flex flex-column gap-1">
                            <div className="food-and-chef-name d-flex flex-column gap-1">
                                <b>Mỳ Cá Cờ Sốt Yakitori</b>
                                <div className="chef-name">
                                    <span className="font-weight-500">by </span>
                                    <b className="name">The Chef Town</b>
                                </div>
                            </div>
                            <div className="general-info d-flex gap-2">
                                <div className="d-flex align-items-center gap-2px">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/markerpin02.svg"
                                    />

                                    <div className="kcal font-weight-600">356 Kcal</div>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/star-icon1.svg"
                                    />

                                    <div className="text">4.5</div>
                                </div>
                                <div className="d-flex align-items-center gap-2px">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/markerpin021.svg"
                                    />

                                    <div className="text">3,2 km</div>
                                </div>
                                <div className="d-flex align-items-center gap-2px">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/timer.svg"
                                    />

                                    <div className="text">20 min</div>
                                </div>
                            </div>
                            <div className="ingredient-wrapper">
                                <span className="cooking-method font-weight-600">Luộc</span>
                                <span className="font-weight-500">| Hành tây, tiêu xanh, cà chua, bắp, ngò rí, bơ chín và nước cốt chanh.</span
                                >
                            </div>
                            <div className="pricing-wrapper d-flex align-items-center gap-2">
                                <div className="price-before">95,000</div>
                                <b className="price-after">80,000</b>
                            </div>
                            <div className="discount-up-to-wrapper d-flex align-items-center gap-1">
                                <img className="small-icon"
                                     alt=""
                                     src="./public/frame-2729.svg"
                                />

                                <div className="discount-up-to">Ưu đãi đến 50k</div>
                            </div>
                            <div className="flavor-time-wrapper d-flex align-items-center gap-1">
                                <img className="small-icon"
                                     alt=""
                                     src="./public/frame-2725.svg"
                                />

                                <div className="flavor-time">
                                    Đặt trước 09:00 giờ sáng để điều chỉnh vị
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="food-card d-flex flex-column">
                    <div className="frame-parent d-flex flex-column">
                        <div className="discount-wrapper">
                            <b className="discount">GIẢM GIÁ</b>
                        </div>
                        <div className="image-wrapper d-flex justify-content-center">
                            <img className=""
                                 alt=""
                                 src="./public/6387ec276a4eb-62aa10dfb2adca268416cf2fd03d82f5transformed-3@2x.png"
                            />
                        </div>
                    </div>
                    <div className="card-info-wrapper d-flex flex-column">
                        <div className="card-info d-flex flex-column gap-1">
                            <div className="food-and-chef-name d-flex flex-column gap-1">
                                <b>Mỳ Cá Cờ Sốt Yakitori</b>
                                <div className="chef-name">
                                    <span className="font-weight-500">by </span>
                                    <b className="name">The Chef Town</b>
                                </div>
                            </div>
                            <div className="general-info d-flex gap-2">
                                <div className="d-flex align-items-center gap-2px">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/markerpin02.svg"
                                    />

                                    <div className="kcal font-weight-600">356 Kcal</div>
                                </div>
                                <div className="d-flex align-items-center gap-1">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/star-icon1.svg"
                                    />

                                    <div className="text">4.5</div>
                                </div>
                                <div className="d-flex align-items-center gap-2px">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/markerpin021.svg"
                                    />

                                    <div className="text">3,2 km</div>
                                </div>
                                <div className="d-flex align-items-center gap-2px">
                                    <img className="small-icon"
                                         alt=""
                                         src="./public/timer.svg"
                                    />

                                    <div className="text">20 min</div>
                                </div>
                            </div>
                            <div className="ingredient-wrapper">
                                <span className="cooking-method font-weight-600">Luộc</span>
                                <span className="font-weight-500">| Hành tây, tiêu xanh, cà chua, bắp, ngò rí, bơ chín và nước cốt chanh.</span
                                >
                            </div>
                            <div className="pricing-wrapper d-flex align-items-center gap-2">
                                <div className="price-before">95,000</div>
                                <b className="price-after">80,000</b>
                            </div>
                            <div className="discount-up-to-wrapper d-flex align-items-center gap-1">
                                <img className="small-icon"
                                     alt=""
                                     src="./public/frame-2729.svg"
                                />

                                <div className="discount-up-to">Ưu đãi đến 50k</div>
                            </div>
                            <div className="flavor-time-wrapper d-flex align-items-center gap-1">
                                <img className="small-icon"
                                     alt=""
                                     src="./public/frame-2725.svg"
                                />

                                <div className="flavor-time">
                                    Đặt trước 09:00 giờ sáng để điều chỉnh vị
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="order-steps-section d-flex justify-content-center">
        <div className="order-steps-container container d-flex flex-column align-items-center">
            <b className="how-to-order">Cách đặt hàng</b>
            <div className="order-steps-wrapper">
                <div className="order-steps d-flex justify-content-between">
                    <div className="order-step">
                        <div className="order-step-number-circle">
                            <div className="font-weight-600">1</div>
                        </div>
                        <div className="step-detail">
                            <b className="step-name">Tìm món ăn</b>
                            <img
                                    className="order-step-image"
                                    alt=""
                                    src="./public/mask-group@2x.png"
                            />

                            <div className="order-step-description">
                                Tìm các món ngon gần bạn hoặc theo gợi ý của nền tảng 2ALL
                            </div>
                        </div>
                    </div>
                    <div className="order-step">
                        <div className="order-step-number-circle">
                            <div className="font-weight-600">2</div>
                        </div>
                        <div className="step-detail">
                            <b className="step-name">Chọn món</b>
                            <img className="order-step-image"
                                 alt=""
                                 src="./public/mask-group1@2x.png"
                            />

                            <div className="order-step-description">
                                Chọn và điều chỉnh món ăn theo khẩu vị hoặc nhu cầu dinh dưỡng
                                của bạn
                            </div>
                        </div>
                    </div>
                    <div className="order-step">
                        <div className="order-step-number-circle">
                            <div className="font-weight-600">3</div>
                        </div>
                        <div className="step-detail">
                            <b className="step-name">Đặt hàng</b>
                            <img
                                    className="order-step-image"
                                    alt=""
                                    src="./public/mask-group2@2x.png"
                            />

                            <div className="order-step-description">
                                Đặt hàng linh hoạt. Đảm bảo bạn nhận được món ăn theo khung
                                giờ mong muốn
                            </div>
                        </div>
                    </div>
                    <div className="order-step">
                        <div className="order-step-number-circle">
                            <div className="font-weight-600">4</div>
                        </div>
                        <div className="step-detail">
                            <b className="step-name">Thưởng thức</b>
                            <img
                                    className="order-step-image"
                                    alt=""
                                    src="./public/mask-group3@2x.png"
                            />

                            <div className="order-step-description">
                                Tận hưởng món ăn ngon, lành và được chế biến theo khẩu vị của
                                riêng bạn
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-div"></div>
                <div className="line-div"></div>
                <div className="line-div"></div>
            </div>
        </div>
    </section>

    <section className="why-choose-us-section d-flex justify-content-center">
        <div className="why-choose-us-wrapper container d-flex">
            <div className="why-choose-us d-flex flex-column align-items-center justify-content-center">
                <div className="why-choose-us-heading">Tại sao chọn 2All</div>
                <div className="why-choose-us-reason d-flex flex-column align-items-center gap-4">
                    <div className="reason-wrapper">
                        <div className="logo">
                            <img alt=""
                                 src="./public/group-427320334.svg"
                            />
                        </div>
                        <div className="heading">Bữa ăn theo nhu cầu</div>
                        <div className="description">
                            Lựa chọn thực phẩm, các món ăn theo nhu cầu dinh dưỡng, khẩu
                            vị và thể trạng của bạn
                        </div>
                    </div>
                    <div className="reason-wrapper">
                        <div className="logo">
                            <img alt=""
                                 src="./public/nutrition.svg"
                            />
                        </div>
                        <div className="heading">Thông tin dinh dưỡng đầy đủ</div>
                        <div className="description">
                            Thông tin dinh dưỡng cho từng món ăn bao gồm số Kcal, protein,
                            lipid,carb,...
                        </div>
                    </div>
                    <div className="reason-wrapper">
                        <div className="logo">
                            <img alt=""
                                 src="./public/delivery.svg"
                            />
                        </div>
                        <div className="heading">Đặt hàng hẹn giờ linh hoạt</div>
                        <div className="description">
                            Đặt hàng với khung giờ giao linh hoạt, phù hợp với nhu cầu của
                            bạn.
                        </div>
                    </div>
                </div>
            </div>
            <div className="why-choose-us-image d-flex justify-content-center align-items-center p-5">
                <img alt=""
                     src="./public/group-427320333@2x.png"
                />
            </div>
        </div>
    </section>

    <section className="rating-and-review-section d-flex justify-content-center">
        <div className="rating-and-review-container container d-flex flex-column align-items-center">
            <b className="heading">Mọi người yêu thích 2All</b>
            <div className="rating-review-cards d-flex gap-3">
                <div className="rating-review-card d-flex flex-column gap-3">
                    <div className="customer d-flex justify-content-between w-100">
                        <div className="d-flex gap-3">
                            <img className="customer-avatar" alt="" src="./public/pic@2x.png"/>
                            <div className="loyal-customer-wrapper d-flex flex-column ">
                                <div className="loyal-customer-name">Alexander R.</div>
                                <div className="loyal-customer">Khách hàng thân thiết</div>
                            </div>
                        </div>

                        <img className="quote" alt="" src="./public/path-173.svg"/>

                    </div>
                    <div className="review">
                        “ Tôi đã sử dụng 2all để đặt món ăn và rất hài lòng với trải
                        nghiệm của mình. Dịch vụ giao hàng nhanh chóng và đáng tin cậy,
                        và thực phẩm luôn được giao hàng trong tình trạng tốt nhất.”
                    </div>
                    <div className="stars">
                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />
                    </div>
                </div>
                <div className="rating-review-card d-flex flex-column gap-3">
                    <div className="review font-weight-500">
                        “ Tôi đã sử dụng 2all để đặt món ăn và rất hài lòng với trải
                        nghiệm của mình. Dịch vụ giao hàng nhanh chóng và đáng tin cậy,
                        và thực phẩm luôn được giao hàng trong tình trạng tốt nhất.”
                    </div>
                    <div className="stars">
                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />
                    </div>
                </div>
                <div className="rating-review-card d-flex flex-column gap-3">
                    <div className="review font-weight-500">
                        “ Tôi đã sử dụng 2all để đặt món ăn và rất hài lòng với trải
                        nghiệm của mình. Dịch vụ giao hàng nhanh chóng và đáng tin cậy,
                        và thực phẩm luôn được giao hàng trong tình trạng tốt nhất.”
                    </div>
                    <div className="stars">
                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />

                        <img className="small-icon"
                             alt=""
                             src="./public/star-icon2.svg"
                        />
                    </div>
                </div>
            </div>
            <div className="paginator d-flex justify-content-end">
                <div className="paginator-arrow">
                    <img className="small-icon"
                         alt=""
                         src="./public/chevronleft.svg"
                    />
                </div>
                <div className="pagination-dot-group d-flex justify-content-center align-items-center">
                    <div className="pagination-dot-indicator active"></div>
                    <div className="pagination-dot-indicator"></div>
                    <div className="pagination-dot-indicator"></div>
                </div>
                <div className="paginator-arrow">
                    <img className="small-icon"
                         alt=""
                         src="./public/chevronright.svg"
                    />
                </div>
            </div>
        </div>
    </section>

    <section className="contact-us-section d-flex justify-content-center">
        <div className="contact-us-container container">
            <div className="contact-us-card p-5 gap-5">
                <div className="d-flex flex-column gap-4">
                    <b className="heading">Liên hệ để trở thành đối tác của 2ALL hôm nay</b>
                    <div className="description">
                        Chúng tôi chào đón đối tác trên toàn quốc để cùng cung cấp
                        hàng triệu bữa ăn ngon và lành cho khách hàng Việt Nam.
                    </div>
                </div>
                <div className="form d-flex flex-column">
                    <div className="form-fields d-flex flex-column align-self-stretch gap-4">
                        <div className="input-with-label d-flex flex-column">
                            <div className="label d-flex">Email</div>
                            <input className="input d-flex" placeholder="Vui lòng nhập email của bạn"/>
                        </div>
                        <div className="input-with-label d-flex flex-column">
                            <div className="label d-flex">Message</div>
                            <textarea className="textarea d-flex"
                                      placeholder="Ví dụ: xin chào 2ALL, tôi có nhu cầu muốn hợp tác với bạn">
                            </textarea>
                        </div>
                        <div className="recaptcha-wrapper d-flex align-items-center">
                            <input type="checkbox" />
                            <div className="flex-grow-1">
                                Tôi không phải robot
                            </div>
                            <img className="recaptcha-image"
                                 alt=""
                                 src="./public/image-10@2x.png"
                            />
                        </div>
                    </div>
                    <div className="actions">
                        <div className="send-message-button">
                            <b>Gửi tin nhắn</b>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mixed-content d-flex justify-content-center align-items-center">
                <img className="cover-image"
                     alt=""
                     src="./public/6387eec683aaf-4a9394222d47f1b9b99be468ed6d0a66transformed-4@2x.png"
                />

                <div className="info-card first-card">
                    <img className="card-logo"
                         alt=""
                         src="./public/image-36x36@2x.png"
                    />
                    <b className="card-text">Cải Kale</b>

                </div>

                <div className="info-card second-card">
                    <img className="card-logo"
                         alt=""
                         src="./public/image-36x361@2x.png"
                    />
                    <b className="card-text">Cà Chua</b>

                </div>

                <div className="info-card third-card">
                    <img className="card-logo"
                         alt=""
                         src="./public/6387ec276a4eb-62aa10dfb2adca268416cf2fd03d82f5transformed-31@2x.png"
                    />

                    <div className="d-flex flex-column position-relative">
                        <b className="card-text">Summer Avo Salad</b>
                        <div className="delivery">
                            Đang giao hàng
                        </div>
                        <div className="delivery-time">
                            3:09 PM
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className="download-app-section d-flex justify-content-center">
        <div className="download-app-container container">
            <div className="mobile-app-wrapper d-flex">
                <div className="container3 d-flex justify-content-center align-items-center">
                    <div className="download-app-wrapper d-flex align-self-stretch flex-column flex-grow-1">
                        <div className="">
                            <div className="heading">Tải ứng dụng dùng ngay</div>
                            <div className="description">
                                Trải nghiệm tìm kiềm món ngon tại 2ALL tốt hơn trên ứng dụng
                                điện thoại. Hiện đã có mặt tại 2 nền tảng iOS và Android.
                            </div>
                        </div>
                        <div className="actions d-flex">
                            <img className=""
                                 alt=""
                                 src="./public/mobile-app-store-badge.svg"
                            />

                            <img className=""
                                 alt=""
                                 src="./public/mobile-app-store-badge1.svg"
                            />
                        </div>
                    </div>
                    <div className="food-wrapper">
                        <img className="foodbox-2-1"
                             alt=""
                             src="./public/foodbox-2-1@2x.png"
                        />

                        <img className="foodbox-5-1"
                             alt=""
                             src="./public/foodbox-5-1@2x.png"
                        />
                    </div>

                    <div className="mock-up-mobile-app-wrapper">
                        <div className="mock-up-mobile-app">
                            <div className="main-screen">
                                <img className=""
                                     alt=""
                                     src="./public/-elements--iphone-x--status-bar.svg"
                                />

                                <div className="heading d-flex justify-content-between px-3 mt-3">
                                    <b className="mn-ngon-hm">Món ngon hôm nay</b>
                                    <img className=""
                                         alt=""
                                         src="./public/vuesaxlineararrowright.svg"
                                    />
                                </div>

                                <div className="food-card-parent d-flex flex-column">
                                    <div className="food-card m-3">
                                        <div className="rectangle-parent d-flex flex-column align-items-center">
                                            <div className="discount-wrapper w-100 py-2 px-3">
                                                <b className="discount">GIẢM GIÁ</b>
                                            </div>

                                            <img className="food-image2"
                                                 alt=""
                                                 src="./public/mask-group4@2x.png"
                                            />
                                        </div>

                                        <div className="card-info-wrapper-2 d-flex flex-column">
                                            <div className="heading-and-icon-parent d-flex flex-column gap-1">
                                                <b className="heading">Summer Avo Salad</b>

                                                <div className="chef-name">
                                                    <span className="font-weight-500">by </span>
                                                    <span className="name font-weight-600">The Bistro Thảo Điền</span>
                                                </div>
                                            </div>
                                            <div className="card-info-detail d-flex">
                                                <div className="d-flex gap-1 justify-content-center align-items-center">
                                                    <img alt=""
                                                         src="./public/star-icon4.svg"
                                                    />
                                                    <div className="">4.5</div>
                                                </div>
                                                <div className="d-flex gap-1 justify-content-center align-items-center">
                                                    <img className=""
                                                         alt=""
                                                         src="./public/markerpin022.svg"
                                                    />

                                                    <div className="">3,2 km</div>
                                                </div>
                                                <div className="d-flex gap-1 justify-content-center align-items-center">
                                                    <img className=""
                                                         alt=""
                                                         src="./public/markerpin023.svg"
                                                    />

                                                    <div className="">356 Kcal</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="footer-2all d-flex justify-content-center">
        <div className="footer container">
            <div className="py-5 gap-5 d-flex">
                <div className="logo-and-supporting-text">
                    <img className=""
                         alt=""
                         src="./public/fictional-company-logo1.svg"
                    />

                    <div className="supporting-text-1">
                        Một bữa ăn ngon lành, đầy đủ dưỡng chất, được chế biến theo
                        khẩu vị của bạn. Không cần lo nghĩ, không cần nấu, hẹn giờ
                        giao linh hoạt.
                    </div>
                </div>
                <div className="links d-flex">
                    <div className="footer-links-column">
                        <div className="footer-links-heading">Liên hệ</div>
                        <div className="footer-links">
                            <div className="footer-link">
                                <div className="">info@gmail.com</div>
                            </div>
                            <div className="footer-link">
                                <div className="">0988 989 989</div>
                            </div>
                            <div className="footer-link">
                                <div className="">162 Hoàng Sa</div>
                            </div>
                            <div className="footer-link">
                                <div className="">Q.1, Tp.HCM</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links-column">
                        <div className="footer-links-heading">Về chúng tôi</div>
                        <div className="footer-links">
                            <div className="footer-link">
                                <div className="">Đội ngũ</div>
                            </div>
                            <div className="footer-link">
                                <div className="">Việc làm</div>
                            </div>
                            <div className="footer-link">
                                <div className="">Tin tức</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links-column">
                        <div className="footer-links-heading">Khu vực hoạt động</div>
                        <div className="footer-links">
                            <div className="footer-link">
                                <div className="">Quận 1, Tp. Hồ Chí Minh</div>
                            </div>
                            <div className="footer-link">
                                <div className="">Quận 2, Tp. Hồ Chí Minh</div>
                            </div>
                            <div className="footer-link">
                                <div className="">Quận 3, Tp. Hồ Chí Minh</div>
                            </div>
                            <div className="footer-link">
                                <div className="">Quận 4, Tp. Hồ Chí Minh</div>
                            </div>
                            <div className="footer-link">
                                <div className="">Bình Tân, Tp. Hồ Chí Minh</div>
                            </div>
                            <div className="footer-link">
                                <div className="">Phú Nhuận, Tp. Hồ Chí Minh</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links-column2">
                        <div className="footer-links-heading">Theo dõi tại</div>
                        <div className="footer-links">
                            <div className="footer-link">
                                <div className="social-button">
                                    <img className="social-image"
                                         alt=""
                                         src="./public/instagram.svg"
                                    />
                                    <div className="">Instagram</div>
                                </div>
                            </div>
                            <div className="footer-link">
                                <div className="social-button">
                                    <img className="social-image"
                                         alt=""
                                         src="./public/facebook.svg"
                                    />

                                    <div className="">Facebook</div>

                                </div>
                            </div>
                            <div className="footer-link">
                                <div className="social-button">
                                    <img className="v"
                                         alt=""
                                         src="./public/linkedin.svg"
                                    />
                                    <div className="">Linkedin</div>

                                </div>
                            </div>
                            <div className="footer-link">
                                <div className="social-button">
                                    <img className="social-image"
                                         alt=""
                                         src="./public/246x0w-1@2x.png"
                                    />
                                    <div className="">Zalo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright py-3">
                © 2023 Bản quyền website, ứng dụng thuộc về 2ALL.
            </div>
        </div>
    </section>

            <Footer />
        </Layout>
    )
}


export default IndexPage