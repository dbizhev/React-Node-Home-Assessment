import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobListingPage from './pages';
import JobDetailsPage from './pages/job-details';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <header className="App-header">Funnel Rolodex (MiniDash)</header>
      <Routes>
        <Route path='jobs/:id' element={ <JobDetailsPage /> } />
        <Route path="/" element={ <JobListingPage /> } />
        <Route path="/:id" element={ <JobListingPage /> } />
      </Routes>
    </BrowserRouter>
  )
}


export default AppRouter;