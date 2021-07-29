import React, {Component} from "react";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import './swipe.css'
import User from "../user/user";
import ButtonComponent from '../button/button';

export default class SwipeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

    move(index) {
        let {data} = this.props
        this.setState({index: index < 0 ? data.length - 1 : index % data.length})
    }

    render() {
        let {data} = this.props
        let {index} = this.state
        return (
            <Container fluid className='my-container'>
                <Row className="content-row align-content-center">
                    <Col className='my-aside'>
                        <ButtonComponent className="carousel-control-prev"
                                         onClick={() => this.move(index - 1)}/>
                    </Col>
                    <Col className='my-player justify-content-center align-items-center'>
                        {data ? <User data={data[index]}/> : <Spinner animation="border" variant="primary"/>}
                    </Col>
                    <Col className='my-aside'>
                        <ButtonComponent className="carousel-control-next"
                                         onClick={() => this.move(index + 1)}/>
                    </Col>
                </Row>
            </Container>
        )
    }

    componentDidMount() {
        window.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowLeft')
                this.move(this.state.index - 1);
            if (event.code === 'ArrowRight')
                this.move(this.state.index + 1);
        });
    }
}

