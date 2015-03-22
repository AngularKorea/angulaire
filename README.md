# Angular Game  (WIP)

### Who Wants to Be An Angulaire?

10 questions to introduce and test your knowledge about AngularJS.
AngularJS에 대한 설명 및 당신의 AngularJS에 대한 이해도를 테스트할 수 있는 10개 문제.

Based on the popular game show: [Who Wants To Be a Millionaire?](http://en.wikipedia.org/wiki/Who_Wants_to_Be_a_Millionaire%3F).

## Run

* `git clone` this repo.
* Setup: `npm install`
* Start: `npm start`
* Browser: `localhost:8080`

## Tools

* AngularJS
* ES6 (ES2015) with [Babel.js](https://babeljs.io/)
* [Webpack](http://webpack.github.io/)


## Structure

* `app/index.js` & `app/index.html`. Entry
* `app/core`. Layout & Config.
* `app/pages`. Loading & Ending Pages
* `app/game`. Game.
    - `/services` - data, settings, game
    - `/components` - directives
* `bundle.js`. Compiled App.