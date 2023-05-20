import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/GetHome'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class GetHomeStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "GetHomeStore",
			variables: false,
		})
	}
}

export async function load_GetHome(params) {
	await initClient()

	const store = new GetHomeStore()

	await store.fetch(params)

	return {
		GetHome: store,
	}
}
