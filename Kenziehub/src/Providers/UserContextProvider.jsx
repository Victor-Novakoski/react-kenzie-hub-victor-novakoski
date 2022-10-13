import { useLocalStorage } from "use-hooks"
import { UserContext } from "../contexts/UserContext"

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', '')

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;
