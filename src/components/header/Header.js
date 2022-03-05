import React from 'react'
import './_header.scss'

import { FaBars} from 'react-icons/fa'
import { AiOutlineSearch} from 'react-icons/ai'
import { MdNotifications, MdApps} from 'react-icons/md'
 
const Header = ({handleToggleSitebar}) => {
    return (
        <div className='header'>
            <FaBars className='header__menu' size={26}
            
            onClick = {() => handleToggleSitebar()}
            
            />

            < img src ="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className = 'header__logo' />
            <form>
                <input type="text" placeholder='Search'/>
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="header__icons">
                <MdNotifications size={28}/>
                <MdApps size={28}/>
                < img src = "https://toppng.com/uploads/preview/smile-girl-emoji-11549403123tibmudgoie.png"
                alt = "avatar" />
            </div>
        </div>
    )
}

export default Header
