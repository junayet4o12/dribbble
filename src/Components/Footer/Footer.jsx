// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dribbleLogo from '../../assets/dribbleLogo2.png'
import { faBasketball, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faPinterest, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
const footerTitle = 'font-bold'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10">
                <aside className='max-w-[250px]'>
                    <img className='w-24' src={dribbleLogo} alt="" />
                    <p>Dribbble is the world's leading community for creatives to share, grow. and get hired</p>
                    <div>
                        <p className='flex justify-center items-center gap-3 text-base'>
                            <FontAwesomeIcon icon={faEarthAmericas} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faSquareFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faPinterest} />
                        </p>
                    </div>
                </aside>
                {/* nav 1  */}
                <nav>
                    <h6 className="font-bold">For designers</h6>
                    <a className="link link-hover">Go Pro!</a>
                    <a className="link link-hover">Explore design work</a>
                    <a className="link link-hover">Design blog</a>
                    <a className="link link-hover">OverTime podcast</a>
                    <a className="link link-hover">Playoffs</a>
                    <a className="link link-hover">Weekly Warm-Up</a>
                    <a className="link link-hover">Refer a Friend</a>
                    <a className="link link-hover">Code of conduct</a>
                </nav>
                {/* nav 2  */}
                <nav>
                    <h6 className="font-bold">Hire Designers</h6>
                    <a className="link link-hover">Post a job opening</a>
                    <a className="link link-hover">Post a freelance project</a>
                    <a className="link link-hover">Search for designers</a>
                    <a className="font-bold">Brands</a>
                    <a className="link link-hover">Advertise with us</a>
                </nav>
                {/* nav 3 */}
                <nav>
                    <h6 className="font-bold">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Support</a>
                    <a className="link link-hover">Media kit</a>
                    <a className="link link-hover">Testimonials</a>
                    <a className="link link-hover">API</a>
                    <a className="link link-hover">Terms of service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                {/* nav 4  */}
                <nav>
                    <h6 className="font-bold">Directors</h6>
                    <a className="link link-hover">Design jobs</a>
                    <a className="link link-hover">Designers for hire</a>
                    <a className="link link-hover">Freelance designers for hire</a>
                    <a className="link link-hover">Tags</a>
                    <a className="link link-hover">Places</a>
                    <h6 className="font-bold">Design assets</h6>
                    <a className="link link-hover">Dribbble Marketplace</a>
                    <a className="link link-hover">Creative Market</a>
                    <a className="link link-hover">Font spring</a>
                    <a className="link link-hover">Font Squirrel</a>
                </nav>
                {/* nav 5  */}
                <nav>
                    <h6 className="font-bold">Design Resources</h6>
                    <a className="link link-hover">Freelancing</a>
                    <a className="link link-hover">Design Hiring</a>
                    <a className="link link-hover">Design Portfolio</a>
                    <a className="link link-hover">Design Education</a>
                    <a className="link link-hover">Creative Process</a>
                    <a className="link link-hover">Design Industry Trends</a>
                </nav>
            </footer>
            <footer className="footer items-center p-4 border-t">
                <aside className="items-center grid-flow-col">
                    
                    <p>© {new Date().getFullYear()} Junayet Alam - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                   <span className='flex justify-center items-center gap-1'> <span className='font-bold'>20,501,853</span> shorts Dribbled <span className='text-primary font-bold text-lg'><FontAwesomeIcon icon={faBasketball} /></span></span>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;