export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'meta',
      type: 'meta',
      fieldset: 'meta'
    },
    {
      name: 'content',
      type: 'content'
    }
  ],
  fieldsets: [
    {
      name: 'meta',
      title: 'Meta',
      options: { collapsable: true, collapsed: true }
    }
  ]
}
