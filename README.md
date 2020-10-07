[![Netlify Status](https://api.netlify.com/api/v1/badges/a19073e8-90f4-4e36-83f1-c171e02d5437/deploy-status)](https://app.netlify.com/sites/recipe-ipsum/deploys)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](./CONTRIBUTING.md)
# Recipe Ipsum
## A nonsensical recipe generator
I created this monstrosity, because I was designing a recipe blog and I wanted to generate a fake recipe, I could've just copied and existing recipe, but where's the fun in that? There are lorem ipsum generators for all kinds of topics, why not one that creates recipes?

I understand that I am solving a very niche problem that doesn't really exist, but it's a fun project with a lot of learning opportunities!

[How to contribute](CONTRIBUTING.md) | [Check out the "roadmap" (in quotations because it's not really a roadmap)](https://www.notion.so/Roadmap-667071679b9c4676ac49188d1cb1a257)

### install

Make sure you have [yarn](https://yarnpkg.com/) installed

run `yarn install`

run `yarn dev`

and then you are good to go!

### Testing
all testing files are located in [cypress/integration](./cypress/integration)

to run tests run `yarn test:open`

### Linting (`yarn lint` runs pre-commit)
to check linting: `yarn lint`

to fix linting errors: `yarn lint:fix`
