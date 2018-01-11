import React, {Component} from 'react';
import Comment from './Comment'

let id = 0;

function getCommentId() {
  id += 1;
  return id;
};

class NewsPost extends Component {
  state = {
    comments: [],
    commentInput: ''
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({commentInput: value});
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {commentInput, comments} = this.state;
      const newComment = {value: commentInput, id: getCommentId()};

      this.setState({commentInput: '', comments: [...comments, newComment]});
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  };

  render() {
    const {commentInput, comments} = this.state;
    const {text} = this.props
    return (
      <div>
        <input
          value={commentInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <p>{text}</p>
        <div>
          {comments.map(comment => (
            <Comment
              onDelete={this.handleDelete}
              key={comment.value}
              id={comment.id}
              text={comment.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default NewsPost;
