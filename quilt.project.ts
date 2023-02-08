import {createProject, quiltWorkspace, quiltApp} from '@quilted/craft';
import {cloudflareWorkers} from '@quilted/cloudflare/craft';

export default createProject((project) => {
  project.use(
    quiltWorkspace(),
    quiltApp({
      browser: {
        entry: './browser.tsx',
      },
      server: {
        entry: './server.tsx',
      },
    }),
    cloudflareWorkers({pages: true}),
  );
});
