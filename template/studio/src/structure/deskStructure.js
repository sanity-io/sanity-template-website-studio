import S from '@sanity/desk-tool/structure-builder'

const hiddenTypes = listItem => !['event', 'person'].includes(listItem.getId())

export default S.defaults()
