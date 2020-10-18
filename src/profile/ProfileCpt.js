import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProfileCpt = (props) => (
    
<>
    <div style={{paddingTop:'2.5%'}}>
        <div style={{border:'1px solid black',width:'30%',borderRadius:'10%',margin:'0 0 1% 36%',backgroundColor:'gray'}}>
            <h2 style={{textAlign:'center',color:'white',fontFamily:'Piedra, cursive'}}>Full Name: <span>{props.fullName}</span></h2>
            <h3 style={{textAlign:'center',color:'white',fontFamily:'Piedra, cursive'}}>Bio: {props.bio}</h3>
            <h3 style={{textAlign:'center',color:'white',fontFamily:'Piedra, cursive'}}>Profession: {props.profession}</h3>
        </div>
        <div>
            <p style={{textAlign:'center',fontSize:'20px',color:'whitesmoke'}}><strong>Omar's Photo</strong> <br/><br/>{props.children}</p>
            <Button variant="danger" size="lg" style={{marginLeft:'48%'}}><a href='/' onClick={e => props.nameClick(e)} style={{color:'black',fontWeight:'bold'}}>Alert</a></Button>{' '}
        </div>
    </div>
</>
    
);
ProfileCpt.defaultProps = {
    fullName:'Omar Tebessi',
    bio: 'technicien en génie mécanique',
    profession:"developpeur JavaScript",
    children:'picture',
    nameClick:'simple alert'
};
ProfileCpt.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.object,
    nameClick: PropTypes.func,
}
export default ProfileCpt;