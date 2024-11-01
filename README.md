# FastStore Plugin PoC

## How to

First of all you'll need to clone this repo and build it using `yarn build`.

Next you'll have to clone the [FastStore repo](https://github.com/vtex/faststore) at the `poc/plugins` branch.

Run `yarn install` on the monorepo root and cd into `packages/cli`. In the `packages/cli`, run `yarn build` and `yarn link`.

For the next step, clone the [starter](https://github.com/vtex-sites/starter) and switch to the same `poc/plugins`.

Change the path of the `@faststore/plugin-test` on the store's package.json to where you cloned this repo, run `yarn install`, then run `yarn link @faststore/cli`.

Finally run `yarn dev` on the store's directory and you should see the plugin page on http://localhost:3000/my-account.

If you make any changes to either faststore/cli or the plugin you'll have to rebuild them via `yarn build`.
