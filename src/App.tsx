import { Button } from "antd";
import AppLayout from "components/layouts/AppLayout";
import { AppProviders, ThemeContextProvider } from "components/providers";

function App() {
  return (
    <ThemeContextProvider>
      <AppProviders>
        <AppLayout>
          <div className="text-primary">red</div>
          <Button type="primary"> test</Button>
        </AppLayout>
      </AppProviders>
    </ThemeContextProvider>
  );
}

export default App;
