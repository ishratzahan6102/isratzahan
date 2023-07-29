import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import Navbar from '../../shared/Navbar';
import animationData  from '../../assets/Graphik-Motion_Design 2.json';
import LottieLoader from 'react-lottie-loader';


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9rprvs7', 'template_eh2h4rf', form.current, 'F4GPWvTylpgXgISCX')
            .then((result) => {
                console.log(result.text);
                alert("Thanks for your message!")
                e.target.reset()

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-me-page text-center p-11 mx-auto  '>
            <Navbar></Navbar>
          <div className='mt-6'>
          <h1 className='text-4xl text-white font-bold uppercase title '>Contact Me</h1>
            <p className='text-white title'>Send a message</p>
            
            <div className='flex flex-col-reverse mx-auto text-start justify-center  items-center md:flex-row w-full'>
                <div className='w-full lg:w-3/6 mx-auto'>
                    <div className='mt-2 blur-3xl'>
                    <LottieLoader animationData={animationData} />  
                    </div>   
                </div>
               <div className='w-full lg:w-3/6 mx-auto pt-4'>
                    <form ref={form} onSubmit={sendEmail} className="card w-96 text-white contact-me-form mx-auto lg:mx-0 mt-0 pt-0 post">
                    <div className="card-body">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text title font-bold ">What's your name?</span>
                            </label>
                            <input type="text" name="user_name" required placeholder="your name" className="input input-bordered  rounded text-base" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text title font-bold ">Email</span>
                            </label>
                            <input type="email" name="user_email" required placeholder="your email" className="input input-bordered  rounded text-base" />
                        </div>
                        
                        <div className="form-control"> 
                        <label className="label">
                                <span className="label-text title font-bold ">Message</span>
                            </label>
                            <textarea name="message" required placeholder='How may I help you?' className='textarea textarea-bordered h-40 rounded text-base' ></textarea>
                        </div>
                        <div className="form-control mt-2 lg:items-start items-center">
                            <input type="submit" value="Send" className="btn btn-outline uppercase rounded-md " />
                        </div>
                    </div>
                    </form>
               </div>
            </div>
          </div>
        </div>


    );
};

export default Contact;