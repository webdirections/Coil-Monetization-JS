# Coil Monetization JS

Scaffolding for using the Coil JS API. Coils is a service that uses the interledger protocol to enable streaming of money from a browser that has web monetization enabled to any website that supports web monetization.

## About Web Monetization

For more about supporting web monetization, see the [Coil developers site](https://developers.coil.com). 

## About the Project
Coil Monetization JS is some simple scaffolding to get up and running with the Coil JS API.

The API allows you to determine whether the user's browser supports web monetization, and if so whether the browser is currently streaming payments or not. 

## Getting Started
```sh
git clone https://github.com/webdirections/Coil-Monetization-JS.git
```

## Use

coilMonetizer is an object in coil-monetizer.js

It has event handlers for the document.monetization events `monetizationstart` and `monetizationstop`.

Set the `startPayingHandler` and `stopPayingHandler` attributes to functions to be called when monetization starts or stops.

In index.html find an example that installs simple handlers for these events.

coilMonetizer is initialized in coil-monetizer.js on the `DOMContentLoaded` event.