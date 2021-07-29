import {Card} from "react-bootstrap";
import React from "react";
import './user.css'
import {GeoAltFill, TelephoneFill, EnvelopeFill} from "react-bootstrap-icons";


const User = ({data}) => {
    return (
        <Card className='usercard'>
            <Card.Img variant="top" src={data.picture.large}/>
            <Card.Body>
                <Card.Title>{
                    data.name.title +'. '+
                    data.name.first +' '+
                    data.name.last +', '+
                    data.dob.age}
                </Card.Title>
                <Card.Text>
                    <GeoAltFill/>{' ' + data.location.country + ', ' + data.location.city}
                </Card.Text>
                <Card.Text>
                    <TelephoneFill/>{'+' + data.cell}
                </Card.Text>
                <Card.Text>
                    <EnvelopeFill/>{' ' + data.email}
                </Card.Text>
                <Card.Text>
                    {data.info}
                </Card.Text>
            </Card.Body>
        </Card>)
}

export default User