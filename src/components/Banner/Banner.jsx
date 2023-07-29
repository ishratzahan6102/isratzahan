import React from 'react';

const Banner = () => {
    return (
        <div>
                <div className='relative mt-28 w-full lg:w-5/6 mx-auto banner'>
          <div className='flex flex-col lg:flex-row gap-10 justify-center items-center'>
            <div className='w-full lg:w-4/6'>
              <h1 className='text-5xl lg:text-8xl title'>Welcome.</h1>
              <div className='flex flex-row items-center'>
                <div className="vertical"></div>
                <div className='p-6'>
                  <p>My name is Israt Zahan, I'm a web developer based in Dhaka, Bangladesh.
                    I have developed many types of front-ends from online restaurant to task manager app. </p><br />
                  <p>Looking for a unique chance as a recent graduate in a professional organization. I'm looking forward to a fulfilling career
                    and working with a motivated team that will push me to the limit.</p>
                </div>
              </div>
            </div>

            <div className='w-full lg:w-2/6 relative'>
              <h1 className='text-3xl mb-6 title'>Projects</h1>
              <div className="horizontal"></div>
              <div className="vertical-2"></div>
              <div className='p-6'>
                <ul>
                  <li className='mb-4 '><a href='https://redonion-78cba.web.app/'>Red Onion</a></li>
                  <li className='mb-4'><a href='https://phone-resell-center.web.app/'>Astor</a></li>
                  <li className='mb-4'><a href='https://hellodoctor-a53eb.web.app/'>Hello Doctor</a></li>
                  <li className='mb-4'><a href='https://ishratzahan6102.github.io/Roxal-Hotel'>Roxal Hotel </a></li>
                  <li className='mb-4'><a href='https://ishratzahan6102.github.io/Assignment-3/'>Get Code</a></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
        </div>
    );
};

export default Banner;