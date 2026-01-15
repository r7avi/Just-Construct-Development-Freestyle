import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import classNames from 'classnames';

import { FormattedMessage, useIntl } from '../../../util/reactIntl';
import { propTypes } from '../../../util/types';
import * as validators from '../../../util/validators';
import { getPropsForCustomUserFieldInputs } from '../../../util/userHelpers';

import { Form, PrimaryButton, FieldTextInput, CustomExtendedDataField, FieldPhoneNumberInput, FieldSelect } from '../../../components';

import FieldSelectUserType from '../FieldSelectUserType';
import UserFieldDisplayName from '../UserFieldDisplayName';
import UserFieldPhoneNumber from '../UserFieldPhoneNumber';

import css from './SignupForm.module.css';

const getSoleUserTypeMaybe = userTypes =>
  Array.isArray(userTypes) && userTypes.length === 1 ? userTypes[0].userType : null;

const isPasswordUsedMoreThanOnce = formValues => {
  const pw = formValues.password;
  const hasPasswordString = pw != null && pw.length >= validators.PASSWORD_MIN_LENGTH;

  if (hasPasswordString) {
    const isPasswordRepeated = Object.values(formValues).filter(v => v === pw).length > 1;
    return isPasswordRepeated;
  }
  return false;
};

const SignupFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    initialValues={{ userType: props.preselectedUserType || getSoleUserTypeMaybe(props.userTypes) }}
    render={formRenderProps => {
      const {
        rootClassName,
        className,
        formId,
        handleSubmit,
        inProgress,
        invalid,
        intl,
        termsAndConditions,
        preselectedUserType,
        userTypes,
        userFields,
        values,
      } = formRenderProps;

      const { userType } = values || {};

      // email
      const emailRequired = validators.required(
        intl.formatMessage({
          id: 'SignupForm.emailRequired',
        })
      );
      const emailValid = validators.emailFormatValid(
        intl.formatMessage({
          id: 'SignupForm.emailInvalid',
        })
      );

      // password
      const passwordRequiredMessage = intl.formatMessage({
        id: 'SignupForm.passwordRequired',
      });
      const passwordMinLengthMessage = intl.formatMessage(
        {
          id: 'SignupForm.passwordTooShort',
        },
        {
          minLength: validators.PASSWORD_MIN_LENGTH,
        }
      );
      const passwordMaxLengthMessage = intl.formatMessage(
        {
          id: 'SignupForm.passwordTooLong',
        },
        {
          maxLength: validators.PASSWORD_MAX_LENGTH,
        }
      );
      const passwordMinLength = validators.minLength(
        passwordMinLengthMessage,
        validators.PASSWORD_MIN_LENGTH
      );
      const passwordMaxLength = validators.maxLength(
        passwordMaxLengthMessage,
        validators.PASSWORD_MAX_LENGTH
      );
      const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);
      const passwordValidators = validators.composeValidators(
        passwordRequired,
        passwordMinLength,
        passwordMaxLength
      );

      // Custom user fields. Since user types are not supported here,
      // only fields with no user type id limitation are selected.
      const userFieldProps = getPropsForCustomUserFieldInputs(userFields, intl, userType);

      const noUserTypes = !userType && !(userTypes?.length > 0);
      const userTypeConfig = userTypes.find(config => config.userType === userType);
      const showDefaultUserFields = userType || noUserTypes;
      const showCustomUserFields = (userType || noUserTypes) && userFieldProps?.length > 0;

      const classes = classNames(rootClassName || css.root, className);
      const submitInProgress = inProgress;
      const submitDisabled = invalid || submitInProgress || isPasswordUsedMoreThanOnce(values);

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          <FieldSelectUserType
            name="userType"
            userTypes={userTypes}
            hasExistingUserType={!!preselectedUserType}
            intl={intl}
          />

          {showDefaultUserFields ? (
            <div className={css.defaultUserFields}>
              <FieldTextInput
                type="email"
                id={formId ? `${formId}.email` : 'email'}
                name="email"
                autoComplete="email"
                label={intl.formatMessage({
                  id: 'SignupForm.emailLabel',
                })}
                placeholder={intl.formatMessage({
                  id: 'SignupForm.emailPlaceholder',
                })}
                validate={validators.composeValidators(emailRequired, emailValid)}
              />
              <div className={css.name}>
                <FieldTextInput
                  className={css.firstNameRoot}
                  type="text"
                  id={formId ? `${formId}.fname` : 'fname'}
                  name="fname"
                  autoComplete="given-name"
                  label={intl.formatMessage({
                    id: 'SignupForm.firstNameLabel',
                  })}
                  placeholder={intl.formatMessage({
                    id: 'SignupForm.firstNamePlaceholder',
                  })}
                  validate={validators.required(
                    intl.formatMessage({
                      id: 'SignupForm.firstNameRequired',
                    })
                  )}
                />
                <FieldTextInput
                  className={css.lastNameRoot}
                  type="text"
                  id={formId ? `${formId}.lname` : 'lname'}
                  name="lname"
                  autoComplete="family-name"
                  label={intl.formatMessage({
                    id: 'SignupForm.lastNameLabel',
                  })}
                  placeholder={intl.formatMessage({
                    id: 'SignupForm.lastNamePlaceholder',
                  })}
                  validate={validators.required(
                    intl.formatMessage({
                      id: 'SignupForm.lastNameRequired',
                    })
                  )}
                />
              </div>

              <UserFieldDisplayName
                formName="SignupForm"
                className={css.row}
                userTypeConfig={userTypeConfig}
                intl={intl}
              />

              <FieldTextInput
                className={css.password}
                type="password"
                id={formId ? `${formId}.password` : 'password'}
                name="password"
                autoComplete="new-password"
                label={intl.formatMessage({
                  id: 'SignupForm.passwordLabel',
                })}
                placeholder={intl.formatMessage({
                  id: 'SignupForm.passwordPlaceholder',
                })}
                validate={passwordValidators}
              />


              {/* @r7avi: Custom Phone Number Input with India Flag/Prefix and strict 10-digit validation */}
              <div className={css.phone}>
                <label className={css.phoneLabel} htmlFor={formId ? `${formId}.phone` : 'phone'}>
                  {intl.formatMessage({ id: 'SignupForm.phoneNumberLabel' })}
                </label>
                <div className={css.phoneWrapper}>
                  <span className={css.phonePrefix}>🇮🇳 +91</span>
                  <FieldTextInput
                    className={css.phoneInput}
                    type="text"
                    id={formId ? `${formId}.phone` : 'phone'}
                    name={userType === 'customer' ? 'prot_phone' : 'pub_phone'}
                    placeholder="10-digit mobile number"
                    validate={validators.composeValidators(
                      validators.required(
                        intl.formatMessage({ id: 'SignupForm.phoneNumberRequired' })
                      ),
                      value => {
                        if (value && !/^[0-9]{10}$/.test(value)) {
                          return 'Phone number must be exactly 10 digits';
                        }
                        return undefined;
                      }
                    )}
                    maxLength="10"
                    parse={value => {
                      // Remove non-numeric characters
                      return value ? value.replace(/\D/g, '').slice(0, 10) : value;
                    }}
                  />
                </div>
              </div>

              {/* Maintain existing UserFieldPhoneNumber but hidden via console configuration as requested */}
              <UserFieldPhoneNumber
                formName="SignupForm"
                className={css.row}
                userTypeConfig={userTypeConfig}
                intl={intl}
              />

              {/* @r7avi: Customer Specific Fields Logic */}
              {userType === 'customer' ? (
                <div className={css.customerFields}>
                  <FieldSelect
                    className={css.row}
                    name="pub_registrationPurpose"
                    id={formId ? `${formId}.registrationPurpose` : 'registrationPurpose'}
                    label="Registration Purpose"
                    validate={validators.required('Required')}
                  >
                    <option value="">Select purpose...</option>
                    <option value="standard">I want to hire professionals</option>
                    <option value="job_seeker">I am a Civil Engineer seeking work</option>
                  </FieldSelect>

                  {/* @r7avi: Conditional fields for Job Seeker */}
                  {values.pub_registrationPurpose === 'job_seeker' ? (
                    <>
                      <FieldTextInput
                        className={css.row}
                        type="text"
                        name="pub_designation"
                        id={formId ? `${formId}.designation` : 'designation'}
                        label="Current Designation/Title"
                        placeholder="e.g. Senior Site Engineer"
                        validate={validators.required('Required')}
                      />
                      <FieldTextInput
                        className={css.row}
                        type="number"
                        name="pub_experience"
                        id={formId ? `${formId}.experience` : 'experience'}
                        label="Years of Experience"
                        placeholder="e.g. 5"
                        validate={validators.required('Required')}
                        min="0"
                      />
                    </>
                  ) : null}
                </div>
              ) : null}

              {/* @r7avi: Provider Specific Fields Logic including Construction Company & Civil Contractor */}
              {userType === 'provider' ? (
                <div className={css.providerFields}>
                  <FieldSelect
                    className={css.row}
                    name="pub_providerCategory"
                    id={formId ? `${formId}.providerCategory` : 'providerCategory'}
                    label="Provider Category"
                    validate={validators.required('Required')}
                  >
                    <option value="">Select category...</option>
                    <option value="construction_company">Construction Company</option>
                    <option value="civil_contractor">Civil Contractor</option>
                    <option value="skilled_worker">Skilled Worker</option>
                  </FieldSelect>

                  {/* Construction Company: Company Name, GSTIN, PAN, Address */}
                  {values.pub_providerCategory === 'construction_company' ? (
                    <FieldTextInput
                      className={css.row}
                      type="text"
                      name="pub_companyName"
                      id={formId ? `${formId}.companyName` : 'companyName'}
                      label="Company Name"
                      placeholder="Enter company name"
                      validate={validators.required('Required')}
                    />
                  ) : null}

                  {/* Civil Contractor: Experience (Instead of Company Name), GSTIN, PAN, Address */}
                  {values.pub_providerCategory === 'civil_contractor' ? (
                    <FieldTextInput
                      className={css.row}
                      type="number"
                      name="pub_experience"
                      id={formId ? `${formId}.experience` : 'experience'}
                      label="Years of Experience"
                      placeholder="e.g. 5"
                      validate={validators.required('Required')}
                      min="0"
                    />
                  ) : null}

                  {/* @r7avi: Common Compliance Fields (GSTIN, PAN, Address) - Optional & Validated */}
                  {['construction_company', 'civil_contractor'].includes(values.pub_providerCategory) ? (
                    <>
                      <FieldTextInput
                        className={css.row}
                        type="text"
                        name="pub_gstin"
                        id={formId ? `${formId}.gstin` : 'gstin'}
                        label="GSTIN (Optional)"
                        placeholder="15-character GSTIN"
                        parse={value => (value ? value.toUpperCase() : value)}
                        validate={validators.composeValidators(
                          value => {
                            if (value && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)) {
                              return 'Invalid GSTIN format (e.g., 22AAAAA0000A1Z5)';
                            }
                            return undefined;
                          }
                        )}
                        maxLength="15"
                      />
                      <FieldTextInput
                        className={css.row}
                        type="text"
                        name="prot_pan"
                        id={formId ? `${formId}.pan` : 'pan'}
                        label="PAN Number (Optional)"
                        placeholder="10-character PAN"
                        parse={value => (value ? value.toUpperCase() : value)}
                        validate={validators.composeValidators(
                          value => {
                            if (value && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
                              return 'Invalid PAN format (e.g., ABCDE1234F)';
                            }
                            return undefined;
                          }
                        )}
                        maxLength="10"
                      />
                      <FieldTextInput
                        className={css.row}
                        type="textarea"
                        name="pub_registeredOfficeAddress"
                        id={formId ? `${formId}.registeredOfficeAddress` : 'registeredOfficeAddress'}
                        label="Registered Office Address"
                        placeholder="Enter full address"
                        validate={validators.required('Required')}
                      />
                    </>
                  ) : null}

                  {values.pub_providerCategory === 'skilled_worker' ? (
                    <FieldSelect
                      className={css.row}
                      name="pub_trade"
                      id={formId ? `${formId}.trade` : 'trade'}
                      label="Trade/Skill"
                      validate={validators.required('Required')}
                    >
                      <option value="">Select trade...</option>
                      <option value="painter">Painter</option>
                      <option value="electrician">Electrician</option>
                      <option value="plumber">Plumber</option>
                      <option value="carpenter">Carpenter</option>
                      <option value="mason">Mason</option>
                      <option value="welder">Welder</option>
                      <option value="helper">Helper</option>
                    </FieldSelect>
                  ) : null}
                </div>
              ) : null}

            </div>
          ) : null}

          <div className={css.bottomWrapper}>
            {termsAndConditions}
            {isPasswordUsedMoreThanOnce(values) ? (
              <div className={css.error}>
                <FormattedMessage id="SignupForm.passwordRepeatedOnOtherFields" />
              </div>
            ) : null}
            <PrimaryButton type="submit" inProgress={submitInProgress} disabled={submitDisabled}>
              <FormattedMessage id="SignupForm.signUp" />
            </PrimaryButton>
          </div>
        </Form>
      );
    }}
  />
);

/**
 * A component that renders the signup form.
 *
 * @component
 * @param {Object} props
 * @param {string} props.rootClassName - The root class name that overrides the default class css.root
 * @param {string} props.className - The class that extends the root class
 * @param {string} props.formId - The form id
 * @param {boolean} props.inProgress - Whether the form is in progress
 * @param {ReactNode} props.termsAndConditions - The terms and conditions
 * @param {string} props.preselectedUserType - The preselected user type
 * @param {propTypes.userTypes} props.userTypes - The user types
 * @param {propTypes.listingFields} props.userFields - The user fields
 * @returns {JSX.Element}
 */
const SignupForm = props => {
  const intl = useIntl();
  return <SignupFormComponent {...props} intl={intl} />;
};

export default SignupForm;
