import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/take-out-bullet/',
	plugins: [sveltekit({
		adapter: {
			name: 'static',
			options: {
				pages: 'dist',
				assets: 'dist',
				fallback: null
			}
		}
	})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
	