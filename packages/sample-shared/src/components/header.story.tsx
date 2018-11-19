import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Header } from './header';

storiesOf('Header', module).add('with title', () => <Header>Sample Shared React Component</Header>);
