import React from 'react';
import './Exhibitions.css'; 
import {findExhibition} from '../../utils/utils';

class Science extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          type: 'maths-computers', 
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
        findExhibition('', '', this.state.type, 'science').then((res) => {

           
           this.setState({exhibitions: res.data})
        });
         
        event.preventDefault();
      }

    render(){
        return(
              <div className='exhibitions'> 
                <h2>Science</h2>
                <p>Explore our range of Scientific exhibitions</p>
                <form onSubmit={this.handleSubmit}>
                    <div className='dropdowns'>
                    <label for='type'>Type:</label>
                    <select id='type' name='type' onChange={this.handleChange}>
                       <option value='maths-computers'>Maths & Computers</option>
                       <option value='physics-engineering'>Physics & Engineering</option>
                       <option value='chemistry'>Chemistry</option>
                       <option value='astronomy-space'>Astronomy & Space</option>
                       <option value='life-sciences-medicine'>Life Sciences & Medicine</option>
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

export default Science;