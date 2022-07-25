import React from 'react';
import s from './index.module.css'
import hands from '../../assets/img/handsWithARing.png'
const MainPage = () => {
    return (
        <div>
            <div className={s.container}>
                <span>
                    Lorem ipsum dolor sit amet
                </span>
                <div>
                    <div>
                        <title>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </title>
                        <p>
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum/
                            Incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                        </p>
                    </div>
                    <img src={hands} alt="image: hands"/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;