import styled from 'styled-components';

export default function RowSeparator({ width = '100' }) {
  return <Wrapper width={width}></Wrapper>;
}

const Wrapper = styled.hr`
  height: 1px;
  border: none;
  background: rgba(192, 188, 182, 0.4);
  ${(p) => p.width && `width: ${p.width}%`};
`;
