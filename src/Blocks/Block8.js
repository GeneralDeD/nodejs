import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

class Block8 extends React.Component {
    

    reverse () {
        console.log('yes');
        let btnFilter = document.getElementsByClassName('strelka');
        if(btnFilter.className !== 'fas fa-arrow-circle-up') {
            btnFilter.className = 'fas fa-arrow-circle-down';
          //  alert('work')
        }
    }

    render() {
        return(  
             <div className='section'>
                 <h1 className='w1'>Программа курса</h1>

                <Accordion defaultActiveKey='0'>
                    <Card> 
                        <Card.Header className='text-center'>
                            <Accordion defaultActiveKey="0"  className='text-left'>
                                <Card className='round border-0 mb-4'>
                                    <Card.Header className='px-4 pb-0 bg-white border-bottom-0'>
                                        <p>Раздел 1</p>
                                        <h4>Знакомство с платформой</h4>
                                        <p>Познакомимся с основами Node.js, настроим редактор кода для отладки и обсудим особенности программирования на стороне сервера. Научимся создавать и запускать приложения в консоли, передавать им параметры. Познакомимся с практической стороной отладки.</p>
                                        <Accordion.Toggle as={Button}  variant="link" eventKey="0" className='bg-white text-success' style={{float: 'right'}}>
                                                <i style={{fontSize: '25px'}} id='strelka' onClick={this.reverse} class="fas fa-arrow-circle-up"></i>
                                        </Accordion.Toggle>
                                        
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className='pt-0 d-flex justify-content-between'>
                                            <div>
                                                <h4>Основы Node.js.<br /><br /> Модули. </h4>
                                                <p>- Введение в модули;</p>
                                                <p>- Встроенные модули;</p>
                                                <p>- Менеджер пакетов npm;</p> <br />
                                                <h4>Command Line Interface. <br /><br /> Отладка приложения.</h4>
                                                <p>- Отладка в редакторе;</p>
                                                <p>- Отладка в консоли.</p>
                                            </div>
                                            <img 
                                                src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
                                                className='mr-5 node_logo'
                                                style={{opacity: '.5'}}
                                            />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                
                                <Card className='round border-0 mb-4'>
                                    <Card.Header className='px-4 pb-0 bg-white border-bottom-0'>
                                        <p>Раздел 2</p>
                                        <h4>Асинхронность</h4>
                                        <p>Продолжим знакомиться с платформой Node.js. Разберёмся на практике как работает Event Loop и асинхронность. Узнаем как правильно писать и управлять асинхронным кодом. Познакомимся с протоколом HTTP и напишем первый сервер.</p>
                                        <Accordion.Toggle as={Button}  variant="link" eventKey="1" className='bg-white text-success' style={{float: 'right'}}>
                                                <i style={{fontSize: '25px'}} id='strelka' onClick={this.reverse} class="fas fa-arrow-circle-up"></i>
                                        </Accordion.Toggle>
                                        
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body className='pt-0 d-flex justify-content-between'>
                                            <div>
                                                <h4>Основы Node.js.<br /><br /> Модули. </h4>
                                                <p>- Введение в модули;</p>
                                                <p>- Встроенные модули;</p>
                                                <p>- Менеджер пакетов npm;</p> <br />
                                                <h4>Command Line Interface. <br /><br /> Отладка приложения.</h4>
                                                <p>- Отладка в редакторе;</p>
                                                <p>- Отладка в консоли.</p>
                                            </div>
                                            <img 
                                                src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
                                                className='mr-5 node_logo'
                                                style={{opacity: '.5'}}
                                            />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                

                                <Card className='round border-0 mb-4'>
                                    <Card.Header className='px-4 pb-0 bg-white border-bottom-0'>
                                        <p>Раздел 3</p>
                                        <h4>Express.js</h4>
                                        <p>В этом разделе мы начнём проектировать API. Обсудим теоретическую часть проектирования API: что следует учитывать во время проектирования, примеры плохого и хорошего API, версионирование API. Затем обсудим как Node.js может выступать в роли веб-сервера и обрабатывать запросы от клиентов. Подключим фреймворк Express.js и узнаем как он может упростить задачу разработки API.</p>
                                        <Accordion.Toggle as={Button}  variant="link" eventKey="2" className='bg-white text-success' style={{float: 'right'}}>
                                                <i style={{fontSize: '25px'}} id='strelka' onClick={this.reverse} class="fas fa-arrow-circle-up"></i>
                                        </Accordion.Toggle>
                                        
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body className='pt-0 d-flex justify-content-between'>
                                            <div>
                                                <h4>Основы Node.js.<br /><br /> Модули. </h4>
                                                <p>- Введение в модули;</p>
                                                <p>- Встроенные модули;</p>
                                                <p>- Менеджер пакетов npm;</p> <br />
                                                <h4>Command Line Interface. <br /><br /> Отладка приложения.</h4>
                                                <p>- Отладка в редакторе;</p>
                                                <p>- Отладка в консоли.</p>
                                            </div>
                                            <img 
                                                src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
                                                className='mr-5 node_logo'
                                                style={{opacity: '.5'}}
                                            />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                            </Accordion>

                            <Accordion.Toggle as={Button}  variant="link" eventKey="0" className='border-0 text-white all__items' >
                                Все разделы
                            </Accordion.Toggle>

                        </Card.Header> 
                    </Card>
                    

                </Accordion>
             </div>
        )
    }
}

export default Block8