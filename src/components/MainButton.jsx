import React from 'react'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
export default function MainButton ({ children, rightIcon }) {
  return (
      <div className="flex items-center justify-center h-36">
          <Link to="dashboard">
              <Button
          radius="full"
          endContent={rightIcon}
          size="lg"
          className="font-bold bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
                  {children}
              </Button>
          </Link>
      </div>
  )
}
