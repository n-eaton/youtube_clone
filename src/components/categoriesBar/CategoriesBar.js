import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getVideosByCategory } from '../../redux/actions/videos.action'
import "./_categoriesBar.scss"


const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Piano',
    'Python',
    'Coding',
    'Football',
    'Gatsby',
    'Poor Coder',
    '',
]

const CategoriesBar = () => {

    const [activeElement,setActiveElement] = useState('All')

    const dispatch = useDispatch ()

    const handleClick = (value) =>{
        setActiveElement(value)
        dispatch(getVideosByCategory(value))
    }





    return (
        <div className='CategoriesBar'>
            {
                keywords.map((value,i)=><span 
                
                onClick = {() => handleClick(value)} 
                key={i}
                className = {activeElement === value? "active": ''}
                
                >
                    {value}
                </span>)
            }
            
        </div>
    )
}

export default CategoriesBar
