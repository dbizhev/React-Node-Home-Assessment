import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobListingPage from './pages';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <JobListingPage /> } />
        <Route path="/:id" element={ <JobListingPage /> } />
      </Routes>
    </BrowserRouter>
  )
}


export default AppRouter;