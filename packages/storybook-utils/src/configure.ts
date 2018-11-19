import * as R from 'ramda';
import { configure as configureStorybook } from '@storybook/react';
import { Options, setOptions } from '@storybook/addon-options';
import { options as defaultOptions } from '@roybailey/storybook-utils';
// const defaultOptions = {
//     name: '[Project name not set]',
//     url: '/',
//     goFullScreen: false,
//     showStoriesPanel: true,
//     showAddonPanel: true,
//     showSearchBox: false,
//     addonPanelInRight: true,
//     sortStoriesByKind: false,
//     hierarchySeparator: /\./,
//     hierarchyRootSeparator: undefined,
//     selectedAddonPanel: undefined
// };

type RecursivePartial<T> = { [P in keyof T ]?: RecursivePartial<T[P]> };
type PartialOptions = RecursivePartial<Options>;
type UpdateOptions = (baseOptions: Options, partialOptions: PartialOptions) => Options;

const updateOptions: UpdateOptions = (baseOptions: Options, partialOptions: PartialOptions) => R.mergeDeepRight(baseOptions, partialOptions);

export const configure: (name: string, loadStories: () => void) => void = (name, loadStories) => {
    const options = updateOptions(defaultOptions, { name });
    setOptions(options);
    configureStorybook(loadStories, module);
};


