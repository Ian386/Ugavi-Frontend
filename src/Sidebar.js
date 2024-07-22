import React, { useState } from 'react';
import Account from "./Images/Account.png";
import HelpImg from "./Images/Help.png";
import Notifications from "./Images/Notifications.png";
import Theme from './Images/theme.png'
import { Toggle } from "./Toggle/Toggle";
import useLocalStorage from "use-local-storage";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosLogOut, IoIosMenu } from "react-icons/io";

function Sidebar() {
  const [showNav, setShowNav] = useState(true);
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  const handleToggleClick = () => setShowNav(!showNav);

  return (
    <>
      <div className={`Settingsdiv ${showNav ? '' : 'collapsed'}`} data-theme={isDark ? "dark" : "light"}>
        <div className="sidebar-toggle" onClick={handleToggleClick}>
          <IoIosMenu />
        </div>
        <div className="vertical-line"></div>
        <div className="Settingsdiv-2">
          <div className="Settingsdiv-3">
            <div className="Settings">Settings</div>
            <div className="SettingsAccount">
              <img loading="lazy" src={Account} className="Settingsimg-1" />
              <div className="AccountTxt">Account</div>
            </div>
          </div>
          <div className="SettingsLine" />
          <div className="Settingsdiv-8">
            <div className="Settingsdiv-9">
              <div className="SettingsEditProfile">
                <div className="SettingsEdit"><Link to='/Account'>Edit Profile</Link></div>
                <div className="SettingsChangePass"><Link to='/Change Password'>Change Password</Link></div>
              </div>
              <div className="Settingsdiv-13">
                <Link to='/Account'><IoIosArrowForward className='Settingsimg-3'/></Link>
                <Link to='/Change Password'><IoIosArrowForward className='Settingsimg-3'/></Link>
              </div>
            </div>
          </div>
          <div className="Settingsdiv-3">
            <div className="SettingsAccount">
              <img loading="lazy" src={Notifications} className="Settingsimg-1" />
              <div className="AccountTxt">Notifications</div>
            </div>
          </div>
          <div className="SettingsLine" />
          <div className="Settingsdiv-9">
            <div className="NotificationsTxt">Notifications</div>
            <div className="ToggleSwitch">
              <label className='Switch'>
                <input type="checkbox"/>
                <span className='Slider'/>
              </label>
            </div>
          </div>
          <div className="Settingsdiv-3">
            <div className="SettingsAccount">
              <img loading="lazy" src={Theme} className="Settingsimg-1" />
              <div className="AccountTxt">Appearance</div>
            </div>
          </div>
          <div className="SettingsLine" />
          <div className="Settingsdiv-9">
            <div className="NotificationsTxt">Theme</div>
            <Toggle 
              isChecked={isDark}
              handleChange={() => setIsDark(!isDark)}
            />
          </div>
          <div className="Settingsdiv-3">
            <div className="SettingsAccount">
              <img loading="lazy" src={HelpImg} className="Settingsimg-1" />
              <div className="AccountTxt">Help</div>
            </div>
          </div>
          <div className="SettingsLine" />
          <div className="Settingsdiv-8">
            <div className="Settingsdiv-9">
              <div className="SettingsEditProfile">
                <div className="SettingsEdit"><Link to='/Help'>FAQs</Link></div>
                <div className="SettingsChangePass"><Link to='Inquiries'>Inquiries</Link></div>
              </div>
              <div className="Settingsdiv-13">
                <Link to='/Help'><IoIosArrowForward className='Settingsimg-3'/></Link>
                <Link to='Inquiries'><IoIosArrowForward className='Settingsimg-3'/></Link>
              </div>
            </div>
            <div className="Settingsdiv-29"><Link to="/">SUPPLY2U</Link></div>
            <div className='Settingsdiv-27'><Link to="/Soon">
              <IoIosLogOut className='LogoutImg'/>
              <div className="Settingsdiv-28">Logout</div></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
