import Banner from '../../components/Banner/Banner';
import Navbar from '../../shared/Navbar'
import './Header.css'


const Header = () => {
  return (
    <section className='p-5  max-w-[1260px] mx-auto'>
      <div className='triangle-element ml-0 lg:ml-12'></div>
      <section className='content rounded p-6'>
        <Navbar></Navbar>
        <Banner></Banner>
        <div>
        </div>
      </section>
      <div className='triangle-element-1 hidden lg:flex mr-0 lg:mr-12'></div>
    </section>
  );
};

export default Header;