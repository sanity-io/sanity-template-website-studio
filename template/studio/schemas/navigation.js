export default {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'Title for internal purposes'
    },
    {
      name: 'slug',
      type: 'slug',
      description: 'Unique identifier to use in the code implementation'
    },
    /**
     * @TODO: Add recursive reference arrays here
     */
  ]
}
