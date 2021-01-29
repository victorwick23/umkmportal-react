import React from 'react';
import './HeroSection.css';
import {Col, Row} from 'react-bootstrap';

function HeroSection() {
    return (
        <Row className="row container-hero container-wrap-body">
            <Col>
                <div className="">
                    <p className="text-title-hero">Selamat Datang di Portal UMKM</p>
                    <p className="text-sub-hero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque gravida
                        tellus quis placerat.</p>
                </div>
            </Col>
            <Col>
                <div>
                    <img className="img img-fluid" src="./images/illustration.png" alt=""/>
                </div>
            </Col>
        </Row>
    )
}

export default HeroSection
