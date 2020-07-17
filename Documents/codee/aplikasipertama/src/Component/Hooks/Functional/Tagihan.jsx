import React from 'react'
import { Jumbotron, Button, Container } from 'reactstrap';

function Tagihan() {
    return (
        <Container>
            <Jumbotron>
        <h1 className="display-3">Tagihan</h1>
        <p className="lead">Action Figure Naruto.</p>
        <hr className="my-2" />
        <p>Harga Total Rp. 400000 .</p>
        <p className="lead">
          <Button color="primary">Lanjutkan Pembayaran</Button>
        </p>
      </Jumbotron>
        </Container>
    )
}

export default Tagihan