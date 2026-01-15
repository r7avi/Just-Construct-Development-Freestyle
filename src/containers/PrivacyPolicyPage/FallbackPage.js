import React from 'react';
import loadable from '@loadable/component';

const PageBuilder = loadable(() =>
  import(/* webpackChunkName: "PageBuilder" */ '../PageBuilder/PageBuilder')
);

const privacyPolicyContent = `
**Last Updated: January 2026**

## 1. Introduction

Welcome to Just Construct Directory for Civil Engineers ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.

Just Construct is India's premier directory connecting Civil Engineers, Construction Companies, Civil Contractors, Interior Designers, and Skilled Workers with clients seeking construction services.

## 2. Information We Collect

### 2.1 Information You Provide

**For Civil Engineers:**
- Name, email, phone number
- Qualifications (B.Tech, M.Tech, Diploma, etc.)
- Specialization and software skills
- Experience years and council registration numbers
- City and pincode

**For Construction Companies:**
- Company name and contact details
- Company registration number (CIN/LLPIN)
- GSTIN and annual turnover
- Services offered and projects completed
- Website and Google Maps link

**For Civil Contractors:**
- Contact information
- Contractor license class and registering authority
- Services offered and manpower supplied
- Labor strength and machinery owned

**For Interior Designers:**
- Professional details and experience
- Design styles and service scope
- Council registration (IIID/COA)

**For Skilled Workers:**
- Name and contact details
- Primary skill (Mason, Plumber, Electrician, Carpenter, Painter, Welder, Bar Bender, Helper)
- Experience and availability
- Number of workers in team

**For Clients (Hire Requirements):**
- Contact information
- Project type and timeline
- Hiring requirements and skills needed

### 2.2 Automatically Collected Information
- Device and browser information
- IP address and location data
- Usage patterns and preferences

## 3. How We Use Your Information

We use collected information to:
- Connect construction professionals with potential clients
- Display your profile/listing to relevant users
- Process inquiries and facilitate communication
- Improve our platform and user experience
- Send service-related notifications
- Ensure platform security and prevent fraud

## 4. Information Sharing

**Public Information:** Your listing details (services, skills, location, experience) are publicly visible to help clients find you.

**Private Information:** Phone numbers marked as private, email addresses, and payment details are protected and only shared as necessary for transactions.

We may share information with:
- Other users as part of normal platform operation
- Service providers assisting our operations
- Legal authorities when required by law

## 5. Data Security

We implement industry-standard security measures including:
- Encrypted data transmission (SSL/TLS)
- Secure data storage
- Regular security audits
- Access controls and authentication

## 6. Your Rights

You have the right to:
- Access your personal data
- Correct inaccurate information
- Delete your account and listings
- Opt-out of marketing communications
- Export your data

## 7. Data Retention

We retain your data as long as your account is active. Upon account deletion, we remove your personal data within 30 days, except where retention is required by law.

## 8. Children's Privacy

Our platform is not intended for users under 18 years of age. We do not knowingly collect information from minors.

## 9. Changes to This Policy

We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform notification.

## 10. Contact Us

For questions about this Privacy Policy or your data:
- Email: privacy@justconstruct.in
- Use the contact form on our platform

---
*Just Construct Directory for Civil Engineers - Connecting Construction Professionals Across India*
`;

// Create fallback content (array of sections) in page asset format:
export const fallbackSections = {
  sections: [
    {
      sectionType: 'article',
      sectionId: 'privacy',
      appearance: { fieldType: 'customAppearance', backgroundColor: '#ffffff' },
      title: { fieldType: 'heading1', content: 'Privacy Policy' },
      blocks: [
        {
          blockType: 'defaultBlock',
          blockId: 'privacy-content',
          text: {
            fieldType: 'markdown',
            content: privacyPolicyContent,
          },
        },
      ],
    },
  ],
  meta: {
    pageTitle: {
      fieldType: 'metaTitle',
      content: 'Privacy Policy | Just Construct Directory for Civil Engineers',
    },
    pageDescription: {
      fieldType: 'metaDescription',
      content: 'Privacy Policy for Just Construct Directory - Learn how we protect your data as a Civil Engineer, Contractor, or Construction Professional.',
    },
  },
};

// This is the fallback page for Privacy Policy
const FallbackPage = props => {
  return <PageBuilder pageAssetsData={fallbackSections} {...props} />;
};

export default FallbackPage;
