// import { PUBLIC_DATOCMS_API_TOKEN } from '$env/static/public';
// import { HoudiniClient } from '$houdini';
//
// export default new HoudiniClient({
// 	url: 'https://graphql.datocms.com/',
// 	fetchParams() {
// 		return {
// 			url: 'https://graphql.datocms.com',
// 			headers: {
// 				Authorization: PUBLIC_DATOCMS_API_TOKEN
// 			}
// 		};
// 	}
//
// 	// uncomment this to configure the network call (for things like authentication)
// 	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
// 	// fetchParams({ session }) {
// 	//     return {
// 	//         headers: {
// 	//             Authentication: `Bearer ${session.token}`,
// 	//         }
// 	//     }
// 	// }
// });

import { PUBLIC_DATOCMS_API_TOKEN } from '$env/static/public';
import { HoudiniClient } from '$houdini';
import { fetch } from '$houdini/plugins';

const fetchFn: RequestHandler = async ({ fetch, text, variables }) => {
	// make sure to use the fetch you were handed in case the user
	// needs a specific one
	const url = 'https://graphql.datocms.com';

	const result = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: PUBLIC_DATOCMS_API_TOKEN
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});

	return await result.json();
};

export default new HoudiniClient({
	url: 'https://graphql.datocms.com',
	pipeline: [fetch(fetchFn)]
});
