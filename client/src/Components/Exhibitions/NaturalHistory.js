import React from 'react';
import './Exhibitions.css'; 
import {findExhibition} from '../../utils/utils';

class NaturalHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          type: 'reptiles-amphibians', 
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
        findExhibition('', '', this.state.type, 'naturalhistory').then((res) => {

           
           this.setState({exhibitions: res.data})
        });
         
        event.preventDefault();
      }

    render(){
        return(
              <div className='exhibitions'> 
                <h2>Natural History</h2>
                <p>Explore our range of Natural History exhibitions</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='dropdowns'>
                    <label for='type'>Type:</label>
                    <select id='type' name='type' onChange={this.handleChange}>
                       <option value='reptiles-amphibians'>Reptiles & Amphibians</option>
                       <option value='fish'>Fish</option>
                       <option value='birds'>Birds</option>
                       <option value='mammals'>Mammals</option>
                       <option value='insects-spiders'>Insects & Spiders</option>
                       <option value='plants'>Plants</option>
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

export default NaturalHistory;