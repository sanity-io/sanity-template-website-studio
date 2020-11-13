# <#< sanity.projectTitle >#>

_A studio for managing a website_

**Features:**

- WordPress-esque content models (but better)
- Types for pages, posts, routes, navigation, comments
- Split-pane view for viewing post comments (using incoming references)
- Deploys on Netlify

Deployed from [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-website-studio).

## Quick start

1. Clone this repository
2. `sanity install` in the studio folder on local (and `npm i -g @sanity/cli` if you don't have the CLI)
3. `sanity start` to start the studio
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
4. `sanity build` to build to production locally

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).
