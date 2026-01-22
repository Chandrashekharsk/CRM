import { createContext, useContext, useEffect, useState } from "react"
import { getUsers, saveUsers } from "../data/data";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedUser"))
    if (storedUser) setUser(storedUser)
  }, [])

  const login = (email, password) => {
    const users = getUsers()
    const found = users.find(
      u => u.email === email && u.password === password
    )

    if (!found) return false

    localStorage.setItem("loggedUser", JSON.stringify(found))
    setUser(found)
    return true
  }

  const register = (data) => {
    const users = getUsers()

    const exists = users.find(u => u.email === data.email)
    if (exists) return false

    const newUser = {
      id: Date.now(),
      ...data
    }

    const updated = [...users, newUser]
    saveUsers(updated)

    localStorage.setItem("loggedUser", JSON.stringify(newUser))
    setUser(newUser)
    return true
  }

  const logout = () => {
    localStorage.removeItem("loggedUser")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => useContext(AuthContext)
