import React from 'react';
import classNames from 'classnames';
import { Field } from 'react-final-form';

import { intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import * as validators from '../../util/validators';

import { FieldPhoneNumberInput } from '../../components';

// @r7avi - Indian phone number validation
const validateIndianPhone = message => value => {
  if (!value) return undefined;
  
  // Remove +91, spaces, and hyphens
  const cleaned = value.replace(/^\+91[-\s]?/, '').replace(/[-\s]/g, '');
  
  // Check if it's exactly 10 digits and starts with 6-9
  const isValid = /^[6-9]\d{9}$/.test(cleaned);
  
  return isValid ? undefined : message;
};

/**
 * A component that renders the phone number field.
 *
 * @component
 * @param {Object} props
 * @param {string} props.rootClassName - The root class name that overrides the default class css.phoneNumber
 * @param {string} props.className - The class that extends the root class
 * @param {string} props.formId - The form id
 * @param {string} props.formName - The form name
 * @param {propTypes.userType} props.userTypeConfig - The user type config
 * @param {intlShape} props.intl - The intl object
 * @returns {JSX.Element}
 */
const UserFieldPhoneNumber = props => {
  const { rootClassName, className, formId, formName, userTypeConfig, intl } = props;

  const { displayInSignUp, required } = userTypeConfig?.phoneNumberSettings || {};
  const isDisabled = userTypeConfig?.defaultUserFields?.phoneNumber === false;
  const isAllowedInSignUp = displayInSignUp === true;

  if (isDisabled || !isAllowedInSignUp) {
    return null;
  }

  const isRequired = required === true;
  
  // @r7avi - Add Indian phone validation
  const phoneValidators = isRequired
    ? validators.composeValidators(
        validators.required(
          intl.formatMessage({
            id: `${formName}.phoneNumberRequired`,
          })
        ),
        validateIndianPhone(
          intl.formatMessage({
            id: `${formName}.phoneNumberInvalid`,
          }, { default: 'Please enter a valid 10-digit Indian mobile number' })
        )
      )
    : validateIndianPhone(
        intl.formatMessage({
          id: `${formName}.phoneNumberInvalid`,
        }, { default: 'Please enter a valid 10-digit Indian mobile number' })
      );

  return (
    <FieldPhoneNumberInput
      className={classNames(className, { [rootClassName]: !!rootClassName })}
      type="tel"
      id={formId ? `${formId}.phoneNumber` : 'phoneNumber'}
      name="phoneNumber"
      label={intl.formatMessage({
        id: `${formName}.phoneNumberLabel`,
      })}
      placeholder="+91-XXXXXXXXXX"
      validate={phoneValidators}
    />
  );
};

export default UserFieldPhoneNumber;
