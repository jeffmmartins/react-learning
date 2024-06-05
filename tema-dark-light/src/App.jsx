import { useCallback, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { AppCOntainer, MainSection } from './components/app.style';
import { Button } from './components/button.style';
import { themes } from './themes';


function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  // memorizar uma função
  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  const handleThemeSwitch = () => {
    const newTheme = getOpositeTheme();
    setCurrentTheme(newTheme);
  };

  return (
    
      <ThemeProvider theme={themes[currentTheme]}>
        <AppCOntainer>
          <MainSection>
            <h1>You are in {currentTheme} mode</h1>
            <Button onClick={handleThemeSwitch}>
              switch to {getOpositeTheme()} mode 
            </Button>
          </MainSection>
        </AppCOntainer>
      </ThemeProvider>
    
  )
}

export default App
