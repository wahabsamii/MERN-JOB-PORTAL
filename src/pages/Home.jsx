import React from 'react'
import HeroSection from '../components/HeroSection'
import JobSection from '../components/JobSection'
import Cetagories from '../components/Cetagories'
import ExploreJobs from '../components/ExploreJobs'
import JobnovaSection from '../components/JobnovaSection'
import BestCompanies from '../components/BestCompanies'
import BlogSection from '../components/BlogSection'

export default function Home() {
  return (
    <>
    <HeroSection />
    <JobSection />
    <Cetagories />
    <ExploreJobs />
    <JobnovaSection />
    <BestCompanies />
    <BlogSection />
    </>
  )
}
