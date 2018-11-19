var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { Button } from './styledButton';
var StyledContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 200px;\n"], ["\n  width: 200px;\n"])));
storiesOf('Button', module)
    .add('with text', function () { return (React.createElement(StyledContainer, null,
    React.createElement(Button, { onClick: action('clicked') }, "Button"))); })
    .add('with some emoji', function () { return (React.createElement(StyledContainer, null,
    React.createElement(Button, { onClick: action('clicked') }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"))); })
    .add('with primary', function () { return (React.createElement(StyledContainer, null,
    React.createElement(Button, { primary: "true", onClick: action('clicked') }, "Primary Button"))); });
var templateObject_1;
//# sourceMappingURL=styledButton.story.js.map