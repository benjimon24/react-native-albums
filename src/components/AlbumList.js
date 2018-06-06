import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import Album from './Album'

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state.albums)
    return (
      <View>
        {this.state.albums.map(album => <Album album={album} key={album.title} />)}
      </View>
    );
  }
}
export default AlbumList;
