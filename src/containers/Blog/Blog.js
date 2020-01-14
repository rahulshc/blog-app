import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';

class Blog extends Component {
    
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/' exact
                            activeClassName='myActive'
                            /*activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}*/>Home</NavLink></li>
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
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                
                {/*/new-post can be interpreted as /id hence it has been put above /id because code is parsed from top to bottom*/}
                <Route path="/:id" exact component={FullPost} />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;