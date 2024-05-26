import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


function Nevbar() {
    return (
        <Nav
            activeKey="/"
        >
            <Nav.Item>
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/login">Login</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/ragister">Ragister</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            </Nav.Item>
        </Nav>

    )
}

export default Nevbar;