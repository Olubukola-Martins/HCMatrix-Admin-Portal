import {
  AppProviders,
  ThemeContextProvider,
  AuthContextProvider,
} from "components/providers";
import AppRoutes from "routes";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <AppProviders>
          <AppRoutes />
        </AppProviders>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
