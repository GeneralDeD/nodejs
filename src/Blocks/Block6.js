import React from 'react'

class Block6 extends React.Component {
    render() {
        return(
            <div className='d-flex justify-content-between flex-wrap section'>  
                <h1 className='w-100 mb-1 w1'> Учебный проект  </h1>
                <p className='w1' style={{width: '46%'}}>
                    В каждом разделе вы будете выполнять задания по учебному проекту. Над учебным проектом вы будете работать самостоятельно для закрепления пройденного материала.
                </p>
                <span className='w1' style={{width: '45%'}}>
                    <i class="fas fa-exclamation-circle text-success"></i>
                    <p className='my-1'>Проект уже свёрстан. В течение курса вы сфокусируетесь на главном: проектировании и программировании</p>
                </span>
                <div className='d-flex flex-wrap w1 justify-content-between align-items-center mb-4'>
                    <img 
                        src='https://via.placeholder.com/550x300'
                        className='round w1 my-4 st_pr_img'
                        style={{boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}
                    />
                    <div className='w1' style={{width: '44%', marginRight: '12px'}}>
                        <h3>&laquo;Куплю. Продам&raquo;</h3>
                        <p>Интернет-сервис, упрощающий продажу или покупку любых вещей. Всё, что требуется для покупки: найти подходящее объявление и связаться с продавцом по email. Продать ненужные вещи ничуть не сложней: зарегистрируйтесь и заполните форму нового объявления.</p>
                    </div>
                </div>

                <h1 className='w-100 mb-1 w1'> Личный проект  </h1>
                <p className='w1' style={{width: '46%'}}>
                    В каждом разделе вы будете выполнять задания по личному проекту. Над ним вы будете работать и самостоятельно, и в паре с наставником.
                </p>
                <span  className='w1' style={{width: '45%'}}>
                    <i class="fas fa-exclamation-circle text-success"></i>
                    <p className='my-1'>Проект уже свёрстан. В течение курса вы сфокусируетесь на главном: проектировании и программировании</p>
                </span>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                    <img 
                        src='https://via.placeholder.com/550x300'
                        className='round my-4 w1 st_pr_img'
                        style={{boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}
                    />
                    <div className='w1' style={{width: '44%', marginRight: '12px'}}>
                        <h3>&laquo;Типотека&raquo;</h3>
                        <p>Приложение для быстрого создания персональных блогов. Несколько простых шагов и вы автор современной площадки для публикации заметок. &laquo;Типотека&raquo; &mdash; это не только создание контента. Любой желающий читатель может зарегистрироваться и оставить комментарий. Создавайте заметки, общайтесь с читателями, модерируйте контент вместе с &laquo;Типотека&raquo;.</p>
                    </div>
                </div>
             </div>
        )
    }
}

export default Block6