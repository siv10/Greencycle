import axios from 'axios';
import React, { useState } from 'react';
import './Profile.css';
import { IoAnalytics } from "react-icons/io5";


export function Profile() {
    let url1 = "http://localhost:5002/users/";

    let [formInfo, setFormInfo] = useState({
        name: "",
        coupon: "",
        amount: 0
    })

    let [couponValue, setcouponValue] = useState(0);

    let [someStr, setSomeStr] = useState("");

    function textWasChanged(
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>,
        whichField: string) {
        if (whichField === "coupon") {
            if (e.target.value === "coupon1") {
                setcouponValue(6);
            }
            if (e.target.value === "coupon2") {
                setcouponValue(12);
            }
            if (e.target.value === "coupon3") {
                setcouponValue(18);
            }

        }
        console.log(couponValue);

        let newObj = {
            ...formInfo,
            ...{
                [whichField]: e.target.value
            }
        };

        setFormInfo(newObj);
    }




    function formWasSubmitted(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        url1 = url1 + formInfo.name
        axios.get(url1)
            .then(response => {
                console.log(response);
                let users = response.data;
                console.log(users);

                if (users.name === formInfo.name) {
                    couponValue = users.amount + couponValue
                    console.log(couponValue);

                    const url = "http://localhost:5002/users/updateAmount/" + formInfo.name
                    axios.put(url, { couponValue: couponValue })
                        .then(response => {
                            console.log(response);
                        })

                    alert("your recycling amount has changed =]")
                }
                else {
                    alert("This username does not exist ,signup please!")

                }

            })
    }

    return (
        <div className='Profile'>
            <div className='form'>
                <h3>My Profile</h3>
                <form className="register-form" id="contactForm" onSubmit={(e) => { formWasSubmitted(e) }} >
                    <div>
                        <input className='nameinput' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSomeStr(e.target.value);
                            textWasChanged(e, "name")
                        }} type="text" id="name" name="name" placeholder="username" />
                    </div>
                    <div className='brands' >
                        <div><img src="./mac.png" alt="mac" /></div>
                        <div className='nextToimg'>
                            <label >Choose Coupon:</label>
                            <select defaultValue={"coupon"} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                textWasChanged(e, "coupon")
                            }} name="coupon" id="coupon">
                                <option></option>
                                {/* 6plastic/glass */}
                                <option value="coupon1">000110</option>
                                {/* 12plastic/glass */}
                                <option value="coupon2">001100</option>
                                {/* 18plastic/glass */}
                                <option value="coupon3">010010</option>
                            </select>
                            <div><p>Recycling Amount</p><button>{couponValue} <IoAnalytics /></button></div>
                            <input id="subMit" type="submit" value={"submit"} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
