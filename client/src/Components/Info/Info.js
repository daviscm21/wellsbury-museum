import React from 'react'; 
import './Info.css'; 

class Info extends React.Component {

    render(){
        return (
           <div className="info">
               <div className='info-box col'>
                 <div className='info-box-text'>
                   <h3>Who we are:</h3>
                   <p>Wellsbury Museum has been the main museum for the Wellsbury area since we opened in 1902. We have over 200,000 items in our museum of which around 10,000 are on display at any one time.</p>
                 </div>
                 <img src='https://cdn.pixabay.com/photo/2019/06/11/21/11/architecture-4267898__480.jpg' alt='street outside museum'></img>
               </div>
               <div className='info-box col'>
                 <img src='https://culture.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/2021-12/monika-kozub-unsplash-web.jpg?h=11b34633&itok=29aMbOcK' alt='staff member teaching children at museum workshop'></img>
                 <div className='info-box-text'>
                   <h3>What we do:</h3>
                   <p>Our goal is to be a place for residents of all ages to develop their interest in history and culture. We have a year round exhibition on the history of the town and a section of our art gallery is dedicated to local artists. We aim to encourage a passion from a young age with our tours dedicated to school visits and our staff regularly go into schools to give talks.</p>
                 </div>
               </div>
               <div className='pricing-and-opening col'>
               <div className='pricing'>
               <h3>Pricing:</h3>
               <table className='pricing-table'>
                 <tr>
                   <th>Ticket Type</th>
                   <th>Price</th>
                 </tr>
                 <tr>
                   <td>Adult</td>
                   <td>£15</td>
                 </tr>
                 <tr>
                   <td>Pensioner</td>
                   <td>£12</td>
                 </tr>
                 <tr>
                   <td>Student (18+)</td>
                   <td>£11</td>
                 </tr>
                 <tr>
                   <td>Child</td>
                   <td>£9</td>
                 </tr>
                 <tr>
                   <td>Adult (Family)</td>
                   <td>£13</td>
                 </tr>
                 <tr>
                   <td>Child (Family)</td>
                   <td>£7</td>
                 </tr>
                 <tr>
                   <td>Adult (School Tour)</td>
                   <td>£10</td>
                 </tr>
                 <tr>
                   <td>Child (School Tour)</td>
                   <td>£5</td>
                 </tr>
               </table>
               </div>
               <div className='opening'>
               <h3>Opening Hours:</h3>
               <p>Tuesday - Saturday, 9am - 5pm</p>
               <p>Sundays & Mondays, closed</p>
               </div>
               </div>
           </div>
        )
    }
}

export default Info ;