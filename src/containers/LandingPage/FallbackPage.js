import React from 'react';
import loadable from '@loadable/component';

import css from './FallbackPage.module.css';

const PageBuilder = loadable(() =>
  import(/* webpackChunkName: "PageBuilder" */ '../PageBuilder/PageBuilder')
);

// Local Landing Page content for Just Construct Directory
export const localLandingPageSections = {
  sections: [
    // Hero Section
    {
      sectionType: 'hero',
      sectionId: 'hero',
      appearance: {
        fieldType: 'customAppearance',
        backgroundColor: '#7c3aed',
        textColor: 'white',
      },
      title: {
        fieldType: 'heading1',
        content: 'Find Civil Engineers, Contractors & Skilled Workers',
      },
      description: {
        fieldType: 'paragraph',
        content: 'India\'s premier directory connecting construction professionals with clients. Find verified Civil Engineers, Construction Companies, Contractors, Interior Designers, and Skilled Workers in your city.',
      },
      callToAction: {
        fieldType: 'internalButtonLink',
        href: '/s',
        label: 'Browse Listings',
      },
    },
    // Features Section
    {
      sectionType: 'features',
      sectionId: 'categories',
      appearance: {
        fieldType: 'customAppearance',
        backgroundColor: '#f8f8f8',
      },
      title: {
        fieldType: 'heading2',
        content: 'Find the Right Professional',
      },
      description: {
        fieldType: 'paragraph',
        content: 'Browse our categories to find exactly what you need for your construction project.',
      },
      blocks: [
        {
          blockType: 'defaultBlock',
          blockId: 'construction-companies',
          title: {
            fieldType: 'heading3',
            content: '🏗️ Construction Companies',
          },
          text: {
            fieldType: 'markdown',
            content: 'Established firms offering civil construction, architecture, interior design, manpower supply, and material supply services.',
          },
          callToAction: {
            fieldType: 'internalButtonLink',
            href: '/s/construction-company-listing',
            label: 'View Companies',
          },
        },
        {
          blockType: 'defaultBlock',
          blockId: 'civil-contractors',
          title: {
            fieldType: 'heading3',
            content: '👷 Civil Contractors',
          },
          text: {
            fieldType: 'markdown',
            content: 'Licensed contractors (Class I-V) for labor contracts, turnkey construction, renovations, and material supply.',
          },
          callToAction: {
            fieldType: 'internalButtonLink',
            href: '/s/civil-contractor-listing',
            label: 'View Contractors',
          },
        },
        {
          blockType: 'defaultBlock',
          blockId: 'civil-engineers',
          title: {
            fieldType: 'heading3',
            content: '🎓 Civil Engineers',
          },
          text: {
            fieldType: 'markdown',
            content: 'Qualified engineers specializing in structural design, site supervision, project management, and quantity surveying.',
          },
          callToAction: {
            fieldType: 'internalButtonLink',
            href: '/s/register-civil-engineer',
            label: 'View Engineers',
          },
        },
        {
          blockType: 'defaultBlock',
          blockId: 'interior-designers',
          title: {
            fieldType: 'heading3',
            content: '🎨 Interior Designers',
          },
          text: {
            fieldType: 'markdown',
            content: 'Creative professionals for full home interiors, modular kitchens, wardrobes, and design consultation.',
          },
          callToAction: {
            fieldType: 'internalButtonLink',
            href: '/s/interior-designer-listing',
            label: 'View Designers',
          },
        },
        {
          blockType: 'defaultBlock',
          blockId: 'skilled-workers',
          title: {
            fieldType: 'heading3',
            content: '🔧 Skilled Workers',
          },
          text: {
            fieldType: 'markdown',
            content: 'Experienced Masons, Plumbers, Electricians, Carpenters, Painters, Welders, Bar Benders, and Helpers.',
          },
          callToAction: {
            fieldType: 'internalButtonLink',
            href: '/s/skilled-worker-listing',
            label: 'View Workers',
          },
        },
        {
          blockType: 'defaultBlock',
          blockId: 'hire-requirements',
          title: {
            fieldType: 'heading3',
            content: '📋 Hire Requirements',
          },
          text: {
            fieldType: 'markdown',
            content: 'Clients looking to hire construction professionals. Post your project requirements and get responses.',
          },
          callToAction: {
            fieldType: 'internalButtonLink',
            href: '/s/hire-requirement',
            label: 'View Requirements',
          },
        },
      ],
    },
    // How It Works Section
    {
      sectionType: 'article',
      sectionId: 'how-it-works',
      appearance: {
        fieldType: 'customAppearance',
        backgroundColor: '#ffffff',
      },
      title: {
        fieldType: 'heading2',
        content: 'How It Works',
      },
      blocks: [
        {
          blockType: 'defaultBlock',
          blockId: 'how-it-works-content',
          text: {
            fieldType: 'markdown',
            content: `
### For Construction Professionals

1. **Create Your Listing** - Sign up and add your services, qualifications, and experience
2. **Get Discovered** - Clients search by city, pincode, and service type
3. **Connect & Grow** - Receive inquiries and expand your business

### For Clients

1. **Search Professionals** - Browse by category, location, and specialization
2. **Compare Options** - View profiles, services, and experience
3. **Connect Directly** - Contact professionals and discuss your project

### Why Choose Just Construct?

✅ **Verified Professionals** - License and registration details displayed  
✅ **Local Search** - Find professionals by city and pincode  
✅ **Detailed Profiles** - View services, experience, and qualifications  
✅ **Direct Contact** - Connect directly with professionals  
✅ **Free Listings** - List your services at no cost  
✅ **Pan-India Coverage** - Professionals from across India
            `,
          },
        },
      ],
    },
    // CTA Section
    {
      sectionType: 'hero',
      sectionId: 'cta',
      appearance: {
        fieldType: 'customAppearance',
        backgroundColor: '#1a1a2e',
        textColor: 'white',
      },
      title: {
        fieldType: 'heading2',
        content: 'Ready to Get Started?',
      },
      description: {
        fieldType: 'paragraph',
        content: 'Join thousands of construction professionals and clients on Just Construct Directory.',
      },
      callToAction: {
        fieldType: 'internalButtonLink',
        href: '/signup',
        label: 'Create Free Account',
      },
    },
  ],
  meta: {
    pageTitle: {
      fieldType: 'metaTitle',
      content: 'Just Construct Directory for Civil Engineers | Find Contractors & Skilled Workers',
    },
    pageDescription: {
      fieldType: 'metaDescription',
      content: 'India\'s premier directory for Civil Engineers, Construction Companies, Contractors, Interior Designers & Skilled Workers. Find verified professionals in your city.',
    },
  },
};

// Create fallback content for error states
export const fallbackSections = error => ({
  sections: [
    {
      sectionType: 'customMaintenance',
      sectionId: 'maintenance-mode',
      error,
    },
  ],
  meta: {
    pageTitle: {
      fieldType: 'metaTitle',
      content: 'Just Construct Directory for Civil Engineers',
    },
    pageDescription: {
      fieldType: 'metaDescription',
      content: 'Connect with Civil Engineers, Contractors, Interior Designers, and Skilled Workers across India',
    },
  },
});

// Maintenance mode component for error states
const SectionMaintenanceMode = props => {
  const { sectionId, error } = props;
  const is404 = error?.status === 404;

  return (
    <section id={sectionId} className={css.root}>
      {is404 ? (
        <div className={css.content}>
          <h2>Just Construct Directory for Civil Engineers</h2>
          <p>
            We're setting things up! The marketplace will be fully operational soon.
            <br />
            Please try refreshing the page or contact the administrators.
          </p>
        </div>
      ) : (
        <div className={css.content}>
          <h2>Oops, something went wrong!</h2>
          <p>{error?.message}</p>
        </div>
      )}
    </section>
  );
};

// Fallback page component
const FallbackPage = props => {
  const { error, ...rest } = props;
  return (
    <PageBuilder
      pageAssetsData={fallbackSections(error)}
      options={{
        sectionComponents: {
          customMaintenance: { component: SectionMaintenanceMode },
        },
      }}
      {...rest}
    />
  );
};

export default FallbackPage;
