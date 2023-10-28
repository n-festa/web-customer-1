import { useForm } from "react-hook-form";

type StepType = {
    onChange : any,
}

const Additional = ({onChange}: StepType) => {
    const { register,handleSubmit, errors } = useForm();

    const onSubmit = async () => {
        console.log("data :"  );
        onChange(4);
    };

    return (
        <div className="phone_verification">
            <div className="content27">
                <div className="heading-and-supporting-text3 font-size18 text-start">
                    <b className="heading26">CHIA SẺ THÊM VỚI CHÚNG TÔI VỀ BẠN</b>
                    <div className="supporting-text53">
                        Những thông tin bạn cung cấp sẽ giúp chúng tôi đưa ra những gợi ý
                            về đồ ăn phù hợp hơn với thể trạng và nhu cầu của bạn.
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="user-info-parent">
                        <div className="user-info">
                            <div className="ten">
                                <div className="input-with-label6">
                                    <div className="text73">Tên</div>
                                    <div className="input7 ">
                                        <div className="content28 ">
                                            <input placeholder="Ví dụ: nguyen.vana" type="text"
                                                className="text-input1 border-none no-outline no-padding w-100" name="name"
                                                ref={register( { required: true ,
                                                })}
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                                {errors.name && errors.name.type === 'required' && 
                                    <p className="d-block hint-text6 ">This field is required</p>
                                }
                            </div>
                           
                            <div className="ten">
                                <div className="input-with-label6">
                                    <div className="text73">Email</div>
                                    <div className="input7">
                                        <div className="content28">
                                            <input placeholder="Ví dụ: nguyen.vana@email.com" type="text"
                                                className="text-input1 border-none no-outline no-padding w-100" name="email"
                                                ref={register( { 
                                                    required: true ,
                                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {errors.email && errors.email.type === 'required' && 
                                    <p className="d-block hint-text6 ">This field is required</p>
                                }
                                {errors.email && errors.email.type === 'pattern' && 
                                    <p className="message message--error">Please write a valid email</p>
                                }
                            </div>

                            <div className="ten">
                                <div className="input-with-label6">
                                    <div className="text73">Ngày sinh</div>
                                    <div className="input7">
                                        <div className="content28">
                                            <div className="text80 font-size16">
                                                <input placeholder="Ví dụ: 27/07/1995" type="date"
                                                className="text-input1 border-none no-outline no-padding w-100" name="birthdate"
                                                ref={register( { 
                                                    required: true ,
                                                })}
                                            />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {errors.birthdate && errors.email.birthdate === 'required' && 
                                    <p className="message message--error">This field is required</p>
                                }
                            </div>
                            <div className="gioi-tinh">
                                <div className="text73">Giới tính</div>
                                <div className="radio-check-parent">
                                    <div className="radio-check">
                                        <div className="input10">
                                            <div className="checkbox-base1"></div>
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Nam</div>
                                            <div className="supporting-text54">
                                                Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check">
                                        <div className="input10">
                                            <div className="checkbox-base1"></div>
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Nữ</div>
                                            <div className="supporting-text54">
                                                Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check">
                                        <div className="input10">
                                            <div className="checkbox-base1"></div>
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Khác</div>
                                            <div className="supporting-text54">
                                                Save my login details for next time.
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                </div>

                                <div className="email-parent">
                                    <div className="email1">
                                        <div className="input-with-label6">
                                            <div className="text73">Chiều cao ( cm )</div>
                                            <div className="input7">
                                                <div className="content28">
                                                    <div className="text80">
                                                        <span>Ví dụ: 163</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hint-text6">Cm</div>
                                    </div>
                                    <div className="email1">
                                        <div className="input-with-label6">
                                            <div className="text73">Cân nặng ( kg )</div>
                                            <div className="input7">
                                                <div className="content28">
                                                    <div className="text80">
                                                    <span>Ví dụ: 58</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hint-text6">Kg</div>
                                    </div>
                                </div>
                        </div>

                        <div className="user-info">
                            <div className="gioi-tinh1">
                                <div className="text73">Mức độ vận động hàng ngày</div>
                                <div className="button-group">
                                     <div className="button56">
                                        <div className="text83">Nhẹ nhàng</div>
                                    </div>
                                    <div className="button57">
                                        <div className="text83">Trung Bình</div>
                                    </div>
                                    <div className="button59">
                                        <div className="text83">Nặng</div>
                                    </div>
                                </div>
                            </div>
                            <div className="gioi-tinh2">
                                <div className="label13">Chế độ ăn hiện tại</div>
                                <div className="button-group1">
                                    <div className="button56">
                                        <div className="text83">Hỗn hợp</div>
                                    </div>
                                    <div className="button61">
                                        <div className="text83">Thuần chay</div>
                                    </div>
                                    <div className="button61">
                                        <div className="text83">Chỉ ăn thịt</div>
                                    </div>
                                </div>
                                <div className="button-group1">
                                    <div className="button61">
                                        <div className="text83">Cá</div>
                                    </div>
                                    <div className="button61">
                                        <div className="text83">Chay</div>
                                    </div>
                                    <div className="button61">
                                        <div className="text83">Không ăn kiêng</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ten">
                                <div className="input-with-label6">
                                    <div className="text73">Dị ứng với đồ ăn (nếu có)</div>
                                    <div className="input15">
                                        <div className="content28">
                                            <div className="text80">Ví dụ: sữa động vật, trứng...</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="supporting-text53">
                                    Chia sẻ thêm về đồ ăn mà bạn bị dị ứng. Ví dụ: sữa động vật,
                                      trứng, hải sản (cá, tôm, cua...), thuỷ sản (cá, tôm, lươn...),
                                      các loại hạt (đậu nành, óc chố, hạnh nhân...)
                                </div>
                            </div>
                                <div className="ten">
                                <div className="input-with-label6">
                                    <div className="text73">Bệnh mãn tính (nếu có)</div>
                                    <div className="input15">
                                        <div className="content28">
                                            <div className="text80">Ví dụ: Cao huyết áp...</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="supporting-text53">
                                    Tim, Cao huyết áp, Huyết áp thấp, Gout, Tiểu đường, hen suyễn,
                                      ung thư....
                                </div>
                            </div>
                            <div className="gioi-tinh">
                                <div className="text73">Chế độ ăn mong đợi</div>
                                <div className="radio-check-group">
                                    <div className="radio-check3">
                                         <div className="input10">
                                            <div className="checkbox-base1"></div>
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Thuần chay</div>
                                            <div className="supporting-text54">
                                            Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check3">
                                        <div className="input10">
                                            <div className="checkbox-base1"></div>
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Eat clean</div>
                                            <div className="supporting-text54">
                                            Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check3">
                                        <div className="input10">
                                            <div className="checkbox-base1"></div>
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Tăng cơ</div>
                                            <div className="supporting-text54">
                                                Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check3">
                                         <div className="input10">
                                            <div className="checkbox-base1"></div>
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Bổ sung chất xơ</div>
                                            <div className="supporting-text54">
                                                Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check3">
                                        <div className="input10">
                                            <div className="checkbox-base1"></div>
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Chế độ ăn hỗn hợp</div>
                                            <div className="supporting-text54">
                                            Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check3">
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Khác</div>
                                            <div className="supporting-text54">
                                                Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input15">
                                         <div className="content28">
                                            <div className="text80">
                                            Vui lòng điền tên chế độ ăn mong muốn
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="button68 text-center"  type="submit">
                        <span className="text69"  >Hoàn tất</span>
                    </button>
                </form>
            </div>
        </div>
    )
}
  
export default Additional
  