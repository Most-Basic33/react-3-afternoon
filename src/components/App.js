import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'https://practiceapi.devmountain.com/api/posts',
      posts: []
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    axios.get(this.state.url)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }
  //passing a quiery to our api
  updatePost(id, text) {
    console.log(text, "text")
    console.log(id, "id")
    axios.put(`${this.state.url}?id=${id}`, { text })
      .then(res => this.setState({ posts: res.data }))
      .catch()
  }

  deletePost() {
    axios.delete('')
  }

  createPost() {

  }

  render() {
    const { posts } = this.state;
    const newPost = posts.map((post, i) => {

      return (
        <div key={i}>
          <Post
            id={post.id}
            key={post.id}
            updatePost={this.updatePost}
            text={post.text}
            date={post.data}
          />
        </div>
      )
    })
    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {newPost}
        </section>
      </div>
    );
  }
}

export default App;
