import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './App1.css';
import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';


class App extends React.Component {
  state = {
    showBlogs: true
  }


  blogArr = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
    }
  ]


  // const blogArr = null;

  blogCards = isArrayEmpty(this.blogArr) ? [] : this.blogArr.map((item, pos) => {
    // console.log(item);

    return (
      <BlogCard key={pos} title={item.title} description={item.description} id={item.id} />
      // <div className="box1style" key={item.id} >
      //   <h3>{item.title} </h3>
      //   <p> {item.description} </p>
      // </div>
    )

  })

  onHideButtonCLick = () => {
    // let updatedState = !this.state.showBlogs
    // console.log("Updated value", updatedState)
    // this.setState({ showBlogs: updatedState });
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs }
    });

  }

  render() {
    return (
      <div className="App" >
        <button onClick={this.onHideButtonCLick}> {this.state.showBlogs ? 'Hide Blog' : 'Show Blog'}  </button>
        <br></br>
        {this.state.showBlogs ? this.blogCards : null}

      </div>
    );
  }


}

export default App;
