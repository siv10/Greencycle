import React from 'react';
import './Profile.css';

export function Profile() {
    return (
        <div className='Profile'>
            {/* <div className='animation'></div> */}
            <div className='form'>
                <h2>My Profile</h2>
                <form className="register-form" id="contactForm" >
                    <input type="text" id="name" name="name" placeholder="username" />
                    <div className='brands'>
                        <img src="./mac.png" alt="mac" />
                        <label >Choose Coupon:</label>
                        <select name="coupon" id="coupon">
                            {/* 6plastic/glass */}
                            <option value="coupon1">000110</option>
                            {/* 12plastic/glass */}
                            <option value="coupon2">001100</option>
                            {/* 18plastic/glass */}
                            <option value="coupon3">010010</option>
                        </select>
                    </div>
                    <input id="subMit" type="submit" value={"submit"} />
                    <div><p>Recycling Amount</p><button>:{ }</button></div>
                </form>
            </div>
        </div>
    )
}

//----------------------------------------
//else Brands
{/* <div className='brands'>
                    <img src='./adidas.jpg' />

                    </div><div className='brands'>
                        <img src='./Shufersal.jpg' />
</div>*/}