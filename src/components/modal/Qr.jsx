import React, { useState } from 'react'
import { useContext } from 'react';
import QRCode from "react-qr-code";
import { totalContext } from '../../main';
const Qr = () => {
    const {total}=useContext(totalContext);
    // const [time,setTime]=useState(0);
    const qrCodeStyle = {
        background: 'blue',
        border: '2px solid #ccc', // Add a border
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Add a shadow effect
    };
    return (
    <div style={{minHeight:"100vh",backgroundColor:"#427FE0" ,display:"flex",justifyContent:"center"}}>
        <div style={{ display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center'  }}>
            <QRCode
                size={200}
                value={`upi://pay?pn=shyam%20kumar&pa=kumarshyam03662@oksbi&am=${total}&cu=INR`}
                style={qrCodeStyle}
                />
                <br></br>
                <h2 style={{fontSize:"36px",fontWeight:"800",color:"wheat",fontFamily:"sans-serif"}}>Rs: {total}</h2>
        </div>
        



    </div>
    );
}

export default Qr