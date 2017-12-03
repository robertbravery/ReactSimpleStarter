import * as React from 'react';
import * as ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyA7fVPJM4tukjUukoGjLPreOYAJdxQi67M';

//Create a new componetn/ This component should produce some HTML
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo:null
    };

    this.videoSearch('pianno guys');
  }
   
  videoSearch(term) {
    YTSearch({
      key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      }); //this.setState({videos: videos}); //works when the key and property are the same name
    });
  }


  render() {
    return (
      <div >
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div >
    );
  }
}

// Take this componenet's generated HTML and put it on the page ( in the DOM)
ReactDom.render(< App />, document.getElementById('root'));