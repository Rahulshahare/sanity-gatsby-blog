export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5df17cd00122323b46bf661c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8po1c2b4',
                  apiId: '33a5ff51-c058-4e7b-9457-4065ee12e21b'
                },
                {
                  buildHookId: '5df17cd0063715a1075b3ff3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n359s5ai',
                  apiId: '1e9cb81d-2a60-4805-ace5-9f15f26f45dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rahulshahare/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n359s5ai.netlify.com', category: 'apps'}
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
