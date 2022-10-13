import { createContext } from "react"

const DEFAULT_VALUE = [
  {},
  () => {},
]


export const UserContext = createContext(DEFAULT_VALUE)