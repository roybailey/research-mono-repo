import styled from 'styled-components';
// import {css} from 'styled-components'

export const Body = styled.body.attrs<any>({ cid: 'Body' })`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
  font-family: 'Titillium Web', Helvetica, Arial, sans-serif;
`;

export const Module = styled.div.attrs<any>({ cid: 'Module' })`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: none;
  border: 1px dashed green;
`;
