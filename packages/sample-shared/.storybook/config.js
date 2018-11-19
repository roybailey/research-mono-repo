import { configure } from '@roybailey/storybook-utils/src/index';

const req = require.context('../../../', true, /\.story\.tsx?$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure('Sample Shared Component Library', loadStories);
