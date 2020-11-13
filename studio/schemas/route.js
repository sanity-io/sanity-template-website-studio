import client from 'part:@sanity/base/client'

function mySlugifyFn(input) {
  console.log(input)
  const query = '*[_id == $id][0]'
  const params = {id: input._ref}
  return client.fetch(query, params).then(doc => {
    console.log(doc)
    return doc.title.toLowerCase().replace(/\s+/g, '-')
  })
}

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'Title for internal purposes'
    },
    {
      name: 'page',
      type: 'reference',
      to: [
        {
          type: 'page'
        }
      ]
    },
    {
      name: 'slug',
      type: 'slug',
      validation: Rule =>
        Rule.required(),
      options: {
        source: 'page',
        slugify: mySlugifyFn
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'page.meta.featuredImage'
    }
  }
}
