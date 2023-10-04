import {useEffect} from 'react';
import {connect} from 'react-redux';

import HomePage from "./HomePage";
import VideoPage from "./VideoPage";

import {loadFeedAction} from '../redux/actions/actionCreators';

function App({video, loadFeed}) {

  useEffect(() => {
    loadFeed();
  }, []);

  return (
    <>
      {video ?
        <VideoPage /> :
        <HomePage />
      }
    </>
  )
};

const mapStateToProps= state => ({
  video: state.videopageReducer.video
});

const mapDispatchToProps= dispatch => ({
  loadFeed: () => dispatch(loadFeedAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
