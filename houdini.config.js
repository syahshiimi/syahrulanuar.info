/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: './schema.graphql',
	url: 'https://graphql.datocms.com/',
	watchSchema: {
		url: 'https://graphql.datocms.com/',
		headers: {
			Authorization: 'env:PUBLIC_DATOCMS_API_TOKEN'
		}
	},
	schemaPollHeaders: {
		url: 'https://graphql.datocms.com/',
		headers: {
			Authorization: 'env:PUBLIC_DATOCMS_API_TOKEN'
		}
	},
	plugins: {
		'houdini-svelte': {}
	}
};

export default config;
