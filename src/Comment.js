import React, {Component} from 'react';

class Comment extends Component {

  handleDelete = () => {
    const {id, onDelete} = this.props;
    onDelete(id);
  };

  render() {
    const {text} = this.props
    return(
          <div>
            <p>
              {text}
              <span onClick={this.handleDelete} className="delete">X</span>
            </p>
          </div>
        );
  }
}

export default Comment;
