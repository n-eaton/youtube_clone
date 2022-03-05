import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import { Redirect, Route, Switch } from 'react-router-dom'
import './_app.scss'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Layout = ({children})=>{
    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSitebar = () => toggleSidebar(value => !value)

    return (
        
        <>
            <Header handleToggleSitebar = {handleToggleSitebar}/>
            <div className="app__container border border-info">
                <Sidebar sidebar={sidebar} handleToggleSitebar={handleToggleSitebar}/>

                <Container fluid className="app__main border border-warning">
                    {children} 
                </Container>
            </div>
        </>
    )
}

const App = () => {

    const {accessToken, loading} = useSelector(state => state.auth)

    const history = useHistory()

    useEffect (() => {
        if ( !loading && !accessToken ) {
            history.push('/auth')

        }
    }, [accessToken, loading, history])



    return (
      
            <Switch>
                <Route path ="/" exact>
                    <Layout>
                        <HomeScreen/>
                    </Layout>
                </Route>
                <Route path="/auth">
                    <LoginScreen/>
                </Route>
                <Route path='/search'>
                    <Layout>
                        <h1>search</h1>
                    </Layout>    
                </Route>

                <Route>
                    <Redirect to='/' />
                </Route>
            </Switch>
    
    )
}

export default App
