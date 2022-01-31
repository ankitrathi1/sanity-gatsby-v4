export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61f7e01b663ebfcf61fe4ce7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-v-4-studio',
                  apiId: '049d9dc0-dbf8-4e68-920b-2fdcdcd5c1df'
                },
                {
                  buildHookId: '61f7e01bf18a45b84f01f952',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-v-4',
                  apiId: '95c21fd6-f212-4cad-bd91-03850d98dd7a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ankitrathi1/sanity-gatsby-v4',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-v-4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
