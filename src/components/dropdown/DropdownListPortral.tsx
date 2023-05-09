import React from 'react'
import ReactDOM from 'react-dom'
import DropdownList from './DropdownList'

const DropdownListWithPortal = () => {
  const portalContainer = document.getElementById(
    'portal-container',
  ) as HTMLElement
  return ReactDOM.createPortal(<DropdownList />, portalContainer)
}

export default DropdownListWithPortal
