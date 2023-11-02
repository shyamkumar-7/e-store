import React from 'react'
import { useContext } from 'react';
import QRCode from "react-qr-code";
import { totalContext } from '../../main';
const Qr = () => {
    const {total}=useContext(totalContext)
    return (
    <>
        <div style={{ display: 'flex',  flexDirection:"column", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <QRCode
                size={120}
                value={`upi://pay?pn=Pawan%20Bhawsar&pa=9340790805@ybl&am=${total}&cu=INR`}
                />
                <br></br>
                <h1>{total}</h1>
        </div>


    </>
    );
}

export default Qr