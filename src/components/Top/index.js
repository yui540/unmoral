import React from 'react'
import LoadView from '../../containers/LoadView'

export default props => {
  const { chapter } = props

  switch (chapter) {
    case 'load':
      return <LoadView />
    case 'opening':
      return <h1>open: opening</h1>
  }
}
