import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import './index.css';
import "bootswatch/dist/sketchy/bootstrap.css";
import WeatherDisplay from "../WeatherDisplay";

class App extends React.Component {

    state = {
        activeCity: 0
    };

    render() {
        const activeCity = this.state.activeCity;
        const CITIES = [
            {name: "Palo Alto", zip: "94303"},
            {name: "San Jose", zip: "94088"},
            {name: "Santa Cruz", zip: "95062"},
            {name: "Honolulu", zip: "96803"}
        ];

        return (
            <div>
                <Navbar>
                    <Navbar.Brand>
                        React Simple Weather App
                    </Navbar.Brand>
                </Navbar>
                <Container>
                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Select a city</h3>
                            <Nav
                                variant="pills"
                                stacked
                                activeKey={activeCity}
                                className="flex-column"
                                onSelect={index => {
                                    this.setState({activeCity: index});
                                }}>
                                {CITIES.map((city, index) => (
                                    <Nav.Item>
                                        <Nav.Link key={index} eventKey={index}>{city.name}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <WeatherDisplay key={activeCity} zip={CITIES[activeCity].zip}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App
