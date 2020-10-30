import React from 'react'
import lesson1 from '../img/lesson1.jpg'
import lesson2 from '../img/lesson2.jpg'
import lesson3 from '../img/lesson3.jpg'
import lesson4 from '../img/lesson4.jpg'

class Block3 extends React.Component {
    render() {
        return(
            <div className='container'>  
                <div className="section text-center">
                
                    <h1>Учим делать правильно</h1>
                    <div className="lesson__blocks">
                        <div className="lesson__block">
                            <img src={lesson1} width="50px" alt="" />
                            <p>Актуальные стандарты качества: не нужно переучиваться после курса.</p>
                        </div>

                        <div className="lesson__block">
                            <img src={lesson2} width="63px" alt="" />
                            <p>Понимание полного цикла работы разработчика.</p>
                        </div>

                        <div className="lesson__block">
                            <img src={lesson3} width="62px" alt="" />
                            <p>Фундаментальные и структурированные знания необходимых технологий.</p>
                        </div>

                        <div className="lesson__block">
                            <img src={lesson4} width="36px" alt="" />
                            <p>Опыт работы с дедлайнами и планирования работы.</p>
                        </div>
                    </div>
                
                </div> 

            <div className='d-flex flex-wrap align-items-center'>
                <div className="cost_img text-center" style={{margin: "40px 0"}}><img src='http://www.armagafx.com/wp-content/uploads/2019/12/undraw_code_review_l1q9.png' className='stydy_img' width="379px" alt="" /></div>
                <div className="cost">
                    <h4>После успешного завершения курса можно начать карьеру фулстек-разработчика, а также продолжить обучение на других наших курсах.</h4>
                    <h1 className="green"> 5 000 000 сум</h1>
                    <h5>Медианное значение зарплаты фулстек-разработчика по исследованию компании &laquo;Мой круг&raquo; в Ташкенте во втором полугодии 2020 года.</h5>
                </div>
            </div>

                <div className='section__blocks w-100 check__course align-items-center justify-content-around round'>
                    <a href='#' className='blue__btn py-3 px-5 round'>
                        Записаться на курс
                    </a>
                    <h4 className='m-0'>Консультация по телефону +998 71 784 56 99.</h4>
                </div>
            </div>
        )
    }
}

export default Block3