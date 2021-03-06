/* eslint-disable import/no-unresolved */

import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';

import { Button } from '../../lib/global/button';
import { ButtonGroup } from '../../lib/global/button-group-flex';

const App = () => (
  <div>
    <h1>Welcome to Global CSS with Flexbox example!</h1>
    <p>
      We've imported <code>react-foundation-components/lib/_foundation.scss</code> with
      global-flexbox set to true to import all Foundation class names into CSS name space.
    </p>
    <p>
      Importing <code>_foundation.scss</code> also gives us the ability to
      customize Foundation. Here we have changed the secondary color to purple.
    </p>
    <p>
      Make sure to use the components under lib/global. These components use global scoped
      class names.
    </p>
    <p>
      Also make sure to use the Flexbox components. The non Flexbox components use class names
      that don't exist when global-flexbox is set to true.
    </p>
    <div>
      <h3>Button <code>react-foundation-components/lib/global/button</code></h3>
      <Button>Click Me!</Button>
      <Button color="secondary">Purple is Secondary Color</Button>
    </div>
    <div>
      <h3>ButtonGroup <code>react-foundation-components/lib/global/button-group-flex</code></h3>
      <p>This ButtonGroup uses Flexbox layout</p>
      <ButtonGroup>
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
      </ButtonGroup>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
