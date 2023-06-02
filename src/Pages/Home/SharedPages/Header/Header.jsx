
import { Button } from 'react-bootstrap';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import TopNavbar from './TopNavbar';

const Header = () => {
    return (
        <div className=''>
            <div className='mt-3 mb-5 text-center'>
                <img src={logo} alt="" />
                <h2 className='text-primary fs-5'>Journalism Without Fear or Favour</h2>
                <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
            </div>

            <div className='d-flex align-align-items-baseline justify-content-center mb-5 bg-light rounded p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100} pauseOnHover={true}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <div>
                <TopNavbar></TopNavbar>
            </div>
        </div>
    );
};

export default Header;