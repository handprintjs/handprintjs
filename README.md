# HandprintJS
This repo contains the `npm` module for installing HandprintJS.

https://www.npmjs.com/package/handprintjs

## Installing
```sh
npm i handprintjs
```

## Usage
```javascript
import { handprint } from 'handprintjs';

// Required: initialize the library
// Note: you can find your handprint endpoint by logging into your account
handprint.load('https://your-handprint-endpoint/js');

// (Optional) link the handprint to an account
handprint.identify('user123', {'name': 'John'}, 'account')

// (Optional) listen for flags
handprint.on('flag', (flag) => {
    // do something with the flag
    console.log('flag received', flag)
})

// Required: track an event
// e.g. 'Page visit', 'Sign up', 'Product review', 'Load application', etc
handprint.track('Page visit')

// or, if you want to associate the event with additional properties
handprint.track('Page visit', {'foo': 'bar'})

// Get the user information, including their handprint
handprint.get().then((visitorInfo) => {
    console.log(visitorInfo);
})
```
