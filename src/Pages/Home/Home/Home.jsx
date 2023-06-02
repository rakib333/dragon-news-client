// import React from 'react';

import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../SharedPages/RightNav/RightNav";
import LeftNav from "../SharedPages/LeftNav/LeftNav";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;