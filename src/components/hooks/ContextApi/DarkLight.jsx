import { createContext, useState, useContext } from "react";

export const Theme = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const handleToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <Theme.Provider value={{ theme, handleToggleTheme, setTheme }}>
            {children}
        </Theme.Provider>
    );
};

export const DarkLight = () => {
    const { theme, handleToggleTheme } = useContext(Theme);

    return (
        <div className={`p-4 h-lvh flex flex-col justify-center items-center ${theme === "dark" ? "bg-black" : "bg-white"}
`}>
            <h1 className="text-2xl ">Dark Light mode website</h1>
            <p className="text-lg">hello!!!! my react app v19</p>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={handleToggleTheme}>
                {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            </button>
        </div>
    );
};
