import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/AboutPage'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class AboutPageStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "AboutPageStore",
			variables: false,
		})
	}
}

export async function load_AboutPage(params) {
	await initClient()

	const store = new AboutPageStore()

	await store.fetch(params)

	return {
		AboutPage: store,
	}
}
