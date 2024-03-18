import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-4 px-7 md:mt-4 md:pb-10 bg-green-500 rounded-b-3xl rounded-t-lg shadow-xl pb-4 border-4 ">
    <hr className="w-ful  mx-auto my-2 bg-white border-0 rounded md:my-2 md:mb-4 dark:bg-gray-700 max-w-screen-xl mx-auto "></hr>
    <div className=" text-white font-open-sans grid grid-cols-1 md:grid-cols-4 gap-8 pb-4 max-w-screen-xl mx-auto pl-2">
      <div>
        <ul>
          <li className="text-white font-bold text-xl pb-1 ">Recruiters</li>

          <li>
            <a className="footer-nav__link" href="https://postmyjob.online/sciencejobs-pricing/"> 
              Post a Job
            </a>
          </li>
          <li>
            <Link  target="_blank"href="https://www.academicjobs.com/ai-recruitment/">AI Recruitment</Link>
          </li>
          <li>
            <Link  target="_blank"href="/about/">About Us</Link>
          </li>
          <li>
            <Link  target="_blank"href="https://www.academicjobs.com/global/recruitment">Recruitment Assistance</Link>
          </li>
          <li>
            <Link  target="_blank" href="https://www.academicjobs.com/contact-us">Contact Us</Link>
          </li>    
        </ul>
      </div>

      <div>
        <ul>
          <li className="text-white font-bold text-xl pb-1">Job Seekers</li>
          <li>
            <Link  target="_blank"href="https://www.academicjobs.com/jobs/">Find Jobs</Link>
          </li>
       
          <li>
            <Link  target="_blank"href="https://www.academicjobs.com/employers/">Find Employers</Link>
          </li>
          <li>
            <Link  target="_blank"href="https://www.academicjobs.com/academic-hub/">Science Career Help</Link>
          </li>
          <li>
            <Link  target="_blank"href="https://www.academicjobs.com/academic-talent-pool/">Talent Pool</Link>
          </li>
        </ul>
      </div>

   
      <div>
        <ul>
          <li className="text-white font-bold text-xl pb-1 ">Our Network</li>
          {/* <li><a href="https://academicjobs.com/career-advice">Career Advice</a></li> */}
          
          <li>
            <Link  target="_blank"href="https://www.academicjobs.com/">AcademicJobs</Link>
          </li>
          <li>
            <Link  target="_blank"href="https://www.teachingjobs.com.au/">TeachingJobs</Link>
          </li>

          <li>
            <Link  target="_blank"href="https://www.govjobs.com.au/">GovJobs</Link>
          </li>
          
        
{/* 
          <li>
            <a
              className="footer-nav__link"
              href="https://www.youtube.com/channel/UCIaknpVcM_ZijJSWJCYi8aw"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li> */}
          <li>
            <a href="https://www.linkedin.com/company/academic-jobs/">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  );
};
export default Footer;
