import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/Autenticar'

// Ruta que requiere estar logueado
export function RutaPrivada({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}
