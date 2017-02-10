import React from 'react'
import { Link } from 'react-router'
import Loading from '../common/loading';
import Error from '../common/error';

class Main extends React.Component {
  loadingRender(){
    const { posts: {loading, posts, error}, postsFetchingStart} = this.props;
    console.log(this.props);
    if (error) return <Error action={postsFetchingStart} />;
    return (loading ?
     <Loading /> :
      React.cloneElement(this.props.children, { ...this.props, posts: posts,  key: undefined, ref: undefined })
    );
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {this.loadingRender()}
      </div>
    )
  }
}

export default Main
