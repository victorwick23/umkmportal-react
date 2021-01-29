import React from 'react';
import {Col, Row} from 'react-bootstrap'
import CardsArticle from './CardsArticle';

function Content() {
    return (
        <Row className="container-wrap-body container-body">
            <Col lg="9">
                <div>
                    <p class="txt-title-section">Berita Terbaru</p>
                    <div class="line-underline"></div>
                </div>
                <CardsArticle 
                    imgnewssrc='./images/img-news-1.jpg'
                    titlenews='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque gravida tellus quis placerat.'
                    iconsrc='./images/clock.png'
                    time='Senin, 20 Januari 2020 | 13.00 WIB'
                    contentnews='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in
                    voluptate velit esse c..'
                    iconarrow='./images/right1.png'
                />
                <CardsArticle 
                    imgnewssrc='./images/img-news-2.jpg'
                    titlenews='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque gravida tellus quis placerat.'
                    iconsrc='./images/clock.png'
                    time='Senin, 20 Januari 2020 | 13.00 WIB'
                    contentnews='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in
                    voluptate velit esse c..'
                    iconarrow='./images/right1.png'
                />
                <CardsArticle 
                    imgnewssrc='./images/img-news-3.jpg'
                    titlenews='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque gravida tellus quis placerat.'
                    iconsrc='./images/clock.png'
                    time='Senin, 20 Januari 2020 | 13.00 WIB'
                    contentnews='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in
                    voluptate velit esse c..'
                    iconarrow='./images/right1.png'
                />
            </Col>
            <Col lg="3">
            </Col>

        </Row>
    )
}

export default Content
