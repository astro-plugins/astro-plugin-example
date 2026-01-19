// @ts-check
import { defineConfig } from 'astro/config';
import { marp } from 'astro-marp';
import { typst } from 'astro-typst';
import rehypeInfographic from 'rehype-infographic';

// https://astro.build/config
export default defineConfig({
  integrations: [
    typst({
      options: {
        remPx: 14,
      }
    }),
    marp({
      defaultTheme: 'am_blue'
    })
  ],
  markdown: {
    // Temporarily disable syntax highlighting to test plugin
    syntaxHighlight: false,
    rehypePlugins: [[rehypeInfographic, {}]]
  }
});
