import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

// 1. Crear el contexto
const AuthContext = createContext()

// 2. El provider: envuelve toda la app y comparte el estado del usuario
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar si ya hay una sesión activa al cargar la app
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      
      setLoading(false)
    })

    // Escuchar cambios: login, logout, etc.
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => listener.subscription.unsubscribe()
  }, [])
  

  // Iniciar sesión
  async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { error }
  }

  // Cerrar sesión
  async function signOut() {
    await supabase.auth.signOut()
  }

  const value = {
    user,      // datos del usuario (email, id, etc.)
    loading,   // true mientras verifica la sesión
    signIn,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

// 3. Hook para usar el contexto fácilmente en cualquier componente
export function useAuth() {
  return useContext(AuthContext)
}