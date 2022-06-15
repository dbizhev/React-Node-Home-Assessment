import "./App.css";
import JobContextProvider from './context/jobs.context';
import AppRouter from './routes';

function App() {
  return (
    <JobContextProvider>
      <AppRouter />
    </JobContextProvider>
  )
}

export default App;
