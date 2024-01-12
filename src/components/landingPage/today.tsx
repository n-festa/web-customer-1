import React from "react";
import MenuItem from "@/components/menu-item/index";
import MenuItemTitle from "@/components/menu-item/menu-item-title";
import useSwr from 'swr';
import {fetcher} from '@/utils/fetcher';
//import { MenuItemList } from '@types/menu-item.type.ts';

export type TransType = {
  title:  string;
} 

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

const Today = ({title}:TransType) => {
    return(
        <section className="daily-food-section d-flex flex-column">
            <div id="order-section1">
            </div>
        </section>
    )
};


export default Today;
