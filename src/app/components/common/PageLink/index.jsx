import PT from 'prop-types';
import styled from 'styled-components';
import { media } from 'styles/utils';
import { Link } from 'react-router-dom';

const PageLink = styled(Link)`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  border: none;
  padding: 20px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[props.variant]};

  ${media.desktop`
    &:hover {
      text-decoration: underline;
    }
  `}
`;

PageLink.propTypes = {
  variant: PT.oneOf(['blue', 'green']),
};

PageLink.defaultProps = {
  variant: 'blue',
};

export default PageLink;
