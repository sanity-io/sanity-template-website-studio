export default {
  name: 'comment',
  type: 'document',
  title: 'Comments',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'website',
      type: 'url',
    },
    {
      name: 'status',
      type: 'string',
      options: {
        list: ['pending', 'approved', 'spam']
      }
    },
    {
      name: 'text',
      type: 'text'
    },
    {
      name: 'post',
      type: 'reference',
      to: [{type: 'post'}]
    }
  ]
}
