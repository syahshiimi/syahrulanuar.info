import type { CodegenConfig } from '@graphql-codegen/cli';

const requestHeaders = {
    headers: {
        Authorization: `Bearer 8583ae136cdb3a9bf4acecab001b3f `,
        'Content-Type': 'application/json'
    }
};
const config: CodegenConfig = {
    schema: [{ 'https://graphql.datocms.com/': { headers: requestHeaders } }],
    documents: './src/**/*.gql',
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        './src/libs/graphql/generated.ts': {
            plugins: ['typescript', 'typescript-operations', 'graphql-codegen-svelte-apollo']
        }
    }
};
export default config;
