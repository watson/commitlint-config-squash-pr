# commitlint-config-squash-pr

Sharable [`commitlint`] config for enforcing a maximum commit message
header length, taking into account the larger size of squashed PR
commit messages generated when using the "Squash and merge" button in
GitHub PRs.

When using the "Squash and merge" button on a GitHub PR, the PR ID (e.g.
234) will be appended to the end of the resulting squashed commit
message in the form ` (#234)`. This makes the final commit message
header longer than the commit message header that `commitlint` validated
in the PR, potentially resulting in the final commit failing to pass CI.

This module takes this into account when validating the commit message
before the PR is merged.

[![npm](https://img.shields.io/npm/v/commitlint-config-squash-pr.svg)](https://www.npmjs.com/package/commitlint-config-squash-pr)
[![build status](https://travis-ci.org/watson/commitlint-config-squash-pr.svg?branch=master)](https://travis-ci.org/watson/commitlint-config-squash-pr)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install commitlint-config-squash-pr --save-dev
```

## Usage example

In this example we're extending the popular
[`@commitlint/config-conventional`] ruleset by using a local
`commitlint.config.js` file:

```js
// commitlint.config.js
module.exports = {
  extends: [
    '@commitlint/config-conventional',
    'squash-pr' // the commitlint-config- prefix is implied
  ]
}
```

Read more about [Sharable configuration].

## Supported CI systems

- Travis CI

## License

[MIT](LICENSE)

[`commitlint`]: https://github.com/marionebl/commitlint
[`@commitlint/config-conventional`]: https://www.npmjs.com/package/@commitlint/config-conventional
[Sharable configuration]: https://marionebl.github.io/commitlint/#/reference-configuration?id=shareable-configuration
