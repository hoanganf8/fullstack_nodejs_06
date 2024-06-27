import { useContext, useEffect } from "react";
import { AppContext } from "../App";

export default function HeaderTop() {
  const { theme, setTheme } = useContext(AppContext);
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);
  return (
    <div>
      <h1>HEADER</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}
