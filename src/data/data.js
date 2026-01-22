// src/data/data.js

const DEFAULT_USERS = [
  {
    id: 1,
    name: "Admin One",
    email: "admin@test.com",
    password: "admin123",
    role: "admin"
  },
  {
    id: 2,
    name: "Employee One",
    email: "employee@test.com",
    password: "emp123",
    role: "employee"
  }
]

// initialize users
export const getUsers = () => {
  const stored = localStorage.getItem("users")
  if (!stored) {
    localStorage.setItem("users", JSON.stringify(DEFAULT_USERS))
    return DEFAULT_USERS
  }
  return JSON.parse(stored)
}

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users))
}
