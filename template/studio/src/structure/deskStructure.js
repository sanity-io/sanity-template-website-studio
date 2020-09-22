import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import CommentList from '../components/CommentList'


const hiddenTypes = listItem => !['event', 'person'].includes(listItem.getId())



export const getDefaultDocumentNode = ({schemaType}) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view.component(CommentList).title('Comments')
    ])
  }
  return S.document().views([
    S.view.form()
  ])
}


export default S.defaults()
