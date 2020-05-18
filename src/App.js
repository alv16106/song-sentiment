import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './App.css';
import AppContainer from './components/AppContainer';

//  https://storage.cloud.google.com/sentiment-songs/4.mp3?authuser=1

function App() {
  return (
    <div className="App">
      <AudioPlayer src={'https://storage.cloud.google.com/sentiment-songs/4.mp3?authuser=1'} showJumpControls={false} />
      <AppContainer />
    </div>
  );
}

export default App;
