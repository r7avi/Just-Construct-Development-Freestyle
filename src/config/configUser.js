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
// @r7avi - Civil Contractors & Engineers Marketplace - User Fields Configuration
export const userFields = [
  // @r7avi - Phone field handled separately by UserFieldPhoneNumber component
  {
    key: 'state',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'andhra-pradesh', label: 'Andhra Pradesh' },
      { option: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
      { option: 'assam', label: 'Assam' },
      { option: 'bihar', label: 'Bihar' },
      { option: 'chhattisgarh', label: 'Chhattisgarh' },
      { option: 'goa', label: 'Goa' },
      { option: 'gujarat', label: 'Gujarat' },
      { option: 'haryana', label: 'Haryana' },
      { option: 'himachal-pradesh', label: 'Himachal Pradesh' },
      { option: 'jharkhand', label: 'Jharkhand' },
      { option: 'karnataka', label: 'Karnataka' },
      { option: 'kerala', label: 'Kerala' },
      { option: 'madhya-pradesh', label: 'Madhya Pradesh' },
      { option: 'maharashtra', label: 'Maharashtra' },
      { option: 'manipur', label: 'Manipur' },
      { option: 'meghalaya', label: 'Meghalaya' },
      { option: 'mizoram', label: 'Mizoram' },
      { option: 'nagaland', label: 'Nagaland' },
      { option: 'odisha', label: 'Odisha' },
      { option: 'punjab', label: 'Punjab' },
      { option: 'rajasthan', label: 'Rajasthan' },
      { option: 'sikkim', label: 'Sikkim' },
      { option: 'tamil-nadu', label: 'Tamil Nadu' },
      { option: 'telangana', label: 'Telangana' },
      { option: 'tripura', label: 'Tripura' },
      { option: 'uttar-pradesh', label: 'Uttar Pradesh' },
      { option: 'uttarakhand', label: 'Uttarakhand' },
      { option: 'west-bengal', label: 'West Bengal' },
      { option: 'delhi', label: 'Delhi' },
    ],
    userTypeConfig: {
      limitToUserTypeIds: false,
    },
    showConfig: {
      label: 'State',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'State',
      placeholderMessage: 'Select state',
      displayInSignUp: true,
      isRequired: true,
      requiredMessage: 'Please select your state',
    },
  },
  {
    key: 'city',
    scope: 'public',
    schemaType: 'short-text',
    userTypeConfig: {
      limitToUserTypeIds: false,
    },
    showConfig: {
      label: 'City',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'City',
      placeholderMessage: 'Enter city',
      displayInSignUp: true,
      isRequired: true,
      requiredMessage: 'Please enter your city',
    },
  },
  {
    key: 'address',
    scope: 'public',
    schemaType: 'text',
    userTypeConfig: {
      limitToUserTypeIds: false,
    },
    showConfig: {
      label: 'Address',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'Address',
      placeholderMessage: 'Enter your address',
      displayInSignUp: true,
      isRequired: true,
      requiredMessage: 'Please enter your address',
    },
  },
  {
    key: 'pincode',
    scope: 'public',
    schemaType: 'long',
    minimum: 100000,
    maximum: 999999,
    userTypeConfig: {
      limitToUserTypeIds: false,
    },
    showConfig: {
      label: 'Pincode',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'Pincode',
      placeholderMessage: 'Enter 6-digit pincode',
      displayInSignUp: true,
      isRequired: true,
      requiredMessage: 'Please enter your pincode',
    },
  },
  {
    key: 'is-civil-engineer',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'yes', label: 'Yes' },
      { option: 'no', label: 'No' },
    ],
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['customer'],
    },
    showConfig: {
      label: 'Are you a Civil Engineer?',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'Are you a Civil Engineer?',
      placeholderMessage: 'Select...',
      displayInSignUp: true,
      isRequired: false,
    },
  },
  {
    key: 'engineer-grade',
    scope: 'public',
    schemaType: 'short-text',
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['customer'],
    },
    showConfig: {
      label: 'Engineer Grade/License',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'Engineer Grade/License Number',
      placeholderMessage: 'Enter your grade or license number',
      displayInSignUp: true,
      isRequired: false,
      // @r7avi - This field will be conditionally shown in SignupForm based on is-civil-engineer value
    },
  },
  {
    key: 'provider-type',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'skilled-worker', label: 'Skilled Worker' },
      { option: 'civil-contractor', label: 'Civil Contractor' },
      { option: 'construction-company', label: 'Construction Company' },
      { option: 'civil-engineer', label: 'Civil Engineer' },
      { option: 'architect', label: 'Architect' },
      { option: 'interior-designer', label: 'Interior Designer' },
    ],
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
    showConfig: {
      label: 'Provider Type',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'What type of service do you provide?',
      placeholderMessage: 'Select provider type',
      displayInSignUp: true,
      isRequired: true,
      requiredMessage: 'Please select your provider type',
    },
  },
  {
    key: 'skilled-worker-category',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'plumbing', label: 'Plumbing' },
      { option: 'electrical', label: 'Electrical' },
      { option: 'painting', label: 'Painting' },
      { option: 'carpentry', label: 'Carpentry' },
      { option: 'hvac', label: 'HVAC' },
      { option: 'roofing', label: 'Roofing' },
      { option: 'masonry', label: 'Masonry' },
      { option: 'welding', label: 'Welding' },
    ],
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
    showConfig: {
      label: 'Skilled Worker Category',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'Skilled Worker Category (if applicable)',
      placeholderMessage: 'Select your specialty',
      displayInSignUp: true,
      isRequired: false,
    },
  },
  {
    key: 'gst-number',
    scope: 'private',
    schemaType: 'short-text',
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
    showConfig: {
      label: 'GST Number',
      displayInProfile: false,
    },
    saveConfig: {
      label: 'GST Number',
      placeholderMessage: 'Enter GST number (if applicable)',
      displayInSignUp: true,
      isRequired: false,
    },
  },
  {
    key: 'company-name',
    scope: 'public',
    schemaType: 'short-text',
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
    showConfig: {
      label: 'Company Name',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'Company Name (if applicable)',
      placeholderMessage: 'Enter company name',
      displayInSignUp: true,
      isRequired: false,
    },
  },
  {
    key: 'registration-number',
    scope: 'private',
    schemaType: 'short-text',
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
    showConfig: {
      label: 'Registration Number',
      displayInProfile: false,
    },
    saveConfig: {
      label: 'Business Registration Number (if applicable)',
      placeholderMessage: 'Enter registration number',
      displayInSignUp: true,
      isRequired: false,
    },
  },
  {
    key: 'professional-license',
    scope: 'public',
    schemaType: 'short-text',
    userTypeConfig: {
      limitToUserTypeIds: true,
      userTypeIds: ['provider'],
    },
    showConfig: {
      label: 'Professional License Number',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'Professional License Number (if applicable)',
      placeholderMessage: 'Enter license number',
      displayInSignUp: true,
      isRequired: false,
    },
  },
  {
    key: 'bio',
    scope: 'public',
    schemaType: 'text',
    userTypeConfig: {
      limitToUserTypeIds: false,
    },
    showConfig: {
      label: 'Bio',
      displayInProfile: true,
    },
    saveConfig: {
      label: 'Bio / About',
      placeholderMessage: 'Tell us about yourself or your company',
      displayInSignUp: false,
      isRequired: false,
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

// @r7avi - Civil Contractors & Engineers Marketplace - User Types Configuration
export const userTypes = [
  {
    userType: 'customer',
    label: 'Customer',
    // @r7avi - Enable phone number in signup
    phoneNumberSettings: {
      displayInSignUp: true,
      required: true,
    },
  },
  {
    userType: 'provider',
    label: 'Provider',
    // @r7avi - Enable phone number in signup
    phoneNumberSettings: {
      displayInSignUp: true,
      required: true,
    },
  },
];
