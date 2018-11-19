# jest-preset

A jest preset for use with `@sigfig` packages.

## Usage

Add `@sigfig/jest-preset` as a dev dependency for your package.

```
// jest-config
{
  displayName: '@sigfig/my-package-name',
  preset: '@sigfig/jest-preset'
}
```

For packages that contain react / enzyme test code you will need to import the extended config which runs some additional setup for enzyme and also transpiles `tsx` and `jsx` code:

```
// jest-config
{
  displayName: '@sigfig/my-package-name',
  preset: '@sigfig/jest-preset/react'
}
```

This preset also expects your package to implement a `tsconfig.test.json` file in the package root which enforces commonjs modules:

```
// tsconfig.test.json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "commonjs"
  }
}

```

## Troubleshooting

If you receive an error such as:

```
({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import React from 'react';
                                                                                                ^^^^^
SyntaxError: Unexpected identifier
```

You are likely using the standard preset `@sigfig/jest-preset` and running it against React code. To fix you will need to switch to `@sigfig/jest-preset/react`.

If you have ensured that `@sigfig/jest-preset/react` is being used but you are receiving warnings that Enzyme has not been configured with an adapter, it's possible that for some reason lerna/yarn workspaces are not correctly hoisting enzyme to the root level, which would cause multiple instances of Enzyme to exist. Check the settings in the root level `package.json > workspaces > nohoist`.
