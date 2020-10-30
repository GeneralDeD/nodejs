import React from 'react'

class Footer extends React.Component {
    render() {
        return(  
            <div className='section bg-d mb-0'> 
                <div className='container py-5 footer'>
                    <div className='w-100 foot__head d-flex flex-wrap text-center justify-content-between align-items-center'>
                        <div style={{width: '35%'}} className='w1'>
                            <h4 className='foot-h4'>Подпишитесь на нашу рассылку</h4>
                            <p className='foot-p'>News letter dolor sit ammet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <form class="input-group mb-3 w-50 w1">
                            <input type="email" class="form-control py-4 px-5" style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}} placeholder="Enter your email" aria-describedby="basic-addon2" required/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary btn-primary btn-subsc" type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                    <div className='w-100 foot_foot mt-5 d-flex flex-wrap justify-content-between'>
                        <div style={{width: '21%'}}  className='foot__item wsm1'>
                            <h4 className='foot-h4'>About Us</h4>
                            <p className='foot-p'>Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy.</p>
                            <div className='d-flex'>
                                <a href='#' className='soc foot-a'>
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href='#' className='soc foot-a'>
                                    <i class="fab fa-telegram-plane"></i>
                                </a>
                                <a href='#' className='soc foot-a'>
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href='#' className='soc foot-a'>
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>

                        <div className='foot__item wsm1'>
                            <h4 className='foot-h4'>Important Links</h4>
                            <a href='#' className='foot-p foot-a'>About Us</a> <br/>
                            <a href='#' className='foot-p foot-a'>Projects</a> <br/>
                            <a href='#' className='foot-p foot-a'>Services</a> <br/>
                            <a href='#' className='foot-p foot-a'>Blog</a> <br/>
                            <a href='#' className='foot-p foot-a'>Contact</a> 
                        </div>

                        <div className='foot__item wsm1'>
                            <h4 className='foot-h4'>Featured Service</h4>
                            <a href='#' className='foot-p foot-a'>IT Management</a> <br/>
                            <a href='#' className='foot-p foot-a'>Development</a> <br/>
                            <a href='#' className='foot-p foot-a'>Services</a> <br/>
                            <a href='#' className='foot-p foot-a'>UI/UX Design</a> <br/>
                            <a href='#' className='foot-p foot-a'>Support Engineer</a> 
                        </div>

                        <div style={{width: '15%'}} className='foot__item wsm1'>
                            <h4 className='foot-h4'>Contact</h4>
                            <p className='foot-p'><i class="fas fa-phone-alt text-white"></i> +998917911122</p>
                            <p className='foot-p'><i class="far fa-envelope text-white"></i> info@umdsoft.uz</p> 
                            <p className='foot-p'><i class="fas fa-map-marker-alt text-white"></i> Taskent city, Yunusobod 6</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Footer