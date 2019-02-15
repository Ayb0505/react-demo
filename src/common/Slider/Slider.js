import React from 'react';
import ReactSwipe from 'react-swipe';

class Slider extends React.Component{
    render(){
        return (
            <div>

                <div className="Home">
                    <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: true,
                        auto: 2000,
                    }}
                    >
                    <div style={{background:'#399','lineHeight':'50px'}}>PANE 1</div>
                    <div style={{background:'#393','lineHeight':'50px'}}>PANE 2</div>
                    <div style={{background:'#939','lineHeight':'50px'}}>PANE 3</div>
                    </ReactSwipe>
                </div>

              <figure className="ban swiper-container">
                    <ul className="swiper-wrapper">
                        <li className="swiper-slide">
                            <a href="#">
                                <img src="/assets/images/index-ban01.png"/>
                            </a>
                        </li>
                        <li className="swiper-slide">
                            <a href="#">
                                <img src="/assets/images/index-ban02.png"/>
                            </a>
                        </li>
                        <li className="swiper-slide">
                            <a href="#">
                                <img src="/assets/images/index-ban03.png"/>
                            </a>
                        </li>
                    </ul>
                </figure>
            </div>
        )
    }
}

export default Slider;