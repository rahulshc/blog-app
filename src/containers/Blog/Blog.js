import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
    state = {
        auth: true
    }
    
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' exact
                            activeClassName='myActive'
                            /*activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}*/>Posts</NavLink></li>
                            {/*overwrites the default active classname*/}
                            <li><NavLink activeClassName='myActive' to={{
                                pathname: '/new-post',
                                /*hash: '#submit',
                                pathname: this.props.match.url + '/new-post',//a relative path, adds the /new-post to the
                                path we are currently at
                                search: '?quick-submit=true'*/
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path='/' exact render={()=><h1>Home</h1>}/>
                <Route path='/' render={()=><h1>Home2</h1>}/>*/}
                
                <Switch>
                
                {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null }
                <Route path="/posts" component={Posts} />
                <Route render ={() => <h1>Not Found</h1>} />
                {/*handling 404 routes above this should always come last*/}
                {/*<Redirect from='/' to='/posts' />*/}
                {/*/new-post can be interpreted as /id hence it has been put above /id because code is parsed from top to bottom*/}
                {/*<Route path="/" component={Posts} />*/}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;