import { PUBLIC_DATOCMS_API_TOKEN } from '$env/static/public';
import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
	url: 'https://graphql.datocms.com/',
	fetchParams() {
		return {
			url: 'https://graphql.datocms.com',
			headers: {
				Authorization: PUBLIC_DATOCMS_API_TOKEN
			}
		};
	}

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	// fetchParams({ session }) {
	//     return {
	//         headers: {
	//             Authentication: `Bearer ${session.token}`,
	//         }
	//     }
	// }
});
