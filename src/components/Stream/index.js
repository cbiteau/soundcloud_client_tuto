import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Stream from './presenter';

function mapStateToProps(state) {
  const { tracks, activeTrack } = state.track;
  const { user } = state.auth;

  return {
    tracks,
    user,
    activeTrack
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAuth: bindActionCreators(actions.auth, dispatch),
    onPlay: bindActionCreators(actions.playTrack, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps) (Stream);
