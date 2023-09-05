import { useState, useEffect } from 'react'
import supabase from '../utils/createSupabaseClient'

export function useAuth () {
  const [session, setSession] = useState(null)

  async function signOut () {
    const { error } = await supabase.auth.signOut()
    window.location.reload()
    error && console.error(error)
  }

  async function signInWithGoogle () {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173/dashboard'
      }
    })
    error && console.error(error)
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return { session, signInWithGoogle, signOut }
}
