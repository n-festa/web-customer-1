'use client'
import { useState } from 'react';
import CartHeader from "./cartHeader";
import CheckLogin from "./checkLogin";
import CartModel from "../cart/cartModel";
import { signIn, signOut, useSession } from 'next-auth/react';
type HeaderType = {
    isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
    const [show, setShow] = useState(false);
    const { data: session, status } = useSession();
    console.log("sesstion ", session);
    return(
        <section className={`header-section d-flex justify-content-center `}>
            <div className="header-container container w-100 d-flex justify-content-between align-items-center gap-5">
                <img className="star-icon" alt="" src="/images/menu03.svg"/>
                <div className="menu-header navbar">
                    <div className="d-flex gap-2 logo">
                        <img className="" alt="" src="/images/logo1.svg" />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <CartHeader />
                    <CheckLogin />
                    <div className="d-flex gap-1">
                        <div className="font-weight-500">VIE</div>
                        <img className="" alt="" src="/images/vn.svg"/>
                    </div>
                </div>
            </div>

            <CartModel setShow={setShow} show={show}/>
        </section>
    )
};


export default Header;
