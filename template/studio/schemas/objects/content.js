export default {
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block'
    },
    {
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
          validation: Rule => Rule.required().warning(`Remember alternative text for people who can't see your image`),
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        }
      ]
    }
  ]
}
