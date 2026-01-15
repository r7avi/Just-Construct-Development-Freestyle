import React from 'react';
import loadable from '@loadable/component';

const PageBuilder = loadable(() =>
  import(/* webpackChunkName: "PageBuilder" */ '../PageBuilder/PageBuilder')
);

const termsContent = `
**Last Updated: January 2026**

## 1. Acceptance of Terms

By accessing and using Just Construct Directory for Civil Engineers ("Platform"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Platform.

## 2. About Just Construct

Just Construct Directory for Civil Engineers is India's premier online platform connecting:
- **Civil Engineers** seeking projects or showcasing their expertise
- **Construction Companies** offering comprehensive construction services
- **Civil Contractors** providing labor, materials, and project execution
- **Interior Designers** offering design and execution services
- **Skilled Workers** including Masons, Plumbers, Electricians, Carpenters, Painters, Welders, Bar Benders, and Helpers
- **Clients** looking to hire construction professionals for their projects

## 3. User Registration & Accounts

### 3.1 Eligibility
- You must be at least 18 years old
- You must provide accurate and complete information
- One person/entity may maintain only one account per listing type

### 3.2 Account Types

**Service Providers:**
- Construction Company Listing
- Civil Contractor Listing
- Interior Designer Listing
- Skilled Worker Listing
- Civil Engineer Registration

**Clients:**
- Hire Requirement Posting

### 3.3 Account Security
- You are responsible for maintaining account confidentiality
- Notify us immediately of any unauthorized access
- We are not liable for losses due to compromised credentials

## 4. Listing Guidelines

### 4.1 Accuracy Requirements
All listings must contain:
- Accurate business/professional information
- Valid contact details (phone, address, city, pincode)
- Genuine qualifications and certifications
- Real experience and project history

### 4.2 Prohibited Content
Users must NOT:
- Post false, misleading, or fraudulent information
- Misrepresent qualifications, licenses, or experience
- Use fake photos or copied content
- Post spam or duplicate listings
- Include offensive or inappropriate content

### 4.3 Verification
- License classes (Class I-V) must be accurately stated
- Registration numbers (CIN, GSTIN, Council Registration) should be valid
- We reserve the right to verify and remove unverified claims

## 5. User Conduct

### 5.1 Professional Behavior
Users agree to:
- Communicate professionally and respectfully
- Honor commitments made through the platform
- Provide honest quotes and timelines
- Complete work as agreed

### 5.2 Prohibited Actions
Users must NOT:
- Harass, abuse, or threaten other users
- Attempt to circumvent the platform for direct transactions
- Collect user data for unauthorized purposes
- Engage in any illegal activities
- Post reviews for services not received/provided

## 6. Transactions & Payments

### 6.1 Platform Role
- Just Construct facilitates connections between users
- We are NOT a party to agreements between users
- Payment terms are negotiated directly between parties

### 6.2 User Responsibility
- Verify credentials before hiring
- Agree on scope, timeline, and payment terms in writing
- Conduct due diligence on contractors and workers

## 7. Intellectual Property

- Users retain ownership of their content
- By posting, you grant us license to display your content
- Do not post copyrighted material without permission
- Our platform design, logo, and code are our property

## 8. Limitation of Liability

Just Construct Directory is NOT liable for:
- Quality of work performed by listed professionals
- Disputes between users
- Financial losses from transactions
- Accuracy of user-provided information
- Service delays or project failures
- Any indirect or consequential damages

## 9. Indemnification

You agree to indemnify Just Construct against claims arising from:
- Your use of the platform
- Your violation of these terms
- Your interactions with other users
- Content you post on the platform

## 10. Termination

### 10.1 By User
You may delete your account at any time through account settings.

### 10.2 By Platform
We may suspend or terminate accounts that:
- Violate these Terms of Service
- Engage in fraudulent activity
- Receive multiple complaints
- Remain inactive for extended periods

## 11. Dispute Resolution

- Users should first attempt to resolve disputes directly
- Unresolved disputes may be reported to us
- We may mediate but are not obligated to resolve disputes
- Legal disputes are subject to jurisdiction in India

## 12. Modifications

We may modify these terms at any time. Continued use after changes constitutes acceptance. We will notify users of significant changes.

## 13. Governing Law

These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.

## 14. Contact Information

For questions about these Terms:
- Email: legal@justconstruct.in
- Use the contact form on our platform

---
*Just Construct Directory for Civil Engineers - Building Connections, Building India*
`;

// Create fallback content (array of sections) in page asset format:
export const fallbackSections = {
  sections: [
    {
      sectionType: 'article',
      sectionId: 'terms',
      appearance: { fieldType: 'customAppearance', backgroundColor: '#ffffff' },
      title: { fieldType: 'heading1', content: 'Terms of Service' },
      blocks: [
        {
          blockType: 'defaultBlock',
          blockId: 'terms-content',
          text: {
            fieldType: 'markdown',
            content: termsContent,
          },
        },
      ],
    },
  ],
  meta: {
    pageTitle: {
      fieldType: 'metaTitle',
      content: 'Terms of Service | Just Construct Directory for Civil Engineers',
    },
    pageDescription: {
      fieldType: 'metaDescription',
      content: 'Terms of Service for Just Construct Directory - Rules and guidelines for Civil Engineers, Contractors, and Construction Professionals.',
    },
  },
};

// This is the fallback page for Terms of Service
const FallbackPage = props => {
  return <PageBuilder pageAssetsData={fallbackSections} {...props} />;
};

export default FallbackPage;
