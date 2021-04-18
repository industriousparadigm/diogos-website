import styled from 'styled-components';
import config from 'config';
import Link from 'next/link';
import Spacer from 'components/Spacer';
import { useRouter } from 'next/router';
import { getPageName } from 'lib';

export default function Header() {
  const router = useRouter();
  const currentPageName = getPageName(router);
  return (
    <StickyHeader>
      <SiteHeading>Diogo&apos;s website</SiteHeading>
      <Spacer size={8} />
      <NavBar>
        <MenuItems>
          {config.menuItems.map((menuItem) => (
            <MenuItem key={menuItem.path}>
              <Link href={menuItem.path}>{menuItem.name}</Link>
            </MenuItem>
          ))}
          <ActivePage>{currentPageName}</ActivePage>
        </MenuItems>
      </NavBar>
    </StickyHeader>
  );
}

const StickyHeader = styled.header`
  position: sticky;
  top: -48px;
  background-color: var(--color-background);
`;

const SiteHeading = styled.h1`
  font-family: 'Alegreya Sans SC', sans-serif;
  color: var(--color-secondary);
  margin: 0;
`;

const NavBar = styled.nav`
  padding-bottom: 16px;
`;

const MenuItems = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 0;
`;

const MenuItem = styled.li`
  padding: 8px 12px;
  &:first-child {
    margin-left: -12px;
  }
`;

const ActivePage = styled.li`
  font-family: 'Alegreya Sans SC', sans-serif;
  color: var(--color-secondary);
  padding: 8px 12px;
  font-size: 1.5rem;
  margin-left: auto;
`;
