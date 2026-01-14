import React, { Component } from 'react';
import classNames from 'classnames';

import { injectIntl, intlShape } from '../../../util/reactIntl';
import { propTypes } from '../../../util/types';
import { formatMoney } from '../../../util/currency';
import { ensureListing } from '../../../util/data';
import { isPriceVariationsEnabled } from '../../../util/configHelpers';

import css from './SearchMapPriceLabel.module.css';

/**
 * SearchMapPriceLabel component
 * TODO: change to functional component
 *
 * @component
 * @param {Object} props
 * @param {string} [props.className] - Custom class that extends the default class for the root element
 * @param {string} [props.rootClassName] - Custom class that extends the default class for the root element
 * @param {propTypes.listing} props.listing - The listing
 * @param {Function} props.onListingClicked - The function to handle the listing click
 * @param {Object} props.config - The configuration
 * @param {intlShape} props.intl - The intl object
 * @returns {JSX.Element}
 */
class SearchMapPriceLabel extends Component {
  shouldComponentUpdate(nextProps) {
    const currentListing = ensureListing(this.props.listing);
    const nextListing = ensureListing(nextProps.listing);
    const isSameListing = currentListing.id.uuid === nextListing.id.uuid;
    const hasSamePrice = currentListing.attributes.price === nextListing.attributes.price;
    const hasSameActiveStatus = this.props.isActive === nextProps.isActive;
    const hasSameRefreshToken =
      this.props.mapComponentRefreshToken === nextProps.mapComponentRefreshToken;

    return !(isSameListing && hasSamePrice && hasSameActiveStatus && hasSameRefreshToken);
  }

  render() {
    const {
      className,
      rootClassName,
      listing,
      onListingClicked,
      intl,
      isActive,
      config,
    } = this.props;
    const currentListing = ensureListing(listing);
    const { price, publicData, title } = currentListing.attributes;

    // @r7avi - Get listing type for aria label
    const listingType = publicData?.listingType || 'listing';

    const classes = classNames(rootClassName || css.root, className);
    const pinClasses = classNames(css.mapPin, {
      [css.mapPinActive]: isActive,
    });

    const ariaLabel = intl.formatMessage(
      { id: 'SearchMapPriceLabel.screenreader.mapMarker' },
      { title: title || listingType }
    );

    return (
      <button
        className={classes}
        onClick={() => onListingClicked(currentListing)}
        aria-label={ariaLabel}
      >
        {/* @r7avi - Google Maps style pin icon - smaller size */}
        <svg
          className={pinClasses}
          width="24"
          height="30"
          viewBox="0 0 32 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0C7.163 0 0 7.163 0 16c0 12 16 24 16 24s16-12 16-24c0-8.837-7.163-16-16-16z"
            className={css.pinFill}
          />
          <circle cx="16" cy="16" r="6" fill="white" />
        </svg>
      </button>
    );
  }
}

export default injectIntl(SearchMapPriceLabel);
