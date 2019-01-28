import React from 'react'
import SearchBar from './SearchBar'
import Api from '../api/youtube'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

class App extends React.PureComponent {

    state = {
        videos: [],
        selectedVideo: null
    }

    onSelectVideo = (video) => {
        this.setState({selectedVideo: video})
    }
    handleSearch = async term => {
        const response = await Api.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })

    }

    render() {
        return (
            <div className="ui container">
                <SearchBar handleSubmit={this.handleSearch}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="nine wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="seven wide column">
                            <VideoList onVideoSelect={this.onSelectVideo} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;