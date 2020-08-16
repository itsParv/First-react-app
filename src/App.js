import React from 'react';
import './App.css';
// import './App1.css';
import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';


class App extends React.Component {
  state = {
    showBlogs: true,

    blogArr: [
      {
        id: 1,
        title: 'Blog Title 1',
        description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0
      },
      {
        id: 2,
        title: 'Blog Title 2',
        description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0
      },
      {
        id: 3,
        title: 'Blog Title 3',
        description: 'Lorem Ipsum Dolo Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
        likeCount: 0
      }
    ]
  }



  onLikeButtonClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];
    // console.log(updatedBlogObj);
    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({ blogArr: updatedBlogList })
  }

  // const blogArr = null; 



  onHideButtonCLick = () => {
    // let updatedState = !this.state.showBlogs
    // console.log("Updated value", updatedState)
    // this.setState({ showBlogs: updatedState });
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs }
    });

  }



  render() {
    console.log("render called");
    console.log(this.state);
    
    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
      // console.log(item);
  
      return (
        <BlogCard key={pos} title={item.title}
          description={item.description} id={item.id} likeCount={item.likeCount}
          onLikeButtonClick={() => this.onLikeButtonClick(pos)} />
        // <div className="box1style" key={item.id} >
        //   <h3>{item.title} </h3>
        //   <p> {item.description} </p>
        // </div>
      )
  
    })
    return (
      <div className="App" >
        <button onClick={this.onHideButtonCLick}> {this.state.showBlogs ? 'Hide Blog' : 'Show Blog'}  </button>
        <br></br>
        {this.state.showBlogs ? blogCards : null}

      </div>
    );
  }


}

export default App;
