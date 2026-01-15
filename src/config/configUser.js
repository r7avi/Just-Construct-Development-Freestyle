/////////////////////////////////////////////////////////
// Configurations related to user.                     //
/////////////////////////////////////////////////////////

// Note: The userFields come from userFields asset nowadays by default.
//       To use this built-in configuration, you need to change the overwrite from configHelper.js
//       (E.g. use mergeDefaultTypesAndFieldsForDebugging func)

/**
 * Configuration options for user fields (custom extended data fields):
 * - key:                           Unique key for the extended data field.
 * - scope (optional):              Scope of the extended data can be either 'public', 'protected', or 'private'.
 *                                  Default value: 'public'.
 * - schemaType (optional):         Schema for this extended data field.
 *                                  This is relevant when rendering components.
 *                                  Possible values: 'enum', 'multi-enum', 'text', 'long', 'boolean'.
 * - enumOptions (optional):        Options shown for 'enum' and 'multi-enum' extended data.
 *                                  These are used to render options for inputs on
 *                                  ProfileSettingsPage and AuthenticationPage.
 * - showConfig:                    Configuration for rendering user information. (How the field should be shown.)
 *   - label:                         Label for the saved data.
 *   - displayInProfile (optional):   Can be used to hide field content from profile page.
 *                                    Default value: true.
 * - saveConfig:                    Configuration for adding and modifying extended data fields.
 *   - label:                         Label for the input field.
 *   - placeholderMessage (optional): Default message for user input.
 *   - isRequired (optional):         Is the field required for users to fill
 *   - requiredMessage (optional):    Message for mandatory fields.
 *   - displayInSignUp (optional):    Can be used to show field input on sign up page.
 *                                    Default value: true.
 * - userTypeConfig:                Configuration for limiting user field to specific user types.
 *   - limitToUserTypeIds:            Can be used to determine whether to limit the field to certain user types. The
 *                                    Console based asset configurations do not yet support user types, so in hosted configurations
 *                                    the default value for this is 'false'.
 *   - userTypeIds:                   An array of user types for which the extended
 *   (optional)                       data is relevant and should be added.
 */
export const userFields = [
  // existing fields can be kept or removed as needed, replacing with new requirements

  // @r7avi: Split phone configuration to handle different scopes for Customer (protected) and Provider (public)
  {
    key: 'phone',
    scope: 'protected',
    schemaType: 'text',
    saveConfig: {
      label: 'Phone Number',
      displayInSignUp: true,
      isRequired: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['customer'],
    },
  },
  {
    key: 'phone',
    scope: 'public',
    schemaType: 'text',
    saveConfig: {
      label: 'Phone Number',
      displayInSignUp: true,
      isRequired: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
  },

  // @r7avi: Added custom fields for Customer and Provider flows
  {
    key: 'registrationPurpose',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'standard', label: 'I want to hire professionals' },
      { option: 'job_seeker', label: 'I am a Civil Engineer seeking work' },
    ],
    saveConfig: {
      label: 'Registration Purpose',
      displayInSignUp: true,
      isRequired: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['customer'],
    },
  },
  {
    key: 'designation',
    scope: 'public',
    schemaType: 'text',
    saveConfig: {
      label: 'Current Designation/Title',
      displayInSignUp: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['customer'],
    },
  },
  {
    key: 'experience',
    scope: 'public',
    schemaType: 'long',
    saveConfig: {
      label: 'Years of Experience',
      displayInSignUp: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['customer', 'provider'], // @r7avi: Enabled for Provider (Civil Contractor) as well
    },
  },
  {
    key: 'providerCategory',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'construction_company', label: 'Construction Company' },
      { option: 'civil_contractor', label: 'Civil Contractor' },
      { option: 'skilled_worker', label: 'Skilled Worker' },
    ],
    saveConfig: {
      label: 'Provider Category',
      displayInSignUp: true,
      isRequired: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
  },
  {
    key: 'companyName',
    scope: 'public',
    schemaType: 'text',
    saveConfig: {
      label: 'Company Name',
      displayInSignUp: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
  },
  {
    key: 'gstin',
    scope: 'public',
    schemaType: 'text',
    saveConfig: {
      label: 'GSTIN',
      displayInSignUp: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
  },
  {
    key: 'pan',
    scope: 'protected',
    schemaType: 'text',
    saveConfig: {
      label: 'PAN Number',
      displayInSignUp: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
  },
  {
    key: 'registeredOfficeAddress',
    scope: 'public',
    schemaType: 'text',
    saveConfig: {
      label: 'Registered Office Address',
      displayInSignUp: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
  },
  {
    key: 'trade',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'painter', label: 'Painter' },
      { option: 'electrician', label: 'Electrician' },
      { option: 'plumber', label: 'Plumber' },
      { option: 'carpenter', label: 'Carpenter' },
      { option: 'mason', label: 'Mason' },
      { option: 'welder', label: 'Welder' },
      { option: 'helper', label: 'Helper' },
    ],
    saveConfig: {
      label: 'Trade/Skill',
      displayInSignUp: true,
    },
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
  },
];

/////////////////////////////////////
// Example user type configuration //
/////////////////////////////////////
/**
 * User types are not supported in hosted configuration yet.
 *
 * To take user types into use in your
 * custom code, you can do the following things:
 * - Add a new user field with key 'userType', scope 'publicData', and schemaType enum
 *  - Consider whether or not you want to allow your users to change their user type after first creating it
 * - Set your user types as the available options for the userType field
 * - Add your user types in the array below
 * - Update configHelpers.js mergeUserConfig to pass user types to the validUserFields function
 */

export const userTypes = [
  {
    userType: 'customer',
    label: 'Customer',
  },
  {
    userType: 'provider',
    label: 'Provider',
  },
];
