import React from 'react'

class Block9 extends React.Component {
    render() {
        return(
            <div className='section d-flex flex-wrap align-items-center'> 
                <div style={{width: '48%'}} className='progres w1'> 
                    <h1>После прохождения курса вы получите электронный сертификат *</h1>
                    <p>* Не является документом об образовании (об обучение). Курс не является услугой.</p>
                </div>
                <div className='w1'>
                    <img 
                        src='https://via.placeholder.com/450x250'
                        className='round ml-5 aft_st_img'
                        style={{boxShadow: '0 0 5px rgba(0,0,0,0.2)'}}
                    />
                </div>
                <div className='section__blocks d-block w-100'>
                    <h4>Статистика Академии</h4>
                    <div className='d-flex flex-wrap justify-content-around'>
                        <div  className='d-flex wsm1 align-items-center'>
                            <h1 className='green m-0 fs_70'>8</h1>
                            <p className='m-0 ml-3'>лет на рынке <br /> обучения</p>
                        </div>
                        <div  className='d-flex wsm1 align-items-center'>
                            <h1 className='green m-0 fs_70'>98</h1>
                            <p className='m-0 ml-3'>онлайн курсов <br /> проведено</p>
                        </div>
                        <div  className='d-flex wsm1 align-items-center'>
                            <h1 className='green m-0 fs_70'>840</h1>
                            <p className='m-0 ml-3'>выпускника защитили <br /> проекты</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block9