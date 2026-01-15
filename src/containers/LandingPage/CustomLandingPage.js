import React from 'react';
import { NamedLink } from '../../components';
import css from './CustomLandingPage.module.css';

const CustomLandingPage = () => {
  return (
    <div className={css.root}>
      {/* Hero Section */}
      <section className={css.hero}>
        <div className={css.heroContent}>
          <h1 className={css.heroTitle}>
            Find Civil Engineers, Contractors & Skilled Workers
          </h1>
          <p className={css.heroSubtitle}>
            India's premier directory connecting construction professionals with clients. 
            Find verified professionals in your city.
          </p>
          <div className={css.heroButtons}>
            <NamedLink name="SearchPage" className={css.primaryButton}>
              Browse Listings
            </NamedLink>
            <NamedLink name="SignupPage" className={css.secondaryButton}>
              Join Free
            </NamedLink>
          </div>
          <div className={css.heroStats}>
            <div className={css.stat}>
              <span className={css.statNumber}>500+</span>
              <span className={css.statLabel}>Professionals</span>
            </div>
            <div className={css.stat}>
              <span className={css.statNumber}>50+</span>
              <span className={css.statLabel}>Cities</span>
            </div>
            <div className={css.stat}>
              <span className={css.statNumber}>6</span>
              <span className={css.statLabel}>Categories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={css.categories}>
        <div className={css.container}>
          <h2 className={css.sectionTitle}>Find the Right Professional</h2>
          <p className={css.sectionSubtitle}>
            Browse our categories to find exactly what you need for your construction project
          </p>
          
          <div className={css.categoryGrid}>
            <NamedLink 
              name="SearchPageWithListingType" 
              params={{ listingType: 'construction-company-listing' }}
              className={css.categoryCard}
            >
              <div className={css.categoryIcon}>🏗️</div>
              <h3 className={css.categoryTitle}>Construction Companies</h3>
              <p className={css.categoryDesc}>
                Civil construction, architecture, interior design, manpower & material supply
              </p>
            </NamedLink>

            <NamedLink 
              name="SearchPageWithListingType" 
              params={{ listingType: 'civil-contractor-listing' }}
              className={css.categoryCard}
            >
              <div className={css.categoryIcon}>👷</div>
              <h3 className={css.categoryTitle}>Civil Contractors</h3>
              <p className={css.categoryDesc}>
                Licensed contractors for turnkey construction, labor contracts & renovations
              </p>
            </NamedLink>

            <NamedLink 
              name="SearchPageWithListingType" 
              params={{ listingType: 'register-civil-engineer' }}
              className={css.categoryCard}
            >
              <div className={css.categoryIcon}>🎓</div>
              <h3 className={css.categoryTitle}>Civil Engineers</h3>
              <p className={css.categoryDesc}>
                Structural design, site supervision, project management & quantity surveying
              </p>
            </NamedLink>

            <NamedLink 
              name="SearchPageWithListingType" 
              params={{ listingType: 'interior-designer-listing' }}
              className={css.categoryCard}
            >
              <div className={css.categoryIcon}>🎨</div>
              <h3 className={css.categoryTitle}>Interior Designers</h3>
              <p className={css.categoryDesc}>
                Full home interiors, modular kitchens, wardrobes & design consultation
              </p>
            </NamedLink>

            <NamedLink 
              name="SearchPageWithListingType" 
              params={{ listingType: 'skilled-worker-listing' }}
              className={css.categoryCard}
            >
              <div className={css.categoryIcon}>🔧</div>
              <h3 className={css.categoryTitle}>Skilled Workers</h3>
              <p className={css.categoryDesc}>
                Masons, Plumbers, Electricians, Carpenters, Painters, Welders & more
              </p>
            </NamedLink>

            <NamedLink 
              name="SearchPageWithListingType" 
              params={{ listingType: 'hire-requirement' }}
              className={css.categoryCard}
            >
              <div className={css.categoryIcon}>📋</div>
              <h3 className={css.categoryTitle}>Hire Requirements</h3>
              <p className={css.categoryDesc}>
                Clients looking to hire professionals for their construction projects
              </p>
            </NamedLink>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={css.howItWorks}>
        <div className={css.container}>
          <h2 className={css.sectionTitle}>How It Works</h2>
          
          <div className={css.stepsContainer}>
            <div className={css.stepsColumn}>
              <h3 className={css.stepsHeading}>For Professionals</h3>
              <div className={css.step}>
                <div className={css.stepNumber}>1</div>
                <div className={css.stepContent}>
                  <h4>Create Your Listing</h4>
                  <p>Sign up and add your services, qualifications, and experience</p>
                </div>
              </div>
              <div className={css.step}>
                <div className={css.stepNumber}>2</div>
                <div className={css.stepContent}>
                  <h4>Get Discovered</h4>
                  <p>Clients search by city, pincode, and service type</p>
                </div>
              </div>
              <div className={css.step}>
                <div className={css.stepNumber}>3</div>
                <div className={css.stepContent}>
                  <h4>Connect & Grow</h4>
                  <p>Receive inquiries and expand your business</p>
                </div>
              </div>
            </div>

            <div className={css.stepsColumn}>
              <h3 className={css.stepsHeading}>For Clients</h3>
              <div className={css.step}>
                <div className={css.stepNumber}>1</div>
                <div className={css.stepContent}>
                  <h4>Search Professionals</h4>
                  <p>Browse by category, location, and specialization</p>
                </div>
              </div>
              <div className={css.step}>
                <div className={css.stepNumber}>2</div>
                <div className={css.stepContent}>
                  <h4>Compare Options</h4>
                  <p>View profiles, services, and experience</p>
                </div>
              </div>
              <div className={css.step}>
                <div className={css.stepNumber}>3</div>
                <div className={css.stepContent}>
                  <h4>Connect Directly</h4>
                  <p>Contact professionals and discuss your project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={css.features}>
        <div className={css.container}>
          <h2 className={css.sectionTitle}>Why Choose Just Construct?</h2>
          
          <div className={css.featureGrid}>
            <div className={css.featureCard}>
              <div className={css.featureIcon}>✅</div>
              <h4>Verified Professionals</h4>
              <p>License and registration details displayed</p>
            </div>
            <div className={css.featureCard}>
              <div className={css.featureIcon}>📍</div>
              <h4>Local Search</h4>
              <p>Find professionals by city and pincode</p>
            </div>
            <div className={css.featureCard}>
              <div className={css.featureIcon}>📄</div>
              <h4>Detailed Profiles</h4>
              <p>View services, experience & qualifications</p>
            </div>
            <div className={css.featureCard}>
              <div className={css.featureIcon}>📞</div>
              <h4>Direct Contact</h4>
              <p>Connect directly with professionals</p>
            </div>
            <div className={css.featureCard}>
              <div className={css.featureIcon}>🆓</div>
              <h4>Free Listings</h4>
              <p>List your services at no cost</p>
            </div>
            <div className={css.featureCard}>
              <div className={css.featureIcon}>🇮🇳</div>
              <h4>Pan-India Coverage</h4>
              <p>Professionals from across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={css.cta}>
        <div className={css.ctaContent}>
          <h2 className={css.ctaTitle}>Ready to Get Started?</h2>
          <p className={css.ctaSubtitle}>
            Join thousands of construction professionals and clients on Just Construct Directory
          </p>
          <div className={css.ctaButtons}>
            <NamedLink name="SignupPage" className={css.ctaPrimaryButton}>
              Create Free Account
            </NamedLink>
            <NamedLink name="SearchPage" className={css.ctaSecondaryButton}>
              Browse Listings
            </NamedLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomLandingPage;
