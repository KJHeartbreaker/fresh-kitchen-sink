export default {
  widgets: [
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
                  buildHookId: '60f9b3aa75e5b72255b9b0fc',
                  title: 'Sanity Studio',
                  name: 'fresh-kitchen-sink-studio',
                  apiId: '6b9e72cf-1280-4de7-ab15-9a9960ee352d'
                },
                {
                  buildHookId: '60f9b3aa14314325eb4b05a4',
                  title: 'Blog Website',
                  name: 'fresh-kitchen-sink',
                  apiId: 'f4aaa06c-345a-4a3b-b208-d839af2ce9db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KJHeartbreaker/fresh-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fresh-kitchen-sink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
