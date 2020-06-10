'use strict'

let headerMaxLength = 72
let extraCommitMsgChars = 4

// If Travis CI is building a GitHub PR, the TRAVIS_PULL_REQUEST env will
// contain the PR number, e.g. "234". Since we're squashing PRs when merging,
// GitHub will append the PR number to the end of the final commit message in
// the form " (#234)". We need to subtract the length of this string from the
// maximum allowed commit message length. If we didn't do this, the merged
// commit would fail CI.
if (process.env.TRAVIS_PULL_REQUEST && process.env.TRAVIS_PULL_REQUEST !== 'false') {
  headerMaxLength -= extraCommitMsgChars + process.env.TRAVIS_PULL_REQUEST.length
} else if (process.env.CHANGE_ID && process.env.CHANGE_ID !== 'false') {
  // If Jenkins CI is building a GitHub PR using the Multibranch Pipeline,
  // the CHANGE_ID env will contain the PR number. Similar approach to the
  // Travis CI.
  headerMaxLength -= extraCommitMsgChars + process.env.CHANGE_ID.length
}

module.exports = {
  rules: {
    'header-max-length': [2, 'always', headerMaxLength]
  }
}
