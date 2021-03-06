import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';
import * as QueueActions from '../../actions/queue';

import SearchResults from '../../components/SearchResults';

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { actions, musicSources } = this.props;
    return (
      <SearchResults
        artistSearchResults={this.props.artistSearchResults}
        albumSearchResults={this.props.albumSearchResults}
        trackSearchResults={this.props.trackSearchResults}
        unifiedSearchStarted={this.props.unifiedSearchStarted}
        albumInfoSearch={this.props.actions.albumInfoSearch}
        artistInfoSearch={this.props.actions.artistInfoSearch}
        history={this.props.history}
        addToQueue={this.props.actions.addToQueue}
        musicSources={musicSources}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    artistSearchResults: state.search.artistSearchResults,
    albumSearchResults: state.search.albumSearchResults,
    trackSearchResults: state.search.trackSearchResults,
    unifiedSearchStarted: state.search.unifiedSearchStarted,
    musicSources: state.plugin.plugins.musicSources,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, Actions, QueueActions),
      dispatch
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsContainer);
