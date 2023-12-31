import React from 'react'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  Avatar
} from '@nextui-org/react'
import { useAuth } from '../../hooks/useAuth'

export default function Header () {
  const { signInWithGoogle, signOut, session } = useAuth()
  const avatarUrl = session?.user.user_metadata.avatar_url
  return (
      <Navbar className="bg-zinc-900 rounded-b-xl w-full" position="static">

          <NavbarContent justify="start">
              <NavbarItem className="hidden md:flex ">
                  <h1 className='font-argentum font-extrabold capitalize font-3xl w-auto'>Expense Tracker</h1>
              </NavbarItem>

          </NavbarContent>
          <NavbarContent justify="end">
              <NavbarItem className="flex">
                  {!session
                    ? (
                        <Button variant="flat" onPress={signInWithGoogle} type="button">
                            <svg
                                className="w-4 h-4 mr-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 19"
                            >
                                <path
                                fillRule="evenodd"
                                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                                clipRule="evenodd"
                                />
                            </svg>
                            Sign in with Google
                        </Button>
                      )
                    : (
                        <div className="flex flex-row w-full space-x-7">
                            <Avatar isBordered src={avatarUrl} />
                            <Button variant="flat" onPress={signOut} type="submit">
                                sign out
                            </Button>
                        </div>
                      )}
              </NavbarItem>
              {/* <NavbarItem>
                  <Button variant='bordered' onPress={() => console.log(session)} type="submit" >
                      ola
                  </Button>
              </NavbarItem> */}
          </NavbarContent>
      </Navbar>
  )
}
