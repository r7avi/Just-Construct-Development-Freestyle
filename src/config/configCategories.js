// @r7avi - Civil Contractors & Engineers Marketplace - Categories Configuration
/////////////////////////////////////////////////////////
// Configurations related to listing categories.       //
/////////////////////////////////////////////////////////

/**
 * Listing categories configuration
 * Categories can have nested subcategories
 * 
 * Structure:
 * - id: Unique identifier for the category
 * - name: Display name for the category
 * - subcategories: Array of nested subcategories (optional)
 */

export const categories = [
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
