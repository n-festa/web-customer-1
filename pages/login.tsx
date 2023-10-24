import Layout from '../layouts/main';
//import { useState } from 'react';
//import Link from 'next/link';
//import { useForm } from "react-hook-form";
//import { server } from '../utils/server'; 
//import { postData } from '../utils/services'; 
//import { useRouter } from "next/router";
//import { saveState } from '../utils/localstorage';
//import { useState , useEffect} from 'react';
//import TimerContainer from '../components/time/TimerContainer';
//import BMI from '../components/BMI/index';
/*
type LoginMail = {
    email: string;
    password: string;
}*/

const LoginPage = () => {
  /*
    const onSubmit = async (data: LoginMail) => {
        console.log(data);
    };
    */


    return (
        <Layout>
            <div className="sign-up">
                <div className="image-login-page">
                    <div className="image-login-page-child"></div>
                    <img src="/images/6387ec276a4eb-62aa10dfb2adca268416cf2fd03d82f5transformed-3@2x.png" alt="product" />
                </div>
                <div className="content26">
                    <div className="title">
                        <b className="heading26">Đặt ngay bữa ăn ngon & lành của riêng bạn!</b>
                    </div>
                    <div className="input-field-parent">
                        <form action="#">
                        <div className="input-field4">
                            <div className="input-with-label6">
                                <div className="label6">Điền số điện thoại của bạn</div>
                                <div className="input-field5">
                                    <div className="input-with-label6">
                                        <div className="label7">Phone number</div>
                                        <div className="input77">
                                            <div className="dropdown1">
                                                <img className="vn-icon2" alt="" src="/images/vn.png" />
                                                <img  className="chevron-down-icon3" alt="" src="/images/chevrondown1.svg"  />
                                            </div>
                                            <input placeholder="+84 (555) 000-0000"  className="text-input1 border-none"/>
                                        </div>
                                    </div>
                                    <div className="hint-text6">This is a hint text to help user.</div>
                                </div>
                            </div>
                            <div className="hint-text7">
                                Chúng tôi sẽ gửi tới số điện thoại bạn đăng ký mã số OTP để kích
                                hoạt tài khoản
                            </div>
                        </div>
                        <div className="button49">
                            <div className="text69">Tiếp tục</div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
  
export default LoginPage
  