const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://notebook.afrijaldzuhri.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://notebook.afrijaldzuhri.com',
    title: 'Notebook',
    githubUrl: 'https://github.com/afrijaldz/notebook',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/afrijaldz" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: 'Blog', link: 'https://afrijaldzuhri.com' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Ijul', link: 'https://notebook.afrijaldzuhri.com' }],
    frontline: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'Afrijal Dzuhri Notebook and Mindmap',
    description: 'Documentation of what I learn',
    ogImage: null,
    docsLocation: 'https://github.com/afrijaldz/notebook',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "Afrijal Dzuhri's Notebook",
      short_name: 'Afrijal',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
