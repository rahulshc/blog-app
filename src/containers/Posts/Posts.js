import  React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: [],
    }

    postSelectedhandler = (id) => {

        this.setState({selectedPostId: id});
    }

    componentDidMount(){
        //console.log(this.props);
        axios.get('/posts')
        .then(response => {
            const posts=response.data.slice(0,4);
            const updatedPosts=posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPosts});
            //console.log(response);
        }).catch(error => {
            console.log(error);
            //this.setState({error: true});
        });
    }


    render () {
        let posts=<p style={{textAlign: 'center'}}>Something Went Wrong!</p>
        if(!this.state.error){
             posts=this.state.posts.map(post => {
                return <Post title={post.title} key ={post.id}author={post.author}
                clicked={() => this.postSelectedhandler(post.id)}/>
            });
        }

        return (
            <section className="Posts">
                    {posts}
                </section>
            
        );
    }

}

export default Posts;

