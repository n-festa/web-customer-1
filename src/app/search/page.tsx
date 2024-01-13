import Breadcrumb from "@/app/ui/breadcrumb";
import InterestingFood from "@/components/homePage/interesting_food";

const SearchPage = () =>{
    return (
        <section className="d-flex flex-column container home-section">
			<Breadcrumb />
	        <div className="search-item-wrapper d-flex">
			    <img className=""  alt=""   src="/images/searchmd.svg"   />
			    <input type="text" className="border-none search-item flex-grow-1" placeholder="Gõ tên món ăn, nhà hàng mà bạn đang muốn tìm" />
			</div>

			<div className="filter-and-sort d-flex gap-3 py-4">
                <div className="filter-dish-and-restaurant d-flex">
                    <div className="filter-button active">
                        Món ăn
                    </div>
                    <div className="filter-button ">
                        Nhà hàng
                    </div>
                </div>
                <div className="vertical-divider"></div>
                <div className="sort-latest d-flex gap-1">
                    <div>
                        Sắp xếp
                    </div>
                    <img className="small-icon" src="/images/chevron-down.svg" alt="" />
                </div>

                <div className="filter-tag d-flex gap-1">
                    <div>
                        4 sao
                    </div>
                    <img className="small-icon" src="/images/x-icon.png" alt="" />
                </div>

                <div className="filter-tag d-flex gap-1">
                    <div>
                        Chay
                    </div>
					<img className="small-icon" src="/images/x-icon.png" alt="" />
                </div>

            </div>

			{/** co the su dung InterestingFood  */}
			<div className="attractive-dishes-section d-flex flex-column w-100">
				<div className="food-cards d-flex justify-content-between py-4">
					<div className="food-card d-flex flex-column">
						<div className="frame-parent d-flex flex-column position-relative">
							<div className="discount-wrapper">
								<b className="discount">GIẢM GIÁ ĐẶC BIỆT</b>
							</div>
							<div className="image-wrapper d-flex justify-content-center">
								<img className=""
									alt=""
									src="/images/6387ec276a4eb-62aa10dfb2adca268416cf2fd03d82f5transformed-3@2x.png"
								/>
							</div>
						</div>
						<div className="card-info-wrapper d-flex flex-column position-relative">
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
											src="/images/markerpin02.svg"
										/>

										<div className="kcal font-weight-600">356 Kcal</div>
									</div>
									<div className="d-flex align-items-center gap-1">
										<img className="small-icon"
											alt=""
											src="/images/star-icon1.svg"
										/>

										<div className="text">4.5</div>
									</div>
									<div className="d-flex align-items-center gap-2px">
										<img className="small-icon"
											alt=""
											src="/images/markerpin021.svg"
										/>

										<div className="text">3,2 km</div>
									</div>
									<div className="d-flex align-items-center gap-2px">
										<img className="small-icon"
											alt=""
											src="/images/timer.svg"
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
										src="/imagesc/frame-2729.svg"
									/>

									<div className="discount-up-to">Ưu đãi đến 50k</div>
								</div>
								<div className="flavor-time-wrapper d-flex align-items-center gap-1">
									<img className="small-icon"
										alt=""
										src="/images/frame-2725.svg"
									/>

									<div className="flavor-time">
										Đặt trước 09:00 giờ sáng để điều chỉnh vị
									</div>
								</div>
							</div>
							<div className="add-to-cart-button">
								<img src="/images/plus.svg" alt="" />
							</div>
						</div>
					</div>
					<div className="food-card d-flex flex-column">
						<div className="frame-parent d-flex flex-column">
							<div className="image-wrapper d-flex justify-content-center">
								<img className=""
									alt=""
									src="/images/6387ec276a4eb-62aa10dfb2adca268416cf2fd03d82f5transformed-3@2x.png"
								/>
							</div>
						</div>
						<div className="card-info-wrapper d-flex flex-column position-relative">
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
											src="/images/markerpin02.svg"
										/>

										<div className="kcal font-weight-600">356 Kcal</div>
									</div>
									<div className="d-flex align-items-center gap-1">
										<img className="small-icon"
											alt=""
											src="/images/star-icon1.svg"
										/>

										<div className="text">4.5</div>
									</div>
									<div className="d-flex align-items-center gap-2px">
										<img className="small-icon"
											alt=""
											src="/images/markerpin021.svg"
										/>

										<div className="text">3,2 km</div>
									</div>
									<div className="d-flex align-items-center gap-2px">
										<img className="small-icon"
											alt=""
											src="/images/timer.svg"
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
										src="/images/frame-2729.svg"
									/>

									<div className="discount-up-to">Ưu đãi đến 50k</div>
								</div>
								<div className="flavor-time-wrapper d-flex align-items-center gap-1">
									<img className="small-icon"
										alt=""
										src="/images/frame-2725.svg"
									/>

									<div className="flavor-time">
										Đặt trước 09:00 giờ sáng để điều chỉnh vị
									</div>
								</div>
							</div>
							<div className="add-to-cart-button">
								<img src="/images/plus.svg" alt="" />
							</div>
						</div>
					</div>
					<div className="food-card d-flex flex-column">
						<div className="frame-parent d-flex flex-column">

							<div className="image-wrapper d-flex justify-content-center">
								<img className=""
									alt=""
									src="/images/6387ec276a4eb-62aa10dfb2adca268416cf2fd03d82f5transformed-3@2x.png"
								/>
							</div>
						</div>
						<div className="card-info-wrapper d-flex flex-column position-relative">
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
											src="/images/markerpin02.svg"
										/>

										<div className="kcal font-weight-600">356 Kcal</div>
									</div>
									<div className="d-flex align-items-center gap-1">
										<img className="small-icon"
											alt=""
											src="/images/star-icon1.svg"
										/>

										<div className="text">4.5</div>
									</div>
									<div className="d-flex align-items-center gap-2px">
										<img className="small-icon"
											alt=""
											src="/images/markerpin021.svg"
										/>

										<div className="text">3,2 km</div>
									</div>
									<div className="d-flex align-items-center gap-2px">
										<img className="small-icon"
											alt=""
											src="/images/timer.svg"
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
										src="/images/frame-2729.svg"
									/>

									<div className="discount-up-to">Ưu đãi đến 50k</div>
								</div>
								<div className="flavor-time-wrapper d-flex align-items-center gap-1">
									<img className="small-icon"
										alt=""
										src="/images/frame-2725.svg"
									/>

									<div className="flavor-time">
										Đặt trước 09:00 giờ sáng để điều chỉnh vị
									</div>
								</div>
							</div>
							<div className="add-to-cart-button">
								<img src="/images/plus.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
	    </section>
    )
}

export default SearchPage;