import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist'

let playlistName = 'playlistName'

//below class APP add searchbar componetn


class App extends React.Component {
  constructor(props) {
    super(props);

        this.state = {
            searchResults: [{name: '', artist: '', album: '',id: ''}],
            playlistName: 'playlistName',
            playlistTracks: [{name: '', artist: '', album: '',id: ''}]
        }

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlayList = this.savePlayList.bind(this);
        this.search = this.search.bind(this);
  }

  savePlayList() {
    let  trackURIs = []
  }

  search(searchTerm) {
    console.log(searchTerm)
  }


  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
    }
    else
    {
      this.state.playListTracks.push({name: track.name, artist: track.artist, album: track.album, id: track.id})
    }
  }

  removeTrack(track) {
      let getIndex = (e) => {
        return e.id === track.id
      }
      if (typeof this.state.playListTracks != 'undefined') {
       let trackToRemove = this.state.playListTracks.findIndex(getIndex)
       //this.setState({term: event.target.value});
       this.state.playListTracks.splice(trackToRemove,1)
        }
      }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

        <SearchBar onSearch={this.state.search} />

          <div className="App-playlist">
            <SearchResults searchResults ={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.state.savePlayList} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
