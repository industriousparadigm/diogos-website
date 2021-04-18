import styled from 'styled-components';
import config from 'config';
import Link from 'next/link';
import Spacer from './Spacer';

export default function Header() {
  return (
    <header>
      <SiteHeading>Diogo&apos;s website</SiteHeading>
      <Spacer size={8} />
      <nav>
        <MenuItems>
          {config.menuItems.map((menuItem) => (
            <MenuItem key={menuItem.path}>
              <Link href={menuItem.path}>{menuItem.name}</Link>
            </MenuItem>
          ))}
        </MenuItems>
      </nav>
    </header>
  );
}

const SiteHeading = styled.h1`
  font-weight: 700;
  margin: 0;
`;

const MenuItems = styled.ul`
  display: flex;
  gap: 8px;
`;

const MenuItem = styled.li`
  padding: 8px 12px;
  &:first-child {
    margin-left: -12px;
  }
`;
