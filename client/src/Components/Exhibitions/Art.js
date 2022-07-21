import React from 'react';
import './Exhibitions.css'; 
import {findExhibition} from '../../utils/utils';

class Art extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          period: 'medieval-ancient', 
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
        findExhibition(this.state.period, this.state.region, '', 'art').then((res) => {

           
           this.setState({exhibitions: res.data})
        });
         
        event.preventDefault();
      }

    render(){
        return(
              <div className='exhibitions'> 
                <h2>Art</h2>
                <p>Explore our range of Art exhibitions</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='dropdowns'>
                    <label for='period'>Period:</label>
                    <select id='period' name='period' onChange={this.handleChange}>
                       <option value='medieval-ancient'>Medieval & Ancient (&lt; 1400 AD)</option>
                       <option value='renaissance-neoclassicism-romanticism'>1400AD - 1830AD</option>
                       <option value='modern-contemporary'>Modern & Contemporary (1830AD +)</option>
                    </select>                  
                    <label for='region'>Region:</label>
                    <select id='region' name='region' onChange={this.handleChange}>
                       <option value='UK-Ireland'>UK & Ireland</option>
                       <option value='US-Canada'>US & Canada</option>
                       <option value='Europe'>Europe</option>
                       <option value='Latin-America-Caribbean'>Latin America & Caribbean</option>
                       <option value='Africa'>Africa</option>
                       <option value='Asia-Oceania'>Asia & Oceania</option>
                    </select>
                    </div>
                    <input type='submit' value='Search' ></input>
                </form>
                {this.state.exhibitions && 
                  <div className="searchResults">
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

export default Art ;