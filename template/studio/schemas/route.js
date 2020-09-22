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
      name: 'slug',
      type: 'slug'
    },
    {
      name: 'page',
      type: 'reference',
      to: [
        {
          type: 'page'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'page.meta.featuredImage'
    }
  }
}
