import React from 'react'
import QueryContainer from 'part:@sanity/base/query-container'
import Spinner from 'part:@sanity/components/loading/spinner'
import Snackbar from 'part:@sanity/components/snackbar/default'
import DocumentList from '../components/DocumentList'

export default function Comments ({document}) {
  const {published} = document

  if (!published) {
    return <div>Post isn't published yet</div>
  }
  return (<QueryContainer query={`*[_type == "comment" && $id == post._ref]`} params={{id: published._id.replace('drafts.', '')}}>
    {({result, loading, error, onRetry}) => {
      if (error) {
        return (
          <Snackbar
            kind='error'
            isPersisted
            actionTitle='Retry'
            onAction={onRetry}
            title='An error occurred while loading items:'
            subtitle={<div>{error.message}</div>}
          />
        )
      }

      if (loading) {
        return (
          <div>
            {loading && <Spinner center message='Loading items…' />}
          </div>
        )
      }

      if (!result) {
        return null
      }
      return (
        <div>
          {result && <DocumentList documents={result.documents} />}
        </div>
      )
    }}
  </QueryContainer>)
}
