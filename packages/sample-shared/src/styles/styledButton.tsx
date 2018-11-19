import styled, { StyledFunction } from 'styled-components';
import { css } from 'styled-components';

export interface Props {
  primary?: string;
  theme?: any;
  onClick?: () => void;
}

// const button: StyledFunction<Props & React.HTMLProps<HTMLInputElement>> = styled.button;

export const Button = styled.button<Props>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: none;
  color: ${props => props.theme.primary || 'violet'};
  border: 2px solid ${props => props.theme.primary};

  ${props =>
    props.primary &&
    css`
      background: ${p => p.theme.primary || 'violet'};
      color: white;
    `};
`;
