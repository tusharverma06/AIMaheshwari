import React from "react"

export default function History({search, output, isGenerating}){
    return(
      
    <div className="process">

    <div className="message">{search}</div>
  <div className="reply"> {isGenerating ? <span className="loader"></span> : output}</div>
  
    </div>
//         <div className="output" >
//              <div className="ques">
//         <img src="https://cdn-icons-png.flaticon.com/512/100/100766.png" alt="" width={'40px'}/>
// <p>{search}</p>

//         </div> 
//           <div className="outputNav">
//           <img className='img3' src={'https://i.ibb.co/XC8bSZ8/chatbot-logo.png'} alt="" />
// <h3>AI Maheshwari</h3>
//           </div>
//           <div className="outputContent">
//              <p>{output}</p>
//           </div>

//         </div>

      
//         <div className="outputContents">
       
// <div className="imagess">
// <img className = 'imgs1' src="https://e7.pngegg.com/pngimages/149/889/png-clipart-quotation-mark-symbol-computer-icons-font-awesome-kartikeya-text-logo.png" alt="" />
// <img className='imgs2' src="https://e7.pngegg.com/pngimages/840/476/png-clipart-quotation-mark-font-awesome-computer-icons-quotation-text-logo.png" alt="" />
// </div>

//     </div>
      
    )
}