import styled from 'styled-components';
import Img, { GatsbyImageFixedProps } from 'gatsby-image'

export const AvatarWrapper = styled(Img)<GatsbyImageFixedProps>`
  width: 3.75rem;
  height: 3.75rem;
  margin: auto;
  border-radius: 50%;
`;
