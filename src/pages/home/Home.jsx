import './home.css'
import Header from '../../components/header/Header'
import Posts from "../../components/posts/Posts"
import SideBar from '../../components/sidebar/SideBar'

import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <>
            <Header/>
            <div className="home">
                <Posts/>
                <SideBar/>
            </div>
            </>
        )
    }
}
