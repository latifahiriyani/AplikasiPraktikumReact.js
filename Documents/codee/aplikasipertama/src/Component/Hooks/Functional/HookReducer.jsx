import { Container, Row, Col, Card, CardImg } from 'reactstrap'
import React from 'react'

function HookReducer() {
    return (
        <Container>
            <br/>
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="http://placeimg.com/640/480/tech" alt="Card image cap" />

                    </Card>
                </Col>
                <Col xs="6">col 2</Col>
            </Row>
        </Container>
    )
}

export default HookReducer