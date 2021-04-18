import config from 'config';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { capitalize } from 'lib';
// import Footer from 'components/Footer';
import Header from 'components/Header';
import Spacer from 'components/Spacer';

function Layout({ children }) {
  // determine specific page title
  const { pathname } = useRouter();
  const pageTitle = capitalize(
    config.menuItems.find((page) => page.path === pathname)?.name
  );

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
        <Content>{children}</Content>
        {/* <Footer /> */}
      </SiteWrapper>
    </>
  );
}

const SiteWrapper = styled.div`
  position: relative;
  padding: 32px 16px;
  max-width: 800px;
  margin: 0 auto;
`;

const RowSeparator = styled.hr`
  height: 1px;
  border: none;
  background: rgba(192, 188, 182, 0.4);
`;

const Content = styled.main`
  margin: 16px 0;
`;

export default Layout;
