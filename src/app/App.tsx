import React, {useEffect} from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store'
import {initializeApAc, RequestStatusType} from './app-reducer'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import {Menu} from '@mui/icons-material';
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {Route, Routes} from 'react-router-dom'
import {Login} from "../components/Login/Login";
import {CircularProgress} from "@mui/material";
import {logoutAcTc} from "../components/Login/authReducer";

type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    let isLoggedIn=useSelector<AppRootStateType,boolean>(state => state.auth.isLoggedIn);

    let dispatch=useDispatch()
    let initilizeApp=useSelector<AppRootStateType, boolean>(state => state.app.initialize)
    useEffect(()=>{
        dispatch(initializeApAc())
    },[])

    let handleLogout=()=>{
        dispatch(logoutAcTc())
    }

    if (!initilizeApp) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }
    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    <Button onClick={handleLogout}  color="inherit">{isLoggedIn?"Logout":"Login"}</Button>
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Routes>
                    <Route path={'/'} element={<TodolistsList demo={demo}/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>}/>
                </Routes>
            </Container>
        </div>
    )
}

export default App
