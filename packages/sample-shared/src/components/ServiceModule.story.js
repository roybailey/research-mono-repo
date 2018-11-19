import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Body, Module } from '../styles/styledLayout';
import { ServiceModule } from './ServiceModule';
import base from '../base';
base();
var services = [
    {
        title: 'Users',
        icon: 'fa fa-user',
        description: "Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
    },
    {
        title: 'Coding',
        icon: 'fa fa-code',
        description: "Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
    },
    {
        title: 'Quality',
        icon: 'fa fa-thumbs-up',
        description: "Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
    },
    {
        title: 'Responsive',
        icon: 'fa fa-comments',
        description: "Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.",
    },
];
var theme = {
    background: '#FFFFFF',
    primary: '#9f3838',
    secondary: '#DBDBDB',
};
storiesOf('ServiceModule', module).add('Simple Service Module', function () { return (React.createElement(ThemeProvider, { theme: theme },
    React.createElement(Body, null,
        React.createElement(Module, null,
            React.createElement(ServiceModule, { onClick: action('clicked'), services: services }))))); });
//# sourceMappingURL=ServiceModule.story.js.map