import { createContext, useState, ReactNode } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeContextType {
    darkTheme: boolean,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
    darkTheme: false,
    toggleTheme: () => { }
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
        document.body.className = darkTheme ? "light-theme" : "dark-theme";

    }
    return (
        <ThemeContext.Provider value={{
            darkTheme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
};

export {
    ThemeContext,
    ThemeProvider
}
