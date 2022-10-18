import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import pic from '../assets/img/icon.jpg';
const styles= {
   
};
const Home=()=>(
    <Fragment>
        <Helmet><title>Quiz App - Home</title></Helmet>
        <div id='home'>
            <section>
                <div style={{textAlign : 'center'}}>
                    <img src={pic} style={styles.image}></img>
                </div>
            
            <h1>Quiz App</h1>
            <div className='play-button'>
                <ul>
                    <li><Link  className='play' to="/play/instructions">Play</Link></li>
                </ul>
            </div>
            {/* <div className='auth-container'>
                <Link to="/login" className='auth-buttons' id='login-button'>Login</Link>
                <Link to="/Register" className='auth-buttons' id='reg-button'>Register</Link>
            </div> */}
            </section>
        </div>
    </Fragment>
    
        
    
);

export default Home;