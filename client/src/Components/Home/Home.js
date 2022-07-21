import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import './Home.css'; 

class Home extends React.Component {

    render(){
        return (

            <div className='links'>
                <Link className='individual-link' exact to='/history'>
                  <img src='https://cdn.pixabay.com/photo/2019/07/14/09/36/palace-4336616_1280.jpg' alt='history museum'/>
                  <div className='individual-link-text'>
                    <h2>History</h2>
                    <p>Explore our range of Historical exhibitions</p>
                  </div>
                </Link>
                <Link className='individual-link' exact to='/art'>
                  <img src='https://cdn.pixabay.com/photo/2019/05/31/13/35/art-gallery-4242219__340.jpg' alt='an art gallery'/>
                  <div className='individual-link-text'>
                    <h2>Art</h2>
                    <p>Explore our range of Art exhibitions</p>
                  </div>
                </Link>
                <Link className='individual-link' exact to='/natural-history'>
                  <img src='https://cdn.pixabay.com/photo/2019/10/29/14/29/natural-history-museum-4587057__480.jpg' alt='a dinosaur skeleton in a museum'/>
                  <div className='individual-link-text'>
                    <h2>Natural History</h2>
                    <p>Explore our range of Natural History exhibitions</p>
                  </div>
                </Link>
                <Link className='individual-link' exact to='/science'>
                  <img src='https://cdn.pixabay.com/photo/2018/08/12/19/17/museum-of-science-and-technology-3601470__340.jpg' alt='exhibitions in a science museum'/>
                  <div className='individual-link-text'>
                    <h2>Science</h2>
                    <p>Explore our range of Science exhibitions</p>
                  </div>
                </Link>
            </div>
         
        )
    }
}

export default Home ;