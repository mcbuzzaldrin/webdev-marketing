export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60fa24f4b5db231fa64c50c9',
                  title: 'Sanity Studio',
                  name: 'webdev-marketing-studio',
                  apiId: '99fc7474-0386-437c-b712-a84a10bb977c'
                },
                {
                  buildHookId: '60fa24f429b58a1d8902dcf2',
                  title: 'Landing pages Website',
                  name: 'webdev-marketing',
                  apiId: '60ad972d-8280-4ffa-811a-4d4ba207eba2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mcbuzzaldrin/webdev-marketing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://webdev-marketing.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
