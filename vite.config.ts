import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        // https://www.tampermonkey.net/documentation.php?locale=en
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'impossible98/livestream-helper',
        match: ['https://live.bilibili.com/*'],
        name: 'Live Stream Helper',
        description: 'Live Stream Helper.',
        author: 'impossible98',
        homepageURL:
          'https://github.com/impossible98/livestream-helper-extension',
        license: 'MIT',
        // https://greasyfork.org/en/scripts/501655-live-stream-helper
      },
    }),
  ],
});
