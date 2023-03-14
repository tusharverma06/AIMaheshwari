import Head from 'next/head';
import { useState } from 'react';
import logo from './chatbot logo.png'
const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)
const [isElement,setIsElement] = useState(true)
const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };
  function sendMessage(){
    const p = document.createElement('p')

    if(userInput.length > 0){
    p.innerText = userInput;
    p.classList.add('chat')
    document.getElementById('send').appendChild(p)
    setIsElement(!isElement)
    }
    if(isElement === false){
p.classList.add('visible')
      setIsElement(true)
    }
    setUserInput('')
    callGenerateEndpoint()
  }
return (
    <div className="root">
      <Head>
        <title>AI Maheshwari 🤖</title>
  <link rel='icon' href='https://static.vecteezy.com/system/resources/previews/004/181/121/original/competence-motivation-gradient-icon-for-dark-theme-learning-new-skills-techniques-successfully-masters-tasks-thin-line-color-symbol-modern-style-pictogram-isolated-outline-drawing-vector.jpg' />
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>AI  Maheshwari 🤖</h1>
          </div>
          <div className="header-subtitle">
            <h2>Let AI motivates you in the style of Sir Sandeep Maheshwari</h2>
          </div>
        </div>
        <div className="prompt-container">
          <input 
          type='text'
          placeholder="Why do you need motivation?..." 
          className="prompt-box" 
          value={userInput}
  onChange={onUserChangedText}
onKeyUp={(e)=>{
    e.key==='Enter' && callGenerateEndpoint()
  }}
          />
        <button className="generateButton" onClick={callGenerateEndpoint}>    {isGenerating ? <span className="loader"></span> : 'Get Motivation'}
</button>
        </div>
{apiOutput && 
        <div className="output" >
          <div className="outputNav">
          <img className='img3' src={'https://i.ibb.co/XC8bSZ8/chatbot-logo.png'} alt="" />
<h3>AI Maheshwari</h3>
          </div>
          <div className="outputContent">
            <div className="images">
            <img className = 'img1' src="https://e7.pngegg.com/pngimages/149/889/png-clipart-quotation-mark-symbol-computer-icons-font-awesome-kartikeya-text-logo.png" alt="" />
          <img className='img2' src="https://e7.pngegg.com/pngimages/840/476/png-clipart-quotation-mark-font-awesome-computer-icons-quotation-text-logo.png" alt="" />
            </div>
            <p>{apiOutput}
</p>
          </div>

        </div>}
      </div>
    </div>
  );
};

export default Home;
