'use strict';
import React from 'react';
import styled from 'styled-components';

const ServiceGroup = styled.div.attrs<any, any>({ cid: 'ServiceGroup' })`
  margin: 3em 0;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
`;
const ServicePoint = styled.div.attrs<any, any>({ cid: 'ServicePoint' })`
  margin-top: 5em;
  margin-bottom: 5em;
`;
const ServicePointIcon = styled.div.attrs<any, any>({ cid: 'ServicePointIcon' })`
  margin: 0 auto;
  transform: rotate(45deg);
  font-size: 2.5em;
  color: ${props => props.theme.primary};
  line-height: 2.5em;
  background: rgba(195, 185, 185, 0.21);
  width: 2.5em;
  height: 2.5em;
  text-align: center;
  border: solid 4px ${props => props.theme.background};
  outline: 1px solid ${props => props.theme.secondary};
  margin-bottom: 1em;

  ${ServicePoint}:hover & {
    color: #d0d0d0;
    background: ${props => props.theme.primary};
    cursor: pointer;
    transition: ease-out(1.5s);
  }
`;
const ServicePointItalic = styled.i.attrs<any>({ cid: 'ServicePointItalic' })`
  position: relative;
  overflow: hidden;
  transform: rotate(-45deg);
`;

export interface Props {
  services: any[];
  className?: string;
  onClick?: () => void;
}

const ServiceModule = (props: Props) => {
  return (
    <ServiceGroup>
      {props.services.map((service, idx) => (
        <ServicePoint key={'service.' + idx}>
          <ServicePointIcon>
            <ServicePointItalic className={service.icon} />
          </ServicePointIcon>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </ServicePoint>
      ))}
    </ServiceGroup>
  );
};

export { ServiceModule };

/*
.service-point {
    margin-top: 5em;
    margin-bottom: 5em;
}
.service-point i {
    position: relative;
    overflow: hidden;
}
.service-point .ico {
    margin: 0 auto;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    font-size: 2.5em;
    color: $rgb-secondary;
    line-height: 2.5em;
    background: rgba(195, 185, 185, 0.21);
    width: 2.5em;
    height: 2.5em;
    text-align: center;
    border: solid 4px $rgb-background;
    outline: 1px solid $rgb-grey-light;
    margin-bottom: 1em;
}
.service-point:hover .ico {
    color: $rgb-grey-light;
    background: $rgb-secondary;
    cursor: pointer;
    @include vendor-prefix(transition, ease-out 0.5s);
}
.service-point .ico:hover {
    color: $rgb-grey-light;
    background: $rgb-secondary;
    cursor: pointer;
    @include vendor-prefix(transition, ease-out 0.5s);
}
.service-point .ico i {
    @include vendor-prefix(transform, rotate(-45deg));
}
@media #{$ipad-window} {
    .service-point {
        margin-top: 3em;
        margin-bottom: 3em;
    }
}
*/

