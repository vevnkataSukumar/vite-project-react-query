import {createContext, useState} from 'react';
// import {createRoot} from 'react-dom/client';

export const themes = ['light', 'dark',  'custom'];
export const ThemeContext = createContext();

// {
//   themes,
//   themeVal: themes[0],
//   setTheme: () => {},
// }

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(themes[0]);
  // const [isDark, setIsDark] = useState(false);
  const toggleTheme = (val) => {
    // setIsDark(!isDark);
    setTheme(val);
  };
  return (
    <ThemeContext.Provider value={{ theme, themes, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// function MainSection() {
//   const {themeVal, themes, setTheme} = useContext(ThemeContext);
//   const currentIndex = themes.indexOf(themeVal);

//   const toggleTheme = () => currentIndex === themes.length - 1
//   ? setTheme(themes[0])
//   : setTheme(themes[currentIndex + 1]);

//   return (
//     <div className={`container ${themeVal}`}>
//       <p>{`Current Theme: ${themeVal}`}</p>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   )
// }

// export default MainSection;

// function App() {
//     return (
//         <ThemeContext.Provider value={{themeVal, themes, setTheme}}>
//             <MainSection />
//         </ThemeContext.Provider>
//     );
// }

// const root = createRoot(document.getElementById('root'));

// root.render(<App />);