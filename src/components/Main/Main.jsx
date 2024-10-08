import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/context'
import { LuMessageSquare } from "react-icons/lu";
import { VscCompass } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineSend } from "react-icons/md";




const Main = ({ theme }) => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
  return (
    <div className={`main ${theme}-theme`}>
      <div className='nav'>    
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">


        {!showResult
          ? <>
            <div className={`greet ${theme}-theme`}>
              <p><span>Hello,Saloni</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className={`cards ${theme}-theme`}>
              <div className="card">
                <p>Suggest beautiful places to see on upcoming road trip</p>
                <VscCompass className='icons' />
              </div>
              <div className="card">
                <p>
                  Briefly summerize this concept: urban planning
                </p>
                <FaRegLightbulb className='icons' />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreate</p>
                <LuMessageSquare className='icons' />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <FaCode className='icons' />
              </div>
            </div>
          </>
          : <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
                ? <div className={`loader ${theme}-theme`}>
                  <hr />
                  <hr />
                  <hr />
                </div>

                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>
          </div>
        }
        <div className={`main-bottom ${theme}-theme`}>
          <div className={`search-box ${theme}-theme`}>
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <BiImageAdd className='icons' />
              <MdOutlineKeyboardVoice className='icons' />
              {input ? <MdOutlineSend className='icons' onClick={() => onSent()} /> : null}
            </div>
          </div>
          <p className='bottom-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab, vel nemo, qui id vero dolorum repellendus reiciendis </p>
        </div>
      </div>
    </div>
  )
}

export default Main
