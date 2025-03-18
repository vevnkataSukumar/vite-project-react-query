import { ThemeContext, ThemeContextProvider } from "./CoderByte/context-api";
import RouteComponent from "./routes"

function App() {
  return (
      <ThemeContextProvider>
        <RouteComponent />
      </ThemeContextProvider>
  )
}

export default App;
