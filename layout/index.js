import config from 'config';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { capitalize, getPageName } from 'lib';
import Header from 'components/Header';
import Spacer from 'components/Spacer';
import RowSeparator from 'components/RowSeparator';

function Layout({ children }) {
  // determine specific page title
  const router = useRouter();
  const pageTitle = capitalize(getPageName(router));

  // build tab title specific to this page
  const title = pageTitle
    ? pageTitle + ' | ' + config.siteTitle
    : config.siteTitle;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SiteWrapper>
        <Spacer size={16} />
        <Header />
        <RowSeparator />
        <Spacer size={12} />
        <Content>{children}</Content>
      </SiteWrapper>
    </>
  );
}

const SiteWrapper = styled.div`
  position: relative;
  padding: 24px 16px;
  max-width: 720px;
  margin: 0 auto;
`;

const Content = styled.main`
  margin: 16px 0;
`;

export default Layout;
