import styled from 'styled-components';

export const Container = styled.article`
  margin-bottom: 30px;
  opacity: ${props => props.removed ? 0.5 : 1};
  color: ${props => props.removed ? '#F00' : '#FFF'};
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;