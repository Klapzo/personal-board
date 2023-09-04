import { Tooltip } from '@nextui-org/react'
import React from 'react'

function ActionsDropdownItem ({ icon, text, color, tooltip }) {
  return (
      <div className="relative flex items-center gap-2">
          <Tooltip content={tooltip}>
              <span className={`text-sm flex flex-row items-center gap-2 text-${color} cursor-pointer active:opacity-50`}>
                  {icon} {text}
              </span>

          </Tooltip>
      </div>
  )
}

export default ActionsDropdownItem
