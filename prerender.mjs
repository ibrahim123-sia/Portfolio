// Injects the server-rendered app HTML into dist/index.html at build time,
// turning the SPA into a prerendered (SSG) page. Runs after the client and
// SSR builds (see package.json "build").
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const { render } = await import(
  pathToFileURL(resolve('dist-ssr/entry-server.js')).href
);

const html = render();
const indexPath = resolve('dist/index.html');
const template = readFileSync(indexPath, 'utf8');

if (!template.includes('<!--app-html-->')) {
  throw new Error('prerender: <!--app-html--> placeholder not found in dist/index.html');
}

writeFileSync(indexPath, template.replace('<!--app-html-->', html));
console.log(`prerendered dist/index.html (${html.length} chars of markup)`);
