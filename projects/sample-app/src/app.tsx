
import * as React from 'react';

import { Header } from '@roybailey/sample-shared';
import { HomePage } from './features/home/home-page';

export class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <Header>Shared Header Component From Mono Repo</Header>
                <HomePage />
            </div>
        );
    }
}
