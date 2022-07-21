import React from 'react';
import './Exhibitions.css'; 
import {findExhibition} from '../../utils/utils';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          period: 'prehistory', 
          region: 'UK-Ireland', 
          exhibitions: '', 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {
        findExhibition(this.state.period, this.state.region, '', 'history').then((res) => {

           
           this.setState({exhibitions: res.data})
        });
         
        event.preventDefault();
      }

    render(){
        return(
              <div className='exhibitions'> 
                <h2>History</h2>
                <p>Explore our range of Historical exhibitions</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='dropdowns'>
                    <label for='period'>Period:</label>
                    <select id='period' name='period' onChange={this.handleChange}>
                       <option value='prehistory'>Prehistory (&lt; 600BC)</option>
                       <option value='classical'>Classical (600BC - 476AD)</option>
                       <option value='middle-ages'>The Middle Ages (476AD - 1450AD)</option>
                       <option value='early-modern'>Early Modern Period (1450AD - 1750AD)</option>
                       <option value='modern'>Modern Period (1750AD+)</option>
                    </select>                  
                    <label for='region'>Region:</label>
                    <select id='region' name='region' onChange={this.handleChange}>
                       <option value='UK-Ireland'>British Isles</option>
                       <option value='Europe'>Europe</option>
                       <option value='Americas'>Americas</option>
                       <option value='Africa'>Africa</option>
                       <option value='Asia-Oceania'>Asia & Oceania</option>
                    </select>
                    </div>
                    <input type='submit' value='Search' ></input>
                </form>
                {this.state.exhibitions && <div className="searchResults">
                    <img src={this.state.exhibitions.image}></img>
                    <div className='searchResults-text'>
                      <h3>{this.state.exhibitions.name}</h3>
                      <p>Dates: {this.state.exhibitions.startdate} - {this.state.exhibitions.enddate}</p>
                    </div>
                </div>}
              </div>

        )
    }
}

export default History;