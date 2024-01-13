import React from "react";
import MenuItem from "@/components/menu-item/index";
import MenuItemTitle from "@/components/menu-item/menu-item-title";
import useSwr from 'swr';
import {fetcher} from '@/utils/fetcher';
import { sendRequest } from "@/utils/fetch";

export type IngredientType = {
  name?: number | string;
} 

export type ProductTypeList = {
  id: string;
  name: string;
  price: string;
  discount?: string;
  merchart: string;
  currentPrice?: number;
  images: string[];
  cook_method:string;
  time: number;
  distance: number;
  ratings: number;
  kcal: string;
  ingredient: Array<IngredientType>,
}

const InterestingFood = async () => {

    return(
        <div className="attractive-dishes-section d-flex flex-column w-100">
            <div className="title-section d-flex justify-content-between align-items-end w-100">
               	<div className="title-and-sub-title flex-grow-1 d-flex flex-column">
	                <div className="card-title">
	                    Hấp dẫn
	                </div>
	                <div className="sub-title">
	                    Khám phá món hấp dẫn xung quanh bạn
	                </div>
	            </div>
                
            </div>
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
            {/* 
            <div className="food-cards d-flex justify-content-between py-4">
                {data.map((item:ProductTypeList) =>(
                    <MenuItem key={item.id} 
                        id={item.id}
                        name={item.name}
                        images={item.images} 
                        merchart={item.merchart}
                        cook_method={item.cook_method}
                        currentPrice={item.currentPrice}
                        price={item.price}
                        ingredient ={ item.ingredient}
                        kcal = {item.kcal}
                        time={item.time}
                        distance={item.distance}
                        ratings={item.ratings}
                    />
                ))}
            </div>
            */}
        </div>
    )
};


export default InterestingFood;
