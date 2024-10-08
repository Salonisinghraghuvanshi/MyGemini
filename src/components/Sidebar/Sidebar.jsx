import './Sidebar.css';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../context/context';
import { IoAdd } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";

const Sidebar = ({ theme }) => {
  const [extended, setExtended] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  // Check screen width and toggle isSmallScreen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div>
      {isSmallScreen && (
        <LuMenu onClick={() => setExtended(prev => !prev)} className={`menu small-menu`} />
      )}

      <div className="container">
        <div className={`sidebar ${theme}-theme ${isSmallScreen && extended ? 'visible' : ''}`}>
          <div className='top'>
            <LuMenu onClick={() => setExtended(prev => !prev)} className='menu' />
            <div onClick={() => newChat()} className={`new-chat ${theme}-theme`}>
              <IoAdd className='icons' />
              {extended ? <p>New Chat</p> : null}
            </div>
            {extended ? (
              <div className="recent">
                <p className='recent-title'>Recent</p>
                {prevPrompts.map((item, index) => (
                  <div key={index} onClick={() => loadPrompt(item)} className={`bottom-item ${theme}-theme`}>
                    <LuMessageSquare className='icons' />
                    <p>{item.slice(0, 18)}...</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className={'bottom'}>
            <div className={`bottom-item ${theme}-theme`}>
              <FaRegCircleQuestion className='icons' />
              {extended ? <p>Help</p> : null}
            </div>
            <div className={`bottom-item ${theme}-theme`}>
              <MdHistory className='icons' />
              {extended ? <p>Activity</p> : null}
            </div>
            <div className={`bottom-item ${theme}-theme`}>
              <IoSettingsOutline className='icons' />
              {extended ? <p>Setting</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
