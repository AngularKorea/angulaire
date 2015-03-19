# Angular game


## Development

* Setup: `npm install && bower install`
* Start: `npm start`
* Browser: `localhost:8080`


## Structure

* `app/index.js` & `app/index.html`. Entry
* `app/core`. Layout & Config.
* `app/tools`. Used by other modules (error handling, database, etc.)
* `app/components`. Services.
* `app/templates`. Re-usable view components.
* `app/states`. Things that change or hold data
* `app/bundle.js`. All files compiled into here. This is the app.
