import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostJob from './pages/PostJob'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import JobsDetails from './pages/JobsDetails';
import Contact from './pages/Contact';
import Application from './pages/Application';
import AllJobs from './pages/JobSeeker/AllJobs';
import MyApplications from './pages/JobSeeker/MyApplications';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminAllJobs from './pages/Admin/AllJobs';
import AddJob from './pages/Admin/AddJob';
import UpdateJob from './pages/Admin/UpdateJob';
import AllApplications from './pages/Admin/AllApplications';
import Dashboard from './pages/JobSeeker/Dashboard'
import About from './pages/About';
export default function App() {
  return (
    // <div className='text-white bg-black text-3xl'>App</div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post-job' element={<PostJob /> } />
      <Route path='/job-details/:id' element={<JobsDetails /> } />
      <Route path='/contact' element={<Contact /> } />
      <Route path='/apply' element={<Application /> } />
      <Route path='/about-us' element={<About /> } />
      {/* User Dashboard */}
      <Route path="/dashboard/seeker" element={<Dashboard />}>
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="my-applications" element={<MyApplications />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/dashboard/admin" element={<AdminDashboard />}>
          <Route path="all-jobs" element={<AdminAllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="update-job" element={<UpdateJob />} />
          <Route path="all-applications" element={<AllApplications />} />
        </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
