# Symbiote Component Library

A simple component library.

## Example usage

Install the npm package `yarn install symbiote-component-library` or `npm install symbiote-component-library`

Import the element you need 

```javascript
// JavaScript
import { Element } from 'symbiote-component-library';

function App() {
    return (
        <div className="App">
            <Element prop="content" />
        </div>
    );
}

export default App;
```

## Local Development

Clone the repository `git clone git@github.com:nath99/symbiote-component-library.git`.

Install the node modules `yarn install` or `npm install`

If testing the components locally before pushing to NPM the library can be included by adding the following to your projects dependencies 

`'symbiote-component-library': 'link:<relative_path_to_component_library>'`

e.g.

`'symbiote-component-library': 'link:../symbiote-component-library'`

### NPM Scripts

Build the package `yarn run build` 

Run unit tests: `yarn run test` or `yarn run test:watch`

Open storybook to view components `yarn storybook` or build files for hosting a storybook site `yarn storybook:export`

