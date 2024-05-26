import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header";


///difine the function in fetarrow
let Layout = () => {
    return (

        <>
            <Header/>
            <main>

                <Row className="h-100">
                    <Col xs={2} className="pe-0 h-100">
                        <aside className="h-100">aside</aside>
                    </Col>
                    <Col xs={10} className="ps-0 h-100">
                        <section className="h-100">
                            <Outlet/>
                        </section>
                    </Col>
                </Row>


            </main>
            <footer>footer</footer>
        </>
    )
}

export default Layout;