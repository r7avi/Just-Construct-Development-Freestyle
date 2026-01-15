
import {
  LISTING_STATE_DRAFT,
  LISTING_STATE_PENDING_APPROVAL,
  LISTING_STATE_PUBLISHED,
  LISTING_STATE_CLOSED,
} from '../util/types';

////////////////////////////////////////////////////////////
// Configurations related to listing                      //
////////////////////////////////////////////////////////////

/**
 * Configuration options for listing fields (custom extended data fields):
 * - key:                           Unique key for the extended data field.
 * - scope (optional):              Scope of the extended data can be either 'public' or 'private'.
 *                                  Default value: 'public'.
 * - schemaType (optional):         Schema for this extended data field.
 *                                  This is relevant when rendering components.
 *                                  Possible values: 'enum', 'multi-enum', 'text', 'long', 'boolean'.
 * - enumOptions (optional):        Options shown for 'enum' and 'multi-enum' extended data.
 *                                  These are used to render options for inputs on
 *                                  EditListingPage, LandingPage, and SearchPage.
 * - filterConfig:                  Configuration to add a filter for this field to SearchPage.
 *   - indexForSearch:                Whether to index the field for search.
 *   - label:                         Label for the filter.
 *   - group:                         Group for the filter (primary or secondary).
 * - showConfig:                    Configuration for rendering listing information. (How the field should be shown.)
 *   - label:                         Label for the saved data.
 *   - isDetail (optional):           Can be used to hide field content from listing page.
 *                                    Default value: true.
 * - saveConfig:                    Configuration for adding and modifying extended data fields.
 *   - label:                         Label for the input field.
 *   - placeholderMessage (optional): Default message for user input.
 *   - isRequired (optional):         Is the field required for users to fill
 *   - requiredMessage (optional):    Message for those fields, which are mandatory.
 */
export const listingFields = [
  // Common Fields
  {
    key: 'pincode',
    scope: 'public',
    schemaType: 'text',
    filterConfig: {
      indexForSearch: true,
      label: 'Pincode',
      group: 'primary',
    },
    saveConfig: {
      label: 'Pincode',
      placeholderMessage: 'Enter 6-digit Pincode',
      isRequired: true,
      requiredMessage: 'Pincode is required.',
    },
    showConfig: {
      label: 'Pincode',
    },
  },
  {
    key: 'city',
    scope: 'public',
    schemaType: 'text',
    filterConfig: {
      indexForSearch: true,
      label: 'City',
      group: 'primary',
    },
    saveConfig: {
      label: 'City',
      placeholderMessage: 'Enter City',
      isRequired: true,
      requiredMessage: 'City is required.',
    },
    showConfig: {
      label: 'City',
    },
  },
  {
    key: 'type',
    scope: 'public',
    schemaType: 'text',
    showConfig: {
      label: 'Business Type',
    },
  },
  {
    key: 'address',
    scope: 'public',
    schemaType: 'text',
    showConfig: {
      label: 'Address',
    },
  },
  {
    key: 'googleLink',
    scope: 'public',
    schemaType: 'text',
    showConfig: {
      label: 'Google Link',
    },
  },

  // =================================================================
  // CUSTOMER ONLY FIELDS
  // =================================================================

  // Hire Requirement Fields
  {
    key: 'hiring_for',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'civil_engineer', label: 'Civil Engineer' },
      { option: 'skilled_worker', label: 'Skilled Worker' },
      { option: 'contractor', label: 'Civil Contractor' },
      { option: 'construction_company', label: 'Construction Company' },
      { option: 'interior_designer', label: 'Interior Designer' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['hire-requirement'],
    },
    filterConfig: {
      indexForSearch: true,
      label: 'Hiring For',
      group: 'primary',
    },
    saveConfig: {
      label: 'Who do you want to hire?',
      isRequired: true,
    },
    showConfig: {
      label: 'Hiring For',
    },
  },
  {
    key: 'phone_private',
    scope: 'private',
    schemaType: 'text',
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['hire-requirement'],
    },
    saveConfig: {
      label: 'Phone Number',
      placeholderMessage: '10-digit mobile number',
      isRequired: true,
      requiredMessage: 'Phone number is required.',
    },
  },
  // Conditional Skills/Services Fields based on 'hiring_for' selection
  {
    key: 'hiring_skills_worker', // Shown when hiring_for = 'skilled_worker'
    scope: 'public',
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'mason', label: 'Mason / Mistri' },
      { option: 'plumber', label: 'Plumber' },
      { option: 'electrician', label: 'Electrician' },
      { option: 'carpenter', label: 'Carpenter' },
      { option: 'painter', label: 'Painter' },
      { option: 'welder', label: 'Welder' },
      { option: 'bar_bender', label: 'Bar Bender / Fitter' },
      { option: 'helper', label: 'Helper / Labor' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['hire-requirement'],
    },
    saveConfig: {
      label: 'Specific Skills Needed',
      placeholderMessage: 'Select skills...',
    },
    showConfig: {
      label: 'Specific Skills Needed',
    },
  },
  {
    key: 'hiring_skills_engineer', // Shown when hiring_for = 'civil_engineer'
    scope: 'public',
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'structural_design', label: 'Structural Design' },
      { option: 'site_supervision', label: 'Site Supervision' },
      { option: 'project_management', label: 'Project Management' },
      { option: 'estimating_costing', label: 'Estimating & Costing' },
      { option: 'surveying', label: 'Surveying' },
      { option: 'interior_planning', label: 'Interior Planning' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['hire-requirement'],
    },
    saveConfig: {
      label: 'Engineering Services Needed',
      placeholderMessage: 'Select services...',
    },
    showConfig: {
      label: 'Engineering Services Needed',
    },
  },
  {
    key: 'hiring_skills_contractor', // Shown when hiring_for = 'contractor' OR 'construction_company'
    scope: 'public',
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'turnkey_construction', label: 'Turnkey Construction (Material + Labor)' },
      { option: 'labor_contract', label: 'Labor Contract Only' },
      { option: 'renovation_services', label: 'Renovation Services' },
      { option: 'material_supply', label: 'Material Supply' },
      { option: 'equipment_rental', label: 'Equipment Rental' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['hire-requirement'],
    },
    saveConfig: {
      label: 'Contracting Services Needed',
      placeholderMessage: 'Select services...',
    },
    showConfig: {
      label: 'Contracting Services Needed',
    },
  },
  {
    key: 'hiring_skills_interior', // Shown when hiring_for = 'interior_designer'
    scope: 'public',
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'full_home_design', label: 'Full Home Interior Design' },
      { option: 'kitchen_wardrobe', label: 'Modular Kitchen & Wardrobes' },
      { option: 'design_consultation', label: 'Design Consultation Only' },
      { option: 'turnkey_execution', label: 'Turnkey Execution' },
      { option: 'commercial_interiors', label: 'Commercial Interiors' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['hire-requirement'],
    },
    saveConfig: {
      label: 'Interior Design Services Needed',
      placeholderMessage: 'Select services...',
    },
    showConfig: {
      label: 'Interior Design Services Needed',
    },
  },
  {
    key: 'project_type',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'residential_new', label: 'New Residential Construction' },
      { option: 'commercial_new', label: 'New Commercial Construction' },
      { option: 'renovation', label: 'Renovation / Repair' },
      { option: 'maintenance', label: 'Maintenance' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['hire-requirement'],
    },
    saveConfig: {
      label: 'Project Type',
      isRequired: true,
    },
    showConfig: {
      label: 'Project Type',
    },
  },
  {
    key: 'timeline_urgency',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'immediate', label: 'Immediate (Within 1 Week)' },
      { option: 'one_month', label: 'Within 1 Month' },
      { option: 'three_months', label: 'Usually (1-3 Months)' },
      { option: 'planning', label: 'Just Planning (Future)' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['hire-requirement'],
    },
    saveConfig: {
      label: 'When do you need this?',
      isRequired: true,
    },
    showConfig: {
      label: 'Timeline / Urgency',
    },
  },

  // Register Civil Engineer Fields
  {
    key: 'qualification',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'btech_civil', label: 'B.Tech Civil Engineering' },
      { option: 'mtech_structural', label: 'M.Tech Structural' },
      { option: 'mtech_construction', label: 'M.Tech Construction Management' },
      { option: 'diploma_civil', label: 'Diploma in Civil Engineering' },
      { option: 'phd_civil', label: 'PhD in Civil Engineering' },
      { option: 'other', label: 'Other/Related' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['register-civil-engineer'],
    },
    filterConfig: {
      indexForSearch: true,
      label: 'Qualification',
      group: 'primary',
    },
    saveConfig: {
      label: 'Highest Qualification',
      isRequired: true,
    },
    showConfig: {
      label: 'Highest Qualification',
    },
  },
  {
    key: 'specialization',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'structural', label: 'Structural Engineering' },
      { option: 'site_engineering', label: 'Site Engineering' },
      { option: 'geotechnical', label: 'Geotechnical' },
      { option: 'quantity_surveying', label: 'Quantity Surveying (QS)' },
      { option: 'project_management', label: 'Project Management' },
      { option: 'environmental', label: 'Environmental' },
      { option: 'transportation', label: 'Transportation' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['register-civil-engineer'],
    },
    saveConfig: {
      label: 'Area of Specialization',
      isRequired: true,
    },
    showConfig: {
      label: 'Area of Specialization',
    },
  },
  {
    key: 'software_skills',
    scope: 'public',
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'autocad', label: 'AutoCAD' },
      { option: 'revit', label: 'Revit' },
      { option: 'staadpro', label: 'STAAD.Pro' },
      { option: 'etabs', label: 'ETABS' },
      { option: 'msproject', label: 'MS Project' },
      { option: 'primavera', label: 'Primavera' },
      { option: 'sketchup', label: 'SketchUp' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['register-civil-engineer'],
    },
    saveConfig: {
      label: 'Software Skills',
      placeholderMessage: 'Select software you know...',
    },
    showConfig: {
      label: 'Software Skills',
    },
  },
  {
    key: 'experience_years',
    scope: 'public',
    schemaType: 'long',
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['register-civil-engineer', 'skilled-worker-listing', 'interior-designer-listing'],
    },
    filterConfig: {
      indexForSearch: true,
      label: 'Min Experience (Years)',
      group: 'primary',
    },
    saveConfig: {
      label: 'Experience (Years)',
      isRequired: true,
    },
  },

  // =================================================================
  // PROVIDER ONLY FIELDS
  // =================================================================

  // Construction Company & Contractor Common Fields
  {
    key: 'services_offered',
    scope: 'public',
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'civil_construction', label: 'Civil Construction' },
      { option: 'architecture', label: 'Architecture & Planning' },
      { option: 'interior_design', label: 'Interior Design' },
      { option: 'manpower_supply', label: 'Manpower Supply (Labor Contractor)' },
      { option: 'material_supply', label: 'Material Supply' },
      { option: 'renovation', label: 'Renovation & Repairs' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['construction-company-listing', 'civil-contractor-listing'],
    },
    filterConfig: {
      indexForSearch: true,
      label: 'Services',
      group: 'primary',
    },
    saveConfig: {
      label: 'Services Offered',
      placeholderMessage: 'Select all services you provide...',
      isRequired: true,
    },
    showConfig: {
      label: 'Services Offered',
    },
  },
  {
    key: 'manpower_supplied',
    scope: 'public',
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'mason', label: 'Mason / Mistri' },
      { option: 'plumber', label: 'Plumber' },
      { option: 'electrician', label: 'Electrician' },
      { option: 'carpenter', label: 'Carpenter' },
      { option: 'painter', label: 'Painter' },
      { option: 'welder', label: 'Welder' },
      { option: 'bar_bender', label: 'Bar Bender / Fitter' },
      { option: 'helper', label: 'Helper / Labor' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['construction-company-listing', 'civil-contractor-listing'], // Only show if they do Manpower Supply
    },
    filterConfig: {
      indexForSearch: true,
      label: 'Manpower Available',
      group: 'secondary',
    },
    saveConfig: {
      label: 'Types of Workers You Supply',
      placeholderMessage: 'Select worker types available...',
    },
    showConfig: {
      label: 'Types of Workers You Supply',
    },
  },

  // Construction Company Specific
  {
    key: 'company_reg_no',
    scope: 'public',
    schemaType: 'text',
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['construction-company-listing'],
    },
    saveConfig: {
      label: 'Company Registration Number (CIN/LLPIN)',
      isRequired: false,
    },
    showConfig: {
      label: 'Company Registration Number',
    },
  },
  {
    key: 'gstin',
    scope: 'public',
    schemaType: 'text',
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['construction-company-listing'],
    },
    saveConfig: {
      label: 'GSTIN',
      placeholderMessage: '15-digit GSTIN',
      isRequired: false,
    },
    showConfig: {
      label: 'GSTIN',
    },
  },
  {
    key: 'turnover_bracket',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'upto_1cr', label: 'Up to 1 Crore' },
      { option: '1_to_5cr', label: '1 - 5 Crore' },
      { option: '5_to_10cr', label: '5 - 10 Crore' },
      { option: 'above_10cr', label: 'Above 10 Crore' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['construction-company-listing'],
    },
    filterConfig: {
      indexForSearch: true,
      label: 'Turnover',
    },
    saveConfig: {
      label: 'Annual Turnover',
    },
    showConfig: {
      label: 'Annual Turnover',
    },
  },
  {
    key: 'projects_completed',
    scope: 'public',
    schemaType: 'long',
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['construction-company-listing'],
    },
    saveConfig: {
      label: 'Projects Completed',
    },
    showConfig: {
      label: 'Projects Completed',
    },
  },

  {
    key: 'website',
    scope: 'public',
    schemaType: 'text',
    showConfig: {
      label: 'Website',
    },
  },

  // Civil Contractor Specific
  {
    key: 'contractor_license_class',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'class_1_super', label: 'Class I / Super Class' },
      { option: 'class_2_a', label: 'Class II / A Class' },
      { option: 'class_3_b', label: 'Class III / B Class' },
      { option: 'class_4_c', label: 'Class IV / C Class' },
      { option: 'class_5_d', label: 'Class V / D Class' },
      { option: 'unregistered', label: 'Unregistered / Petite Contractor' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['civil-contractor-listing'],
    },
    filterConfig: {
      indexForSearch: true,
      label: 'License Class',
      group: 'primary',
    },
    saveConfig: {
      label: 'Contractor License Class',
      isRequired: true,
    },
    showConfig: {
      label: 'Contractor License Class',
    },
  },
  {
    key: 'registering_authority',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'cpwd', label: 'CPWD (Central)' },
      { option: 'state_pwd', label: 'State PWD' },
      { option: 'municipal', label: 'Municipal Corporation' },
      { option: 'railways', label: 'Indian Railways' },
      { option: 'other', label: 'Other/None' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['civil-contractor-listing'],
    },
    saveConfig: {
      label: 'Registering Authority',
    },
    showConfig: {
      label: 'Registering Authority',
    },
  },
  {
    key: 'labor_strength',
    scope: 'public',
    schemaType: 'long',
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['civil-contractor-listing'],
    },
    saveConfig: {
      label: 'Total Labor Strength',
      placeholderMessage: 'Approx. number of workers...',
    },
    showConfig: {
      label: 'Total Labor Strength',
    },
  },
  {
    key: 'phone_public',
    scope: 'public',
    schemaType: 'text',
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: [
        'construction-company-listing',
        'civil-contractor-listing',
        'interior-designer-listing',
        'skilled-worker-listing',
        'register-civil-engineer'
      ],
    },
    saveConfig: {
      label: 'Phone Number',
      placeholderMessage: '10-digit mobile number for clients to call',
      isRequired: true,
      requiredMessage: 'phone number is required.',
    },
    showConfig: {
      label: 'Phone',
    },
  },
  {
    key: 'machinery_owned',
    scope: 'public',
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'excavator', label: 'Excavator (JCB)' },
      { option: 'concrete_mixer', label: 'Concrete Mixer' },
      { option: 'vibrator', label: 'Vibrator' },
      { option: 'crane', label: 'Crane/Lift' },
      { option: 'road_roller', label: 'Road Roller' },
      { option: 'trucks', label: 'Tipper/Trucks' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['civil-contractor-listing'],
    },
    saveConfig: {
      label: 'Machinery Owned',
      placeholderMessage: 'Select machinery...',
    },
    showConfig: {
      label: 'Machinery Owned',
    },
  },

  // Interior Designer Specific
  {
    key: 'design_style',
    scope: 'public',
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'modern', label: 'Modern & Contemporary' },
      { option: 'minimalist', label: 'Minimalist' },
      { option: 'traditional', label: 'Traditional / Heritage' },
      { option: 'industrial', label: 'Industrial' },
      { option: 'bohemian', label: 'Bohemian' },
      { option: 'scandinavian', label: 'Scandinavian' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['interior-designer-listing'],
    },
    filterConfig: {
      indexForSearch: true,
      label: 'Design Styles',
      group: 'secondary',
    },
    saveConfig: {
      label: 'Design Styles',
      placeholderMessage: 'Select styles you specialize in...',
    },
    showConfig: {
      label: 'Design Styles',
    },
  },
  {
    key: 'service_scope',
    scope: 'public',
    schemaType: 'multi-enum',
    enumOptions: [
      { option: 'full_home', label: 'Full Home Interiors' },
      { option: 'kitchen_wardrobe', label: 'Modular Kitchen & Wardrobes' },
      { option: 'consultation_only', label: 'Design Consultation Only' },
      { option: 'turnkey', label: 'Turnkey Execution' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['interior-designer-listing'],
    },
    saveConfig: {
      label: 'Scope of Services',
    },
    showConfig: {
      label: 'Scope of Services',
    },
  },
  {
    key: 'council_reg_no',
    scope: 'public',
    schemaType: 'text',
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['interior-designer-listing', 'register-civil-engineer'], // Shared
    },
    saveConfig: {
      label: 'Council Registration No. (IIID/COA/IEI)',
      placeholderMessage: 'If applicable',
    },
    showConfig: {
      label: 'Council Registration No.',
    },
  },

  // Skilled Worker Specific
  {
    key: 'skill_type',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'mason', label: 'Mason / Mistri' },
      { option: 'plumber', label: 'Plumber' },
      { option: 'electrician', label: 'Electrician' },
      { option: 'carpenter', label: 'Carpenter' },
      { option: 'painter', label: 'Painter' },
      { option: 'welder', label: 'Welder' },
      { option: 'bar_bender', label: 'Bar Bender / Fitter' },
      { option: 'helper', label: 'Helper / Labor' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['skilled-worker-listing'],
    },
    filterConfig: {
      indexForSearch: true,
      label: 'Skill',
      group: 'primary',
    },
    saveConfig: {
      label: 'Primary Skill',
      isRequired: true,
    },
    showConfig: {
      label: 'Primary Skill',
    },
  },
  {
    key: 'number_of_workers',
    scope: 'public',
    schemaType: 'long',
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['skilled-worker-listing'],
    },
    saveConfig: {
      label: 'Number of Workers Available',
      placeholderMessage: 'If you have a team, how many?',
    },
    showConfig: {
      label: 'Number of Workers Available',
    },
  },
  {
    key: 'availability',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'immediate', label: 'Available Immediately' },
      { option: 'one_week', label: 'Available in 1 Week' },
      { option: 'booked', label: 'Currently Booked' },
    ],
    listingTypeConfig: {
      limitToListingTypeIds: true,
      listingTypeIds: ['skilled-worker-listing'],
    },
    saveConfig: {
      label: 'Current Availability',
    },
    showConfig: {
      label: 'Current Availability',
    },
  },
];

///////////////////////////////////////////////////////////////////////
// Listing types                                                     //
///////////////////////////////////////////////////////////////////////

/**
 * Configuration options for listing types:
 * - listingType:     Unique key for the listing type.
 * - label:           Label for the listing type.
 * - transactionType: Configuration for the transaction process.
 *   - process:         The name of the transaction process.
 *   - alias:           The alias of the transaction process.
 *   - unitType:        The unit type of the transaction process.
 * - defaultListingFields: Configuration for default listing fields.
 *   - location:        Whether to show the location field.
 *   - price:           Whether to show the price field.
 */
export const listingTypes = [
  // CUSTOMER LISTING TYPES
  {
    listingType: 'hire-requirement',
    label: 'Hire a Civil Engineer / Skilled Worker',
    transactionType: {
      process: 'default-negotiation',
      alias: 'default-negotiation/release-1',
      unitType: 'request',
    },
    defaultListingFields: {
      location: false, // Hidden for customers
      price: false,
      payoutDetails: false, // Customer pays, doesn't receive money
    },
  },
  {
    listingType: 'register-civil-engineer',
    label: 'Register as a Civil Engineer',
    transactionType: {
      process: 'default-negotiation',
      alias: 'default-negotiation/release-1',
      unitType: 'request', // Profile, so request is fine, or inquiry
    },
    defaultListingFields: {
      location: false, // Hidden/Optional (Profile-based)
      price: false,
      payoutDetails: false,
    },
  },

  // PROVIDER LISTING TYPES
  {
    listingType: 'construction-company-listing',
    label: 'Construction Company',
    transactionType: {
      process: 'default-negotiation',
      alias: 'default-negotiation/release-1',
      unitType: 'offer',
    },
    defaultListingFields: {
      location: true, // Visible for providers
      price: false,
      payoutDetails: false,
    },
  },
  {
    listingType: 'civil-contractor-listing',
    label: 'Civil Contractor',
    transactionType: {
      process: 'default-negotiation',
      alias: 'default-negotiation/release-1',
      unitType: 'offer',
    },
    defaultListingFields: {
      location: true,
      price: false,
      payoutDetails: false,
    },
  },
  {
    listingType: 'interior-designer-listing',
    label: 'Interior Designer',
    transactionType: {
      process: 'default-negotiation',
      alias: 'default-negotiation/release-1',
      unitType: 'offer',
    },
    defaultListingFields: {
      location: true,
      price: false,
      payoutDetails: false,
    },
  },
  {
    listingType: 'skilled-worker-listing',
    label: 'Skilled Worker',
    transactionType: {
      process: 'default-negotiation',
      alias: 'default-negotiation/release-1',
      unitType: 'offer',
    },
    defaultListingFields: {
      location: true,
      price: false,
      payoutDetails: false,
    },
  },
];

// SearchPage force valid listing type
export const enforceValidListingType = false;
