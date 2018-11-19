import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Body, Module } from '../styles/styledLayout';
import { ServiceModule } from './ServiceModule';

import base from '../base';

base();

const services = [
  {
    title: 'Users',
    icon: 'fa fa-user',
    description: `Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
  },
  {
    title: 'Coding',
    icon: 'fa fa-code',
    description: `Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
  },
  {
    title: 'Quality',
    icon: 'fa fa-thumbs-up',
    description: `Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
  },
  {
    title: 'Responsive',
    icon: 'fa fa-comments',
    description: `Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.`,
  },
];

const theme = {
  background: '#FFFFFF',
  primary: '#9f3838',
  secondary: '#DBDBDB',
};

storiesOf('ServiceModule', module).add('Simple Service Module', () => (
  <ThemeProvider theme={theme}>
    <Body>
      <Module>
        <ServiceModule onClick={action('clicked')} services={services} />
      </Module>
    </Body>
  </ThemeProvider>
));
