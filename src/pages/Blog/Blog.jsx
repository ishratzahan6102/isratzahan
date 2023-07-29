import React from 'react';
import Navbar from '../../shared/Navbar';
import proPic from '../../assets/profilePicture.jpg'
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog5 from '../../assets/blog5.png'
import blog3 from '../../assets/blog3.png'
import blog4 from '../../assets/blog4.png'
import comment from '../../assets/comment.png'
import retweet from '../../assets/retweet.png'
import love from '../../assets/love.png'
import education from '../../assets/degree.png'
import link  from '../../assets/link.png'
import './Blog.css'
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className=' blog noisy'>
            <div className='p-11'>
                <Navbar></Navbar>
                <div className='mt-10 flex flex-col gap-4 max-w-[600px] mx-auto '>
                    <div className='p-6 post rounded-lg'>

                        <div className='flex flex-row justify-between items-center gap-4 '>
                            <div className=''>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={proPic} />
                                    </div>
                                </div>
                            </div>

                            <div>
                            <Link to='/'>
                            <button className="btn btn-active btn-ghost text-white">Go Back</button>
                            </Link>
                               
                            </div>
                        </div>
                        <p className='title font-bold my-2'>Israt Zahan</p>
                        <p className='text-sm'>Web Developer</p>
                        <p className='text-sm'>Visit my website to test working projects</p>
                        <p>
                       <div className='flex flex-row gap-4 justify-start items-center'>
                       <div className='flex flex-row gap-2 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-4 rounded">
                                                    <img src={link} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span className='text-blue-800 font-bold text-sm'>www.portfolio.com</span>
                                        </div>
                        <div className='flex flex-row gap-2 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-4 rounded">
                                                    <img src={education} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span className='text-sm'>Bachelor, Finance - June 2022</span>
                                        </div>
                       </div>
                           

                        </p>
                        <span>
                            <span className='font-bold mr-2'>5 <span className='text-gray-500 font-normal'> blogs   </span></span>
                            <span className='font-bold'>20 <span className='text-gray-500 font-normal'> views </span></span>

                        </span>
                    </div>

                    <div className='p-6 post rounded-lg'>
                        <div className='flex flex-row justify-start items-start gap-2'>

                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={proPic} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Networking Can Help Your Career . 12 December</p>
                                <p className='text-sm'>Growing up as an introvert, I was petrified the first time I heard of the word "Networking" while stepping into the corporate world. As far I've seen any skill that can help.</p>
                               <div className='h-20 overflow-hidden my-2'>
                               <img className='w-full' src={blog1} />
                               </div>

                                <div className='flex flex-row gap-6  justify-start items-center'>
                                    
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={comment} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={retweet} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={love} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>

                                  
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='p-6 post rounded-lg'>
                        <div className='flex flex-row justify-start items-start gap-2'>

                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={proPic} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Though Things About Being A Developer . 1 January</p>
                                <p className='text-sm'>Have you ever looked at fonts. Like really looked at them? Have you ever tried to determine how happy or sad a font is.</p>
                               <div className='h-20 overflow-hidden my-2'>
                               <img className='w-full' src={blog2} />
                               </div>

                                <div className='flex flex-row gap-6  justify-start items-center'>
                                    
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={comment} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={retweet} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={love} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>

                                  
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='p-6 post rounded-lg'>
                        <div className='flex flex-row justify-start items-start gap-2'>

                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={proPic} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Software Product Development Challenges . 12 February</p>
                                <p className='text-sm'>This article is for: Startup founders seeking to avoid software product development challenges by learning.</p>
                               <div className='h-20 overflow-hidden my-2'>
                               <img className='w-full' src={blog3} />
                               </div>

                                <div className='flex flex-row gap-6  justify-start items-center'>
                                    
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={comment} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={retweet} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={love} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>

                                  
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='p-6 post rounded-lg'>
                        <div className='flex flex-row justify-start items-start gap-2'>

                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={proPic} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Communication in Group Projects . 10 March</p>
                                <p className='text-sm'>The organisation’s success depends upon the members</p>
                               <div className='h-20 overflow-hidden my-2'>
                               <img className='w-full' src={blog4} />
                               </div>

                                <div className='flex flex-row gap-6  justify-start items-center'>
                                    
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={comment} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={retweet} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={love} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>

                                  
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='p-6 post rounded-lg'>
                        <div className='flex flex-row justify-start items-start gap-2'>

                            <div>
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={proPic} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Does It Make Sense to Do Unpaid Internships . 4 May</p>
                                <p className='text-sm'>This article is for: Startup founders seeking to avoid software product development challenges and best practices.</p>
                               <div className='h-20 overflow-hidden my-2'>
                               <img className='w-full' src={blog5} />
                               </div>

                                <div className='flex flex-row gap-6  justify-start items-center'>
                                    
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={comment} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={retweet} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>
                                        <div className='flex flex-row gap-1 justify-start items-center'>
                                            <div className="avatar">
                                                <div className="w-6 rounded">
                                                    <img src={love} alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <span>13</span>
                                        </div>

                                  
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;