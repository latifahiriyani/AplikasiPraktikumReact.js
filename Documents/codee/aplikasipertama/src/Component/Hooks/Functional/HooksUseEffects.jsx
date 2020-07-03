import React, {useEffect, useState} from 'react'
import { Container } from 'reactstrap'

function HooksUseEffect() {

    const[namaLengkap, setNamaLengkap] = useState({nama:'', marga:''})

    return (
       <Container>
            <h3>Profil User</h3>
            </Container>
    )
}

export default HooksUseEffect