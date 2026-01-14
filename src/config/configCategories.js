// @r7avi - Civil Contractors & Engineers Marketplace - Categories Configuration
/////////////////////////////////////////////////////////
// Configurations related to listing categories.       //
/////////////////////////////////////////////////////////

/**
 * Listing categories configuration
 * Categories can have nested subcategories
 * Categories can be filtered by listing type
 * 
 * Structure:
 * - id: Unique identifier for the category
 * - name: Display name for the category
 * - listingTypes: Array of listing type IDs this category applies to (optional, if omitted applies to all)
 * - subcategories: Array of nested subcategories (optional)
 */

// @r7avi - Provider categories (what services they offer)
export const providerCategories = [
  {
    id: 'cat_civil_structure',
    name: 'Civil & Structural Works',
    subcategories: [
      {
        id: 'sub_new_construction',
        name: 'New Construction',
      },
      {
        id: 'sub_renovation',
        name: 'Renovation & Repairs',
      },
      {
        id: 'sub_foundation',
        name: 'Foundation Work',
      },
      {
        id: 'sub_concrete_work',
        name: 'Concrete Work',
      },
    ],
  },
  {
    id: 'cat_skilled_trades',
    name: 'Skilled Workers',
    subcategories: [
      {
        id: 'sub_plumbing',
        name: 'Plumbing',
      },
      {
        id: 'sub_electrical',
        name: 'Electrical',
      },
      {
        id: 'sub_painting',
        name: 'Painting',
      },
      {
        id: 'sub_carpentry',
        name: 'Carpentry',
      },
      {
        id: 'sub_hvac',
        name: 'HVAC',
      },
      {
        id: 'sub_roofing',
        name: 'Roofing',
      },
    ],
  },
  {
    id: 'cat_design_planning',
    name: 'Design & Planning',
    subcategories: [
      {
        id: 'sub_architecture',
        name: 'Architecture',
      },
      {
        id: 'sub_interior',
        name: 'Interior Design',
      },
      {
        id: 'sub_landscape',
        name: 'Landscape Design',
      },
      {
        id: 'sub_engineering',
        name: 'Engineering',
      },
    ],
  },
];

// @r7avi - Customer categories (what services they need)
export const customerCategories = [
  {
    id: 'cat_need_construction',
    name: 'Construction & Building',
    subcategories: [
      {
        id: 'sub_need_new_building',
        name: 'New Building/Home Construction',
      },
      {
        id: 'sub_need_renovation',
        name: 'Renovation & Remodeling',
      },
      {
        id: 'sub_need_repairs',
        name: 'Repairs & Maintenance',
      },
      {
        id: 'sub_need_extension',
        name: 'Building Extension',
      },
    ],
  },
  {
    id: 'cat_need_trades',
    name: 'Skilled Trade Services',
    subcategories: [
      {
        id: 'sub_need_plumbing',
        name: 'Plumbing Services',
      },
      {
        id: 'sub_need_electrical',
        name: 'Electrical Services',
      },
      {
        id: 'sub_need_painting',
        name: 'Painting Services',
      },
      {
        id: 'sub_need_carpentry',
        name: 'Carpentry Services',
      },
      {
        id: 'sub_need_hvac',
        name: 'HVAC Services',
      },
      {
        id: 'sub_need_roofing',
        name: 'Roofing Services',
      },
    ],
  },
  {
    id: 'cat_need_design',
    name: 'Design & Planning Services',
    subcategories: [
      {
        id: 'sub_need_architecture',
        name: 'Architectural Design',
      },
      {
        id: 'sub_need_interior',
        name: 'Interior Design',
      },
      {
        id: 'sub_need_landscape',
        name: 'Landscape Design',
      },
      {
        id: 'sub_need_engineering',
        name: 'Engineering Consultation',
      },
    ],
  },
];

// @r7avi - Combined categories with listing type filtering
export const categories = [
  ...providerCategories.map(cat => ({ ...cat, listingTypes: ['type_provider'] })),
  ...customerCategories.map(cat => ({ ...cat, listingTypes: ['type_customer'] })),
];
