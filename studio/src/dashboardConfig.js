export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2e73981e3aa5c6a603225c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gmjxcpyy',
                  apiId: 'b9e850e6-0bc4-4110-82d2-7fd55aae4096'
                },
                {
                  buildHookId: '5f2e739817794b27fb66ab05',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-w4yp8nao',
                  apiId: 'ead06f71-a0fd-4961-9063-9e2e6d738bf7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ali-Arsal/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-w4yp8nao.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
