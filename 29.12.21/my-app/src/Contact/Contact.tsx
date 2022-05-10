import React from 'react'
import './Contact.css'


export function Contact() {
    return (
        <div>
            <h3>Contact Us</h3>
            <div className='container1'>
                <div>
                    <p>Welcome To Our GREENSITE
                    </p></div>
                <div></div>
            </div>
            <div className='container2'>
                <div>
                    <p>Welcome To Our GREENSITE </p></div>
                <div>

                </div>
            </div>
        </div>
    )
}


// export function Contact() {
//     let [formInfo, setFormInfo] = useState({
//         name: "",
//         textareaStr: "type something..."
//     })

//     let [someStr, setSomeStr] = useState("");


//     function textWasChanged(
//         e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
//         whichField: string) {

//         let newObj = {
//             ...formInfo,
//             ...{
//                 [whichField]: e.target.value
//             }
//         };

//         setFormInfo(newObj);
//     }

//     function textAreaWasChanged(
//         e: React.ChangeEvent<HTMLTextAreaElement>,
//         whichField: string) {

//         let newObj = {
//             ...formInfo,
//             ...{
//                 [whichField]: e.target.value
//             }
//         };
//         setFormInfo(newObj);
//     }




//     function formWasSubmitted(e: React.FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         console.log(formInfo);

//         let queryParamsStr = `https://cyberfighters.herokuapp.com/qa-exercises/new-customer-registers/?`;

//         let isFirst = true;

//         for (const [k, v] of Object.entries(formInfo)) {
//             if (isFirst === false) {
//                 queryParamsStr += `&${k}=${v}`
//             }
//             else {
//                 isFirst = false;
//                 queryParamsStr += `${k}=${v}`
//             }
//         }

//         console.log(queryParamsStr);

//         $.ajax({
//             url: queryParamsStr,
//             success: function (result: string) {
//                 console.log(result);
//             }
//         });
//     }



//     return (
//         <div className='LogForm' >

//             <form id="contactForm" onSubmit={(e) => { formWasSubmitted(e) }}>
//                 <div>
//                     <label className="lbl">Name:</label>


//                     <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//                         setSomeStr(e.target.value);
//                         textWasChanged(e, "name")
//                     }}
//                         type="text" id="name" name="name" placeholder="Name" />

//                 </div>

//                 <div>

//                     <label className="lbl">Can we help? </label>
//                     <textarea name="txtAreaMsg"
//                         onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
//                             setSomeStr(e.target.value);
//                             textAreaWasChanged(e, "textareaStr")
//                         }}
//                         id="txtAreaMsg"
//                         cols={50}
//                         rows={20}
//                         placeholder={formInfo.textareaStr}></textarea>
//                 </div>
//                 <input type="submit" value={"Submit"} />


//             </form>

//         </div>
//     )
// }
