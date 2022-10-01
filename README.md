# SvelteKit + `<is-land>`

This is an experiment with adding partial hydration to a SvelteKit app with [@11ty/is-land](https://github.com/11ty/is-land), a "framework independent partial hydration islands architecture implementation."

By using the provided `Island.svelte` component, you can only download the JS and hydrate individual components instead of the whole page.

## Getting started

Create a component in `/src/lib/islands`. On your page, import the `Island.svelte` component and the component you would like to render inside the island.

For partial hydration to work, you need to [disable client-side rendering](https://kit.svelte.dev/docs/page-options#csr) for the page. Otherwise, the entire page will hydrate.

```svelte
<script>
	import Count from '$lib/islands/Count.svelte';
	import Island from '$lib/Island.svelte';
</script>

<h2>Without props</h2>

<Island component={Count} name="Count" />

<h2>With props</h2>

<Island component={Count} name="Count" props={{ title: 'island' }} />

<h2>Customizing island options</h2>

<Island component={Count} name="Count" islandProps={{ 'on:interaction': true }} />
```

### Props

- `component`: the component to render. This is used to server-render the component
- `name`: the name of the component file. This is used to import the component on the client when hydration occurs.
- `props`: an object of props to pass to the component
- `islandProps`: an object of props to pass to the `<is-land>`. See the [is-land documentation](https://github.com/11ty/is-land#usage).

See the source code for [+page.svelte](https://github.com/geoffrich/sveltekit-is-land/blob/main/src/routes/%2Bpage.svelte) to see a full example.

## How it works

The bulk of the work is in `/src/lib/Island.svelte`. This component renders an `<is-land>` element with a `<template data-island>` that initializes the provided component using the [client-side component API](https://svelte.dev/docs#run-time-client-side-component-api).

So we can import the island components independently, there are two build steps: first we build the components in `$lib/islands` using Vite with `islands.config.js`, and then we build the SvelteKit app as normal. A separate entry point is generated for each island (e.g. `/src/lib/islands/Count.svelte` -> `/static/__islands/Count.js`). The islands are output in the `static/` folder so that it is deployed with the app. We can't go through the normal SvelteKit build pipeline since when CSR is disabled, no client-side JS will load.

At dev time, no separate build step is required, since we can import Svelte components directly from `/src/lib/islands` and the Vite dev server will handle it.

## Current limitations

These are the current limitations. If you have ideas on how to fix some of these, [let me know!](https://github.com/geoffrich/sveltekit-is-land/issues)

- All island components must be placed in `/src/lib/islands`
- Partial hydration only works once you have client-side rendering (CSR) [turned off](https://kit.svelte.dev/docs/page-options#csr). Once you turn it back on (which includes navigating to a page with CSR enabled), all further pages will be fully-hydrated unless you use [data-sveltekit-reload](https://kit.svelte.dev/docs/link-options#data-sveltekit-reload) on your links
- You can't use SvelteKit-specific imports in your islands (e.g. `$app/*`, `$env/*`, `$lib/*`). While it may appear to work in dev, it will fail at build time since the island components are bundled separately and don't have access to the same aliases. If you need access to these imports, you can pass them into your islands as a prop.
- Since the island is created using the [client-side component API](https://svelte.dev/docs#run-time-client-side-component-api) in a generated `<script>`, all props passed to the island must be serializable with [devalue](https://github.com/Rich-Harris/devalue).
- Because the client-side component API doesn't support passing slots, you can't use slots with an island component. Components inside the island, however, can use slots.
- The island will not be in the same component tree, so you can't use things like [context](https://svelte.dev/tutorial/context-api)
- HMR during dev does not work with CSR disabled.
- Possibly other things! I've only tried this with limited use-cases.

## Gotchas

- If you change which component you pass to the island, make sure to update the `name` prop as well. Otherwise, the wrong component will be hydrated. (If you have an idea of how to design this so users do _not_ need to pass the name prop, please [let me know!](https://github.com/geoffrich/sveltekit-is-land/issues))
- Because the dev-time and build-time pipelines are different (one uses SvelteKit's Vite process, the other has a separate config), some things may work in dev (like `$app/*` imports) that fail at build time.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
