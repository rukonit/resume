import { defineConfig } from 'vite';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrgSite = repositoryName?.endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isUserOrOrgSite
  ? `/${repositoryName}/`
  : '/';

export default defineConfig({
  base,
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
});
