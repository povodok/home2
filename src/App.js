import React, {Component} from 'react';
import NewsPost from './NewsPost'

class App extends Component {

  state = {
    newsInput: '',
    news: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({newsInput: value});
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {newsInput, news} = this.state;
      const newNewsPost = {value: newsInput};

      this.setState({newsInput: '', news: [...news, newNewsPost]}, () => {this.State});
      console.log(news)
    }
  };

  render() {
    const {newsInput, news} = this.state;

    return (
      <div className="App">
        <input
          value={newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <div>
          {news.map(newsPost => (
            <NewsPost
              key={newsPost.value}
              text={newsPost.value}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
