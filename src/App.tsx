import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./ui/Header";
import Main from "./ui/Main";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto w-full max-w-[90rem]">
        <Header />
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
