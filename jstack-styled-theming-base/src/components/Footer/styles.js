import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.footerBackgroundColor };
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  margin: 10px;
  border-radius: 10px;
  justify-content: space-between;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
