import React from 'react'

function ActionsDropdownItem ({ icon, text, color }) {
  return (
      <span className={`text-sm flex flex-row items-center gap-2 text-${color}-400 cursor-pointer active:opacity-50`}>
          {icon} {text}
      </span>
  )
}

export default ActionsDropdownItem
