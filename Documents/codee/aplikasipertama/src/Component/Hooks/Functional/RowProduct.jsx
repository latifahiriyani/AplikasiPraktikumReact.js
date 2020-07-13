import React from 'react'
import {
   Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
function RowProduct() {
    return(
        <Col>
         <Card>
        <CardImg top width="100%" src="http://placeimg.com/640/480/tech" alt="Card image cap" />
        <CardBody>
          <CardTitle>Lenovo</CardTitle>
          <CardSubtitle>Rp. 12.000.000</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Tambah Keranjang</Button>
        </CardBody>
      </Card>
        </Col>
    )
}

export default RowProduct