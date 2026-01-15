import React from 'react';
import { bool, object } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { propTypes } from '../../util/types';
import { isScrollingDisabled } from '../../ducks/ui.duck';
import { Page, LayoutSingleColumn } from '../../components';

import TopbarContainer from '../TopbarContainer/TopbarContainer';
import FooterContainer from '../FooterContainer/FooterContainer';
import CustomLandingPage from './CustomLandingPage';

export const LandingPageComponent = props => {
  const { scrollingDisabled } = props;

  return (
    <Page
      title="Just Construct Directory for Civil Engineers"
      scrollingDisabled={scrollingDisabled}
      description="India's premier directory for Civil Engineers, Construction Companies, Contractors, Interior Designers & Skilled Workers. Find verified professionals in your city."
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        name: 'Just Construct Directory for Civil Engineers',
        description: 'Find Civil Engineers, Contractors, Interior Designers, and Skilled Workers across India',
      }}
    >
      <LayoutSingleColumn topbar={<TopbarContainer />} footer={<FooterContainer />}>
        <CustomLandingPage />
      </LayoutSingleColumn>
    </Page>
  );
};

LandingPageComponent.propTypes = {
  pageAssetsData: object,
  inProgress: bool,
  error: propTypes.error,
};

const mapStateToProps = state => {
  const { pageAssetsData, inProgress, error } = state.hostedAssets || {};
  return { 
    pageAssetsData, 
    inProgress, 
    error, 
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const LandingPage = compose(connect(mapStateToProps))(LandingPageComponent);

export default LandingPage;
