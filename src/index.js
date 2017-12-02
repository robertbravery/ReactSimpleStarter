import * as React from 'react';
import * as ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyA7fVPJM4tukjUukoGjLPreOYAJdxQi67M';

//Create a new componetn/ This component should produce some HTML
class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {videos: []};
  YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    this.setState({ videos }); //this.setState({videos: videos}); //works when the key and property are the same name
  });
}

  render() {
  return (
  <div>
    <SearchBar />
    <VideoList videos={this.state.videos} />   
  </div>
  );
}
}

// Take this componenet's generated HTML
// and put it on the page ( in the DOM)
ReactDom.render(<App />, document.getElementById('root'));