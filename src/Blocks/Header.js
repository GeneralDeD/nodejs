import React from 'react'
import { Navbar, Nav, Button, Form } from 'react-bootstrap'
import logo from '../img/logo.jpg'
import '../App.css'

class Header extends React.Component  {
    render() {
        return(
            <div>
                <Navbar collapseOnSelect className='p-0'  expand='lg' variant='light'>
                    <Navbar.Brand href='/' className='m-0 p-0'>
                        <img 
                            src={logo}
                            width='269px'
                            className='logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className=' ' id="responsive-navbar-nav">
                        <Nav className='d-flex flex-column burger' style={{width: '92%'}} >
                            <Nav className="w-100 px-3 d-flex flex-row justify-content-between about__Us">
                                <Nav>
                                        <Nav.Link className='text-white head_up' href="/" >О нас</Nav.Link>
                                        <Nav.Link className='text-white head_up' href="/" >Вопросы-Ответы</Nav.Link>
                                </Nav>
                                <Nav>
                                        <Nav.Link className='text-white' href="/" ><i class="fas fa-map-marker-alt"></i> Юнусабад 6</Nav.Link>
                                        <Nav.Link className='text-white' href="/" ><i class="fas fa-envelope"></i> info@umdsoft.uz</Nav.Link>
                                        <Nav className='d-flex flex-row'>
                                            <Nav.Link className='text-white social' href="/" ><i class="fab fa-twitter"></i></Nav.Link>
                                            <Nav.Link className='text-white social' href="/" ><i class="fab fa-telegram-plane"></i></Nav.Link>
                                            <Nav.Link className='text-white social' href="/" ><i class="fab fa-instagram"></i></Nav.Link>
                                        </Nav>
                                </Nav>
                            </Nav>
                            <Nav className="w-100 px-2 d-flex justify-content-between align-items-center head">
                                <Nav>
                                        <Nav.Link className='text-white nav__down' href="/" >Главная</Nav.Link>
                                        <Nav.Link className='text-white nav__down' href="/" >О нас</Nav.Link>
                                        <Nav.Link className='text-white nav__down' href="/" >Услуги</Nav.Link>
                                        <Nav.Link className='text-white nav__down' href="/" >Наши работы</Nav.Link>
                                        <Nav.Link className='text-white nav__down' href="/" >Цены</Nav.Link>
                                        <Nav.Link className='text-white nav__down' href="/" >Блог</Nav.Link>
                                        <Nav.Link className='text-white nav__down' href="/" >Контакты</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link className='text-white search' href="/" ><i class="fas fa-search"></i></Nav.Link>
                                    <Button className='text-white butn' type='button'>Расчет Работы</Button>
                                </Nav>
                            </Nav>
                       </Nav>
                   </Navbar.Collapse>
                </Navbar>   

            <div className='section'>
                <div className="container">
                    <div className="aside">
                        <h4 style={{margin: "10px 0", fontWeight: "400"}}>Онлайн-курс</h4>
                        <h1 className="mb-4 green">Node.js. Разработка серверов приложений и API </h1>
                        <a href="#" class="butn">в асинхронном формате</a>
                        <h3 style={{margin: '50px 0 20px', fontWeight: 400}}>Начните обучение, когда угодно вам</h3>
                        <p>Курс разработан для тех, кто хочет сменить профессию и <br />
                        стать высокооплачиваемым профессионалом. Он <br />
                        подойдёт для работающих людей, у которых мало <br />
                        времени.</p>
                    </div>
                    <div className="rside round">
                        <h4 style={{textAlign: "center"}}>ЗАПИШИТЕСЬ НА КОНСУЛЬТАЦИЮ</h4>
                        <p>Оставьте свои контакты, мы свяжемся с вами и ответим на все вопросы.</p>
                        <Form action="" className="form">
                            <div className="form__input">
                            <label for="name">
                                Имя <span class="red">*</span>
                                </label>
                                <input type="text" id="name" placeholder="Xurshid" className="input" required />
                            </div>
                            <div className="form__input">
                                <label for="phone">
                                    Телефон <span className="red">*</span>
                                </label>
                                <input type="text" id="phone" placeholder="+99891 791 11 22" className="input" required />
                            </div>
                            <div className="form__input">
                                <label for="email">
                                    Эл. почта <span className="red">*</span>
                                </label>
                                <input type="email" id="email" placeholder="studentoftuit@gmail.com" className="input" required />
                            </div>
                            
                            <button type="submit" className="green__back green__btn"> Отправить</button>
                        </Form>
                        <i style={{color: "#FF9100"}} className="fas fa-exclamation-circle"></i> <span>Обязательное поле</span>
                    </div> 
                    <div style={{width: '100%', marginTop: '30px', textAlign: 'center', cursor: "pointer"}} className="green gr__chevr"> <i class="fas fa-chevron-down"></i></div>
                </div> 
            </div>
        </div>
        )
    }
}

export default Header