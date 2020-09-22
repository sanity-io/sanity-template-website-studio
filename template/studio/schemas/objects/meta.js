export default {
  name: 'meta',
  type: 'object',
  title: 'Meta',
  fields: [
    {
      name: 'hidden',
      type: 'boolean',
      title: 'Hide post',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publish at…'
    },
    {
      name: 'unpublishedAt',
      type: 'datetime',
      title: 'Unpublish at…'
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}]
        }
      ]
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      validation: Rule => Rule.required().warning('You should probably add an excerpt. You know, for SEO.')
    }
  ]
}
