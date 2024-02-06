
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.json",
  documents: './src/**/!(*.d).{ts,tsx,js,jsx}',
  generates: {
    "./src/types/graphql.ts": {
      plugins: ['typescript','typescript-operations','typescript-react-apollo'],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        withMutationFn: false,
        hooksImportFrom: '@apollo/react-hooks'
      }
    }
  }
};

export default config;
