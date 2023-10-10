import {useEffect} from 'react';
import {connect} from 'react-redux';

import Navbar from "./Navbar";
import HomePage from "./HomePage";
import VideoPage from "./VideoPage";

import {loadFeedAction} from '../redux/actions/actionCreators';

function App({loadingVideo, errorVideo, video, loadFeed}) {

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <>
      <Navbar />
      {(loadingVideo | !!video | !!errorVideo) ?
        <VideoPage /> :
        <HomePage />
      }
    </>
  )
};

const mapStateToProps= state => ({
  loadingVideo: state.videopageReducer.loadingVideo,
  errorVideo: state.videopageReducer.errorVideo,
  video: state.videopageReducer.video
});

const mapDispatchToProps= dispatch => ({
  loadFeed: () => dispatch(loadFeedAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
