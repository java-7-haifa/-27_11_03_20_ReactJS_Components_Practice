import React from "react";
import getAllPosts from "./Constants";
import Posts from "./Posts";
import PostView from "./PostView";

class App extends React.Component {
  state = {
    nav: "home",
    posts: getAllPosts(),
    pid: "0"
  };

  getCurrComp = () => {
    switch (this.state.nav) {
      case "home":
        return <h1>Home page</h1>;
      case "posts":
        return (
          <Posts posts={this.state.posts} handler={this.onPostClickHandler} />
        );
      case "post-view":
        let post = this.state.posts.find(p => p.id === this.state.pid);
        return (
          <PostView
            author={post.author}
            pid={post.id}
            date={post.date}
            text={post.text}
            comments={post.comments}
            addCommentHandler={this.addNewComment}
          />
        );
    }
  };

  onPostClickHandler = pid => {
    this.setState({ ...this.state, nav: "post-view", pid });
  };

  addNewComment = (pid, author, mess) => {
    let date = new Date();
    let index = this.state.posts.findIndex(p => p.id === pid);
    let post = { ...this.state.posts[index] };
    let comments = [...post.comments];
    comments.push({
      id: `${date.getTime()}`,
      author,
      message: mess,
      date: date.toDateString()
    });
    post.comments = comments;
    let posts = [...this.state.posts];
    posts[index] = post;
    this.setState({ ...this.state, posts });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <ul className="nav">
            <li className="nav-link">
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ ...this.state, nav: "home" });
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-link">
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ ...this.state, nav: "posts" });
                }}
              >
                Posts
              </a>
            </li>
          </ul>
        </div>
        <div className="row">{this.getCurrComp()}</div>
      </div>
    );
  }
}

export default App;
