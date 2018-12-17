import React from 'react'
import LoadView from '../../containers/LoadView'
import Opening from '../../containers/Opening'

export default props => {
  const { chapter } = props

  switch (chapter) {
    case 'load':
      return <LoadView />
    case 'opening':
      return <Opening />
    case 'top':
      return <h1>open: top-page</h1>
  }
}
