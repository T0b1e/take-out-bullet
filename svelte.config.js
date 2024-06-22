import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-static';

export default defineConfig({
  base: '/take-out-bullet/',
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: null,
      strict: false
    }),
    paths: {
      base: '/take-out-bullet'
    }
  }
});
