import { useForm } from "react-hook-form";
import { server } from '../../utils/server'; 

interface LoginPhone {
  phone: string;
}

type StepType = {
    onChange : any,
    setPhone: any
}

const LoginComponent = ({onChange,setPhone}: StepType) => {
   
    const { register,handleSubmit, errors } = useForm();
   
    const onSubmit = async (data: LoginPhone) => {
        var phone_with_area_code = "84" + data.phone ;
        setPhone(phone_with_area_code);

        await fetch(`${server}auth/requestOTP`, {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
              phoneNumber: phone_with_area_code,
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json.status);
            if(json.status == "success"){
                setTimeout(() => {
                    onChange(2);
                }, 1000);
            }
        })
        .catch(error => {
            console.log(error);
        });
   
    };

    return (
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
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                               
                                            <input placeholder="+84 (555) 000-0000" type="number" className="text-input1 border-none" name="phone"
                                                ref={register( { required: true, minLength: 10, maxLength: 11 ,
                                                        valueAsNumber: true,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    {errors.phone && errors.phone.type === 'required' && 
                                        <p className="d-block hint-text6 ">This field is required</p>
                                    }
                                    {errors.phone && errors.phone.type === 'minLength' && 
                                        <p className="d-block hint-text6 ">This field is 10 number required</p>
                                    }
                                    {errors.phone && errors.phone.type === 'maxLength' && 
                                        <p className="d-block hint-text6 ">This field max 11 number required</p>
                                    }
                                    <div className="hint-text6">This is a hint text to help user.</div>
                                </div>


                            </div>
                            <div className="hint-text7">
                                Chúng tôi sẽ gửi tới số điện thoại bạn đăng ký mã số OTP để kích
                                hoạt tài khoản
                            </div>
                        </div>
                        <button className="button49 mt-3 "  type="submit">
                            <span className="text69"  >Tiếp tục</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default LoginComponent
  