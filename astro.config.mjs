import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Start learning!',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting started with uDevices', link: '/guides/example/' },
					],
				},
				{
					label: 'References',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
