import Post from './../post/Post'
import './posts.css'
import React, { Component } from 'react'
import axios from "axios"

export default class Posts extends Component {
    state = {
        posts: []
    }
    // componentDidMount() {
    //     alert(12345678);
    //     axios.get('http://makoha-001-site1.itempurl.com/api/v1/Tenants')
    //     .then(res => {const posts = res.data;
    //         alert(1);
    //     this.setState({ posts });})
    // }
    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://babise-001-site1.ctempurl.com/api/v1/Articles').then(response => this.setState({ posts: response.data}));
    }
    render() {
        return (
            <div className="posts">
                {this.state.posts.map(post => <Post title={post.title} article={post.description} time={"1 hour ago"} />)}
            </div>
        )
    }
}