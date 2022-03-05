import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../redux/actions/auth.action'
import './_loginScreen.scss'

const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {
        dispatch(login())
    }

    const histoty = useHistory()

    useEffect (() => {
        if(accessToken){
            histoty.push('/')
        }

    }, [accessToken, histoty])






    return (
        <div className='login'>
            <div className='login__container'>
                < img src = "https://pngimg.com/uploads/youtube/youtube_PNG2.png"
                alt = "" />
                <button onClick={handleLogin}>Login with google</button>
                <p>This Project is made by using Youtube API</p>
            </div>

        </div>
    )
}

export default LoginScreen
