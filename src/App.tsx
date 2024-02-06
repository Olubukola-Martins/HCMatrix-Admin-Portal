import { AppProviders, ThemeContextProvider } from "components/providers";
import AppRoutes from "routes";

function App() {
  return (
    <ThemeContextProvider>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </ThemeContextProvider>
  );
}

export default App;
