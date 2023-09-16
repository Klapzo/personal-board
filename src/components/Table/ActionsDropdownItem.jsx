import React from 'react'

function ActionsDropdownItem ({ icon, text, color }) {
  return (
      <div className="relative flex items-center gap-2">
          <span
        className={`text-sm flex flex-row items-center gap-2 text-${color} cursor-pointer active:opacity-50`}
      >
              {icon} {text}
          </span>
      </div>
  )
}

export default ActionsDropdownItem
