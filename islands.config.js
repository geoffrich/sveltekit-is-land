import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import fs from 'fs';
import { join } from 'path';
import { fileURLToPath, URL } from 'node:url'

// TODO: could this be a Vite plugin?
export default defineConfig(async () => {
	// TODO: improve logic, e.g. nested folders, Test.2.svelte
	const islandsFolder = join(__dirname, 'src/lib/islands');
	const islands = fs.readdirSync(islandsFolder);
	const input = islands.reduce((acc, fileName) => {
		const key = fileName.split('.')[0];
		acc[key] = join(islandsFolder, fileName);
		return acc;
	}, {});

	input['is-land'] = join(__dirname, 'node_modules/@11ty/is-land/is-land.js');

	return {
		build: {
			lib: {
				formats: ['es']
			},
			rollupOptions: {
				// in Vite 3.2, potentially multiple entries instead
				// https://github.com/vitejs/vite/pull/7047
				input,
				output: {
					dir: 'static/__islands',
					entryFileNames: '[name].js' // TODO: hash filenames?
				}
			}
		},
		// TODO: can we hook into SvelteKit somehow?
		plugins: [
			svelte({
				compilerOptions: {
					hydratable: true,
					css: false
				}
			})
		],
		resolve: {
			alias: {
				'$lib': fileURLToPath(new URL('./src/lib', import.meta.url))
			}
		}
	};
});
