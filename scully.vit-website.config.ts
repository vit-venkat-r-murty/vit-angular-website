import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'vit-website',
  outDir: './dist/static',
  routes: {},
  extraRoutes: [
    '/welcome',
    '/about-us',
    '/services',
    '/process',
    '/contact',
  ]
};
