import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";
import { getUser } from "./api/auth";
import { IUser } from "./types/auth";
import { createContext, useEffect, useState } from "react";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: IUser | null;
  setUser: (value: IUser | null) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value: IUser | null) => {},
});

const access = localStorage.getItem("access");

const getInitialTheme = (): boolean => {
  const isDark = localStorage.getItem("isDark");

  if (isDark === "true") {
    return true;
  }

  return false;
};

function App() {
  const [isDark, setIsDark] = useState(getInitialTheme());
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    let isOk = true;

    if (access) {
      getUser()
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }

          return response.json();
        })
        .then((json) => {
          if (isOk) {
            setUser(json);
          }
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", String(isDark));
  }, [isDark]);
  return (
    <BrowserRouter>
      <Context.Provider
        value={{ isDark: isDark, setIsDark: setIsDark, user, setUser }}
      >
        <RootRouter />
      </Context.Provider>
      <NotificationContainer />
    </BrowserRouter>
  );
}
export default App;
