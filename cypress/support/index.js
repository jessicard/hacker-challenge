// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import addContext from 'mochawesome/addContext';

// Alternatively you can use CommonJS syntax:
// require('./commands')

const titleToFileName = (title) => title.replace(/[:\/]/g, '');

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        const filename = `${titleToFileName(runnable.parent.title)} -- ${titleToFileName(test.title)} (failed).png`;
        addContext({ test }, `../../screenshots/${Cypress.spec.name}/${filename}`);
        addContext({ test }, `../../videos/${Cypress.spec.name}.mp4`);
    }
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})