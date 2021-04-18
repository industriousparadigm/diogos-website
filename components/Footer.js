import styled from 'styled-components';

export default function Footer() {
  return <Wrapper>{`© ${new Date().getFullYear()} Diogo Costa`}</Wrapper>;
}

const Wrapper = styled.footer`
  position: absolute;
  bottom: 12px;
`;
