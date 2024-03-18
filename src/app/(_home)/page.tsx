import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoAJ from '@/components/brand/LogoAJ';
import type { Metadata } from 'next';
import JobSearchBoxHome from '@/components/JobSearchBoxHome';
import Top7JobTypes from '@/components/Top7JobTypes';
import JobCategoryAndLocationLinks from '@/components/links/JobCategoryAndLocationLinks';
import AusUniLogos from '@/components/AusUniLogos';
import AmericaUniLogos from '@/components/AmericaUniLogos';
import { getContentRegion } from '@/actions/getContentRegion';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: '  Academic Jobs: All Higher Ed Positions Locally and Globally.', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Search for academic positions, research, science and university staff jobs here. Find higher ed jobs at all universities today!',
  keywords:
    'Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs',
};
export default async function myPage() {
 
 
  const contentRegion = await getContentRegion();
  //console.log(process.env.NODE_ENV, process.env.REACT_APP_ENV);
  // let showJobElephant = true;
  // showJobElephant = false;
  return (
   
     <main className=" mx-auto">

        <div className="h-[25vh] flex flex-col items-center justify-end">
       
          <img
            // src="https://academicjobs.s3.amazonaws.com/img/_misc/academic-jobs-logo.png"
            src="sciencejobs-logo.png"
            alt="sciencejobs Logo"
            className="pl-4 w-[20rem] mb-[1rem] "
          />
        </div>

        {/* Job Search Form */}
        <div className="w-full  max-w-[700px] flex flex-col items-top  mx-auto mb-24">
        <JobSearchBoxHome />
      </div>


      <div id="section" className="bg-slate-200 full-width py-4 mb-16">
        <div className="md:hero-content flex flex-col lg:flex-row mx-auto md:items-start py-12 max-w-screen-lg px-4">
          <h1 className="text-2xl font-normal sm:text-right text-gray-400 m-0 pb-8  md:px-0">
            <span className="md:text-6xl font-bold text-gray-500 pb-4 ">
              Science Jobs: <br />
            </span>{' '}
            Science positions locally & globally
          </h1>

          <div>
          <p className="md:px-7 mb-4 mt-6">
              Discover top-tier Science roles in the world. Begin your search for Science Jobs,
             university positions, and industry opportunities. Explore and apply for a range of roles, including
            researcher, and senior
              academic positions, available nationally and internationally.
            </p>
            <p className="md:px-7">
              Whether you're an aspiring or established professor, researcher,
              lecturer, our platform offers
              the most current opportunities in science globally. Connect with
              your next career move in the science sector through our
              comprehensive online job board. Find your next science job now!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Panel */}
      <div
        id="section"
        className="mt-[-1rem] px-5"
      >

<div className="max-w-screen-xl mx-auto">
<div className=" mx-auto mt-8 mb-8">
        {/* <h2 className="underline-full"> Top University Employer Rankings</h2> */}
        <div className="bg-white flex flex-col">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-8 text-left">
            <div className="/academic-hub/happiness-and-academics/">
              <div className="card bg-slate-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> Top University Employers USA </h2>
                  <a className=" text-gray-400"> 10 Dec, 2023</a>
                </div>
                <figure>
                  <img
                    width={1280}
                    height={380}
                    src="/academic-job-postings/harvard-university.jpg"
                    alt="Happiness and Academics: Scott Galloway's Algebra of hub"
                  />
                </figure>

                <ul className=" p-4 pl-12 list-disc text-gray-500">
                  <a href="https://www.academicjobs.com/employers/harvard-university/3100">
                    Harvard University
                  </a>
                  <a href="https://www.academicjobs.com/employers/massachusetts-institute-of-technology/3103">
                    {' '}
                    <br /> Massachusetts Institute of Technology (MIT)
                  </a>
                  <a href="https://www.academicjobs.com/employers/stanford-university/3101">
                    {' '}
                    Stanford University
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/university-of-california-berkeley/3105">
                    {' '}
                    University of California Berkeley (UCB)
                  </a>
                  <a href="https://www.academicjobs.com/employers/caltech/3128">
                    {' '}
                    California Institute of Technology (Caltech)
                  </a>
                </ul>

                {/* <Link
                  to={'https://www.academicjobs.com/the-university-rankings'}
                  className="btn btn-aj btn-sm w-1/4 mx-auto my-2 mb-5"
                >
                  View List
                </Link> */}
              </div>
            </div>
            {/* /top-10-australian-universities */}
            <div className="">
              <div className="card bg-slate-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    {' '}
                    Top University Employers Australia{' '}
                  </h2>
                  <a className=" text-gray-400"> 10 Dec, 2023</a>
                </div>
                <figure>
                  <img
                    width={1280}
                    height={380}
                    src="/academic-job-postings/university-of-sydney.jpg"
                    alt="Top Academic Jobs Australia"
                    className="h-[5rem]"
                  />
                </figure>
                <ul className=" p-4 pl-12 list-disc text-gray-500">
                  <a href="https://www.academicjobs.com/employers/queensland-university-of-technology-qut-/3786">
                    Queensland University of Technology (QUT)
                  </a>
                  <a href="https://www.academicjobs.com/employers/bond-university/3785/">
                    {' '}
                    Bond University
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/the-university-of-sydney/3171">
                    {' '}
                    The University of Sydney
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/australian-national-university/3739">
                    {' '}
                    Australian National University (ANU)
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/monash-university/3182/">
                    {' '}
                    Monash University
                  </a>
                </ul>
                {/* <Link
                  to={'https://www.academicjobs.com/the-university-rankings'}
                  className="btn btn-aj btn-sm w-1/4 mx-auto my-2 mb-5"
                >
                  View List
                </Link> */}
              </div>
            </div>
            <div className="/academic-hub/how-to-land-your-dream-college-job-a-step-by-step-guide/">
              <div className="card bg-slate-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> Top University Employers UK </h2>
                  <a className=" text-gray-400"> 06 Dec, 2023</a>
                </div>
                <figure>
                  <img
                    width={1280}
                    height={380}
                    src="/academic-job-postings/top-universities-worldwide.jpg"
                    alt="How to Land Your Dream College Job: A Step-by-Step Guide"
                    className="h-[5rem]"
                  />
                </figure>
                <ul className=" p-4 pl-12 list-disc text-gray-500">
                  <a href="https://www.academicjobs.com/employers/university-of-oxford/3099">
                    University of Oxford
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/imperial-college-london/3129">
                    {' '}
                    Imperial College London
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/university-of-cambridge/12635">
                    {' '}
                    University of Cambridge
                    <br />
                  </a>
                  <a href="https://www.academicjobs.com/employers/university-of-edinburgh/12681">
                    {' '}
                    University of Edinburgh
                    <br />
                  </a>
                  <a href=""> King’s College London</a>
                </ul>
                {/* <Link
                  href={'https://www.academicjobs.com/career-help'}
                  className="btn btn-aj btn-sm w-1/4 mx-auto my-2 mb-5"
                >
                  View List
                </Link> */}
              </div>
            </div>
          </ul>
        </div>
      </div>
  </div>
        {/* <div className="max-w-screen-xl mx-auto"> */}
       
     
          {/* <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl mt-20 shadow-md">
            Top Science Jobs Today
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.com/jobs/Assistant-Professor-in-Pasifika-Theater-and-Performance-Studies,-UCLA/76215/"
                        className="text-blue-500 font-bold"
                      >
                        Assistant Professor in Pasifika Theater and Performance
                        Studies, UCLA
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Los Angeles, California,USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">5 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/assistant-associate-professor-of-environmental-toxicology-tenure-track-appointment/78925/"
                        className="text-blue-500 font-bold"
                      >
                       Assistant/Associate Professor of Environmental Toxicology (tenure track appointment)
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of California Davis</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Davis, CA, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">16 Jan, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.com/jobs/Project-Director-DHSI-Grant-Academic-Affairs/75567/"
                        className="text-blue-500 font-bold"
                      >
                        Project Director DHSI Grant - Academic Affairs
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of Texas Permian Basin</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Odessa, Texas,USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">1 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/immunogenetics-and-histocompatibility-laboratory-director-health-sciences-open-rank-clinical-professor/73108/"
                        className="text-blue-500 font-bold"
                      >
                        Immunogenetics and Histocompatibility Laboratory
                        Director/Health Sciences Open Rank Clinical Professor
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Los Angeles, CA, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com"> Aug 3, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/computer-science-engineering-lecturer/72982//"
                        className="text-blue-500 font-bold"
                      >
                        University of Minnesota Twin Cities
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of Minnesota Twin Cities</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Minneapolis, Minnesota, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Jan 1, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/clinical-instructor-clinical-professor/73147/"
                        className="text-blue-500 font-bold"
                      >
                        Clinical Instructor - Clinical Professor
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of Michigan</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Ann Arbor, MI, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Jan 17, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/research-specialist-b-c/78662/"
                        className="text-blue-500 font-bold"
                      >
                        Research Specialist B/C
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of Pennsylvania</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Philadelphia, PA, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Jan 17, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/clinical-associate-professor-of-leadership/78640/"
                        className="text-blue-500 font-bold"
                      >
                        Clinical Associate Professor of Leadership
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of Chicago</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Chicago, IL, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Jan 19, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/open-rank-in-school-counseling-psychology/64801"
                        className="text-blue-500 font-bold"
                      >
                        Research Fellow In Natural Language Processing
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of Michigan</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Ann Arbor, MI, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">17 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/employers/johns-hopkins-university/3130/"
                        className="text-blue-500 font-bold"
                      >
                        Visiting Graduate Fellowship in the History of Science
                        and Technology
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Johns Hopkins University</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Baltimore, MD, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Jan 21, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/assistant-professor-or-associate-professor-complex-family-planning-division/44611/"
                        className="text-blue-500 font-bold"
                      >
                        Assistant Professor or Associate Professor - Complex
                        Family Planning Division
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Yale University</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">New Haven, CT, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">6 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/director-of-alumni-engagement/72223"
                        className="text-blue-500 font-bold"
                      >
                        Director of Alumni Engagement
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of Pennsylvania</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Philadelphia, PA, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">16 Jan, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/Executive-Officer---Full-time---Permanent---Robina---Gold-Coast/69249/"
                        className="text-blue-500 font-bold"
                      >
                        Executive Officer - Full time - Permanent - Robina -
                        Gold Coast
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Bond University</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Gold Coast QLD, Australia</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">26 Dec, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/client-services-officer/70860/"
                        className="text-blue-500 font-bold"
                      >
                        Client Services Officer
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Queensland University of Technology</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Kelvin Grove Brisbane, QLD</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">1 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/pediatrics-allergy-immunology-rheumatology-health-sciences-series/73113/"
                        className="text-blue-500 font-bold"
                      >
                        Pediatrics Allergy / Immunology / Rheumatology - Health
                        Sciences Series
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Los Angeles, CA, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com"> Jan 10, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/jobs/clinical-positions-in-cardiology-central-coast-2023-2024/73047/"
                        className="text-blue-500 font-bold"
                      >
                        Clinical Positions in Cardiology (Central Coast)
                        2023-2024 Apply Now
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Los Angeles, CA, USA</Link>
                      </li>
                      <li>
                        <Link target="_blank" to="https://www.academicjobs.com">Jun 29, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link className="text-[#00aeef] mt-4 mb-4 px-2 font-bold" target="_blank" to="https://www.academicjobs.com/jobs/">
            view more top jobs →
          </Link> */}


          {/* <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl mt-20 shadow-md">
            Top Cities for Science Jobs
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link target="_blank" to="https://www.academicjobs.com/USA/" className="text-[#00aeef] font-bold">
                        USA
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/boston/">Boston</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/new-york/">New York</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/los-angeles/">Los Angeles</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/san-francisco/">San Francisco</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/chicago/">Chicago</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/san-diego/">San Diego</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/washington-dc/">Washington DC</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/philadelphia/">Philadelphia</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/atlanta/">Atlanta</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/seattle/">Seattle</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/pittsburgh/">Pittsburgh</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/new-haven/">New Haven</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        target="_blank" to="https://www.academicjobs.com/Australia/"
                        className="text-[#00aeef] font-bold"
                      >
                        Australia
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/melbourne/">Melbourne</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/sydney/">Sydney</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/brisbane/">Brisbane</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/gold-coast/">Gold Coast</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/canberra/">Canberra</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/perth/">Perth</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/adelaide/">Adelaide</Link>
                      </li>
                    </ul>
                    <li className="mb-1 mt-4">
                      <Link target="_blank" to="https://www.academicjobs.com/UK/" className="text-[#00aeef] font-bold">
                        UK
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/london/">London</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/edinburgh/">Edinburgh</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/manchester/">Manchester</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link target="_blank" to="https://www.academicjobs.com/Canada/" className="text-[#00aeef] font-bold">
                        Canada
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/toronto/">Toronto</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/vancouver/">Vancouver</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/montreal/">Montreal</Link>
                      </li>
                    </ul>
                    <li className="mb-1 mt-4">
                      <Link target="_blank" to="https://www.academicjobs.com/Asia/" className="text-[#00aeef] font-bold">
                        Asia
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/hong-kong/">Hong Kong</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/beijing/">Beijing</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/tokyo/">Tokyo</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/singapore/">Singapore</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link target="_blank" to="https://www.academicjobs.com/Europe/" className="text-[#00aeef] font-bold">
                        Europe
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/paris/">Paris</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/zurich/">Zurich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/munich/">Munich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/amsterdam/">Amsterdam</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/copenhagen/">Copenhagen</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/stockholm/">Stockholm</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl mt-20 shadow-md">
            Top Universities To Work For
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/employers/queensland-university-of-technology/3786/"
                        className="text-[#003463] font-bold"
                      >
                        Queensland University of Technology (QUT)
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/QUT-lecturer/">QUT Lecturing Jobs</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/QUT-research/">QUT Research Jobs</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/QUT-professor/">
                          QUT Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/QUT-Executive/">QUT Executive</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/QUT-Administration/">
                          QUT Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/QUT-Human-Resources/">
                          QUT Human Resources
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/QUT-jobs/">QUT Jobs</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        target="_blank" to="https://www.academicjobs.com/employers/bond-university/3785/"
                        className="text-orange-500 font-bold"
                      >
                        Bond University
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/bond-lecturer/">
                          Bond Lecturing Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/bond-research/">
                          Bond Research Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/bond-professor/">
                          Bond Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/bond-Executive/">Bond Executive</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/bond-Administration/">
                          Bond Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/bond-Human-Resources/">
                          Bond Human Resources
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/bond-jobs/">Bond Jobs</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        target="_blank" to="https://www.academicjobs.com/employers/harvard-university/3100/"
                        className="text-[#A51C30] font-bold"
                      >
                        Harvard University
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/harvard-lecturer/">
                          Harvard Lecturing Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/harvard-research/">
                          Harvard Research Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/harvard-professor/">
                          Harvard Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/harvard-Executive/">
                          Harvard Executive
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/harvard-Administration/">
                          Harvard Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/harvard-Human-Resources/">
                          Harvard Human Resources
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/harvard-jobs/">Harvard Jobs</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        target="_blank" to="https://www.academicjobs.comhttps://www.academicjobs.com/employers/university-of-california-san-diego/3149/"
                        className="text-[#192847] font-bold"
                      >
                        University of California Las Angeles (UCLA)
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/UCLA-lecturer/">
                          UCLA Lecturing Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/UCLA-research/">
                          UCLA Research Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/UCLA-professor/">
                          UCLA Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/UCLA-Executive/">UCLA Executive</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/UCLA-Administration/">
                          UCLA Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/UCLA-Human-Resources/">
                          UCLA Human Resources
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/jobs/UCLA-jobs/">UCLA Jobs</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          {/* <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#00aeef] text-[#00aeef] rounded-3xl mt-20 shadow-md">
            <Link target="_blank" to="https://www.academicjobs.com/the-university-rankings/">
              The University Rankings/ Top Academic Careers
            </Link>
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
                <div className="column">
                  <ul className="">
                    <ul className="pb-4">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/harvard-university/3100/">
                          {" "}
                          Harvard University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/stanford-university/3101/">
                          {" "}
                          Stanford University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/university-of-cambridge/12635/">
                          {" "}
                          University of Cambridge
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/massachusetts-institute-of-technology/3103/">
                          MIT
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/university-of-california-berkeley/3105/">
                          {" "}
                          University of California, Berkeley
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/princeton-university/3104/">
                          {" "}
                          Princeton University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/university-of-oxford/3099/">
                          {" "}
                          University of Oxford
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/columbia-university/3127/">
                          {" "}
                          Columbia University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/caltech/3128/">Caltech</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/University-of-Chicago/3126/">
                          {" "}
                          University of Chicago
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/yale-university/3125/">
                          {" "}
                          Yale University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/Cornell-University/3138/">
                          Cornell University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/university-of-california-los-angeles/3136/">
                          UCLA
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/university-of-pennsylvania/3131/">
                          UPenn
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/johns-hopkins-university/3130/">
                          Johns Hopkins University (JHU)
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/university-college-london/12527/">
                          University College London (UCL)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/eth-zurich/3132/">ETH Zurich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/university-of-tokyo/3155/">
                          The University of Tokyo (UTokyo)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/new-york-university-nyu/3144/">
                          New York University (NYU)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link target="_blank" to="https://www.academicjobs.com/employers/duke-university/3139/">
                          {" "}
                          Duke University (Duke)
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className=" flex flex-col  ">
            <Link target="_blank" to="https://www.academicjobs.com/job-type/">
              <h2 className=" py-4 px-7 border-4 text-[#00aeef] rounded-full mt-[7rem] hover:bg-orange-500 hover:text-white shadow-md">
                → Find Academic<span className="font-bold"> Job-Types</span> (
                i.e. Professor, Fellow )
              </h2>
            </Link>
          </div>
          <div className="flex flex-col  ">
            <Link target="_blank" to="https://www.academicjobs.com/industry/">
              {" "}
              <h2 className="  py-4 px-7 border-4 text-[#00aeef] rounded-full mt-10 hover:bg-orange-500 hover:text-white shadow-md mb-12">
                → Find Academic Positions in
                <span className="font-bold"> Industry</span> ( i.e. laboratory
                technical services )
              </h2>
            </Link>
          </div> */}
        {/* </div> */}
      </div>
    </main>

  );
}
