import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;

  a {
    display: inline-block;
    color: #fff;
    text-decoration: none;

    & + a {
      margin-left: 16px;
    }
  }
`;
