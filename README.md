# xooks

General purpose react hooks collection

## Installation

xooks library has react@>=16.8.0 as peer dependency and [nanoid](https://www.npmjs.com/package/nanoid) as dependency.

```sh
# with npm
npm install --save xooks

# with yarn
yarn add xooks
```

## Included hooks

- [use-document-title](#use-document-title)
- [use-clipboard](#use-clipboard)

### use-document-title

Sets `document.title` property. Works only on client.

**Usage:**

```jsx
import React from 'react';
import { useDocumentTitle } from 'xooks';

export default function AppRoute() {
  useDocumentTitle('Document title');
  return <div>AppRoute</div>;
}
```

### use-clipboard

Provides interface to work with `navigator.clipboard`. Includes copied state timeout.

**Usage:**

```jsx
import React from 'react';
import { useClipboard } from 'xooks';

export default function Clupboard() {
  const {
    copied, // indicates that value was recently copied to clipboard
    copy, // copy any string to clipboard
    reset, // reset copied timeout
    error, // error is set when navigator.clipboard.writeText promise caught an error
  } = useClipboard({ timeout: 3000 }); // timeout is optional (defaults to 2000) – ms when copied will return to false after copy was called

  return (
    <button type="button" onClick={() => clipboard.copy('Hello')}>
      {clipboard.copied ? 'Copied' : 'Copy Hello'}
    </button>
  );
}
```
