import React, { useState } from 'react';
import Ticker from 'react-ticker';
import PageVisibility from 'react-page-visibility';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import AboutHeader from 'assets/PageHeaders/about.gif';
import { PageHeader, RichText, SEO, Services, StaffMembers } from 'components';
import {
  InnerWrap,
  TextWrap,
  TextWrapMin,
} from 'components/common/Containers/styled';
import { AboutTypes, StaffMemberTypes, ServiceTypes } from 'types/types';

type GraphQLResult = {
  contentfulAboutPage: AboutTypes;
  allContentfulStaffMember: {
    edges: StaffMemberTypes[];
  };
  allContentfulService: {
    edges: ServiceTypes[];
  };
};

const AboutPage = ({ data }: PageProps<GraphQLResult>) => {
  const {
    contentfulAboutPage,
    allContentfulStaffMember,
    allContentfulService,
  } = data;

  const { body, teamSectionTitle, teamSectionText, serviceSectionTitle } =
    contentfulAboutPage;

  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible);
  };

  return (
    <MainLayout>
      <SEO
        title='About'
        description='About
NewEdge is the Brand & Design studio that takes founders, entrepreneurs, start-ups and small businesses from idea to identity.'
      />
      <InnerWrap>
        <PageHeader title='About' gif={AboutHeader} />

        <section>
          <TextWrap>
            <RichText {...body} />
          </TextWrap>
        </section>
      </InnerWrap>

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={5}>
            {() => <h3 style={{ marginRight: '6rem' }}>{teamSectionTitle}</h3>}
          </Ticker>
        )}
      </PageVisibility>

      <section>
        <StaffMembers staffMembers={allContentfulStaffMember.edges} />

        <aside>
          <TextWrapMin>
            <p>{teamSectionText}</p>
          </TextWrapMin>
        </aside>
      </section>

      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker speed={5}>
            {() => (
              <h3 style={{ marginRight: '6rem' }}>{serviceSectionTitle}</h3>
            )}
          </Ticker>
        )}
      </PageVisibility>

      <section>
        <Services services={allContentfulService.edges} />
      </section>
    </MainLayout>
  );
};

export const query = graphql`
  query {
    contentfulAboutPage {
      body {
        raw
      }
      teamSectionTitle
      teamSectionText
      serviceSectionTitle
    }
    allContentfulStaffMember(sort: { name: ASC }) {
      edges {
        node {
          name
          bio {
            raw
          }
          headshot {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulService {
      edges {
        node {
          title
          features
        }
      }
    }
  }
`;

export default AboutPage;
