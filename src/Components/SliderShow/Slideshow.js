import React from 'react';
import './Slidershow.css';
import {
    useFocusable,
    FocusContext
} from "@noriginmedia/norigin-spatial-navigation";

const Slideshow = () => {
    const { ref, focused, focusSelf, setFocus ,focusKey} = useFocusable();
    console.log("focuskey",focusKey);
    return (
        <FocusContext.Provider value={focusKey} >

        <div>
            <div className="slideshow-container" ref={ref}>

                <div className="mySlides fade firstimage"  >
                    <img
                        src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_56048022-F0FE-4CE0-AEF2-F63CD0C3EC5A_2022-8-17-T10-57-36.jpg?s=1440x580&t=bgmesh"
                        alt="New York" width="1000"
                    />
                </div>

                <div className="mySlides fade">
                    <img
                        src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_46773696-89F9-4D21-A926-152068A84296_2022-9-5-T9-15-18.jpg?s=1440x580&t=bgmesh"
                        alt="Chicago" width="1000"
                    />
                </div>

                <div className="mySlides fade">
                    <img
                        src="https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_78558E04-EA52-45C8-A148-4D402315F2CC_2022-8-1-T10-15-9.jpg?s=1440x580&t=bgmesh"
                        alt="Los Angeles" width="1000"
                    />
                    <div className="text">Third Image</div>
                </div>
                <div class="prevnextbtn">
                    <a className="prev" onclick="plusSlides(-1)">❮</a>
                    <a className="next" onclick="plusSlides(1)">❯</a>
                </div>

            </div>
            <div className="dotcontainer">
                <span  className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div>
        </div>
        </FocusContext.Provider>
    )
}

export default Slideshow;
