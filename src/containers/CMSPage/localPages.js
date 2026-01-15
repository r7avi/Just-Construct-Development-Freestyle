/**
 * Local CMS Pages for Just Construct Directory
 * These pages are served locally instead of from Sharetribe Console
 */

const aboutPageContent = `
## Welcome to Just Construct

**Just Construct Directory for Civil Engineers** is India's premier online platform connecting construction professionals with clients across the country.

### Our Mission

To simplify the process of finding and hiring qualified construction professionals while helping Civil Engineers, Contractors, and Skilled Workers grow their businesses.

### Who We Connect

#### 🏗️ Construction Companies
Established construction firms offering comprehensive services including civil construction, architecture, interior design, manpower supply, and material supply. From turnkey projects to renovations.

#### 👷 Civil Contractors
Licensed contractors (Class I to Class V) providing labor contracts, material supply, and project execution. Registered with CPWD, State PWD, Municipal Corporations, and Railways.

#### 🎓 Civil Engineers
Qualified professionals with B.Tech, M.Tech, or Diploma in Civil Engineering. Specialists in structural design, site supervision, project management, quantity surveying, and more.

#### 🎨 Interior Designers
Creative professionals offering full home interiors, modular kitchens, wardrobes, design consultation, and turnkey execution. Styles from modern to traditional.

#### 🔧 Skilled Workers
Experienced tradespeople including:
- **Masons / Mistri** - Brickwork, plastering, tiling
- **Plumbers** - Pipe fitting, sanitary work
- **Electricians** - Wiring, fixtures, maintenance
- **Carpenters** - Woodwork, furniture, doors
- **Painters** - Interior and exterior painting
- **Welders** - Metal fabrication, grills
- **Bar Benders / Fitters** - Reinforcement work
- **Helpers / Labor** - General construction support

### For Clients

Looking to build your dream home or commercial space? Post your requirements and connect with:
- Verified construction professionals
- Multiple quotes for comparison
- Professionals in your city and pincode
- Specialists for your specific project type

### Why Choose Just Construct?

✅ **Verified Professionals** - License and registration details displayed  
✅ **Local Search** - Find professionals by city and pincode  
✅ **Detailed Profiles** - View services, experience, and past work  
✅ **Direct Contact** - Connect directly with professionals  
✅ **Free Listings** - Professionals can list their services for free  
✅ **Pan-India Coverage** - Professionals from across India  

### Our Values

- **Transparency** - Clear information about qualifications and services
- **Quality** - Connecting clients with skilled professionals
- **Trust** - Building reliable connections in construction
- **Growth** - Helping professionals expand their reach

### Join Just Construct Today

**For Professionals:** Create your listing and reach thousands of potential clients looking for construction services.

**For Clients:** Post your requirements and receive responses from qualified professionals in your area.

---

*Building Connections, Building India*

**Just Construct Directory for Civil Engineers**
`;

const aboutPage = {
  sections: [
    {
      sectionType: 'article',
      sectionId: 'about',
      appearance: { fieldType: 'customAppearance', backgroundColor: '#ffffff' },
      title: { fieldType: 'heading1', content: 'About Us' },
      blocks: [
        {
          blockType: 'defaultBlock',
          blockId: 'about-content',
          text: {
            fieldType: 'markdown',
            content: aboutPageContent,
          },
        },
      ],
    },
  ],
  meta: {
    pageTitle: {
      fieldType: 'metaTitle',
      content: 'About Us | Just Construct Directory for Civil Engineers',
    },
    pageDescription: {
      fieldType: 'metaDescription',
      content: 'About Just Construct - India\'s premier directory connecting Civil Engineers, Contractors, Interior Designers, and Skilled Workers with clients.',
    },
  },
};

// Export local pages - add more pages here as needed
export const localPages = {
  'about': aboutPage,
  'about-us': aboutPage,
};
