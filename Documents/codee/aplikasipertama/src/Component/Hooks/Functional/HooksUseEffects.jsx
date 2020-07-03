import React, {useEffect, useState} from 'react'
import { Container } from 'reactstrap'

function HooksUseEffect() {

    const[namaLengkap, setNamaLengkap] = useState({nama:'Andika', marga:'Wijaya'})

    useEffect(()=>{
        console.log("Memanggil Use Effects")
        setNamaLengkap({nama:'Vincent', marga:'Tan'})
    },[])

    return (
       <Container>
            <h3>Profil User</h3>
            <h4>Nama : {namaLengkap.nama}</h4>
            <h4>Marga : {namaLengkap.marga}</h4>
        </Container>
    )
}

export default HooksUseEffect