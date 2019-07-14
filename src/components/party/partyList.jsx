/* eslint-disable react/jsx-key */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import PartyCard from './partyCard';


class PartyList extends Component{
    render(){
      return this.props.partyListItem.map((party)=>(
        <div>
        <PartyCard key={party.id} party={party}/>
        </div>  
      )
      );
   }
  }
  PartyList.propTypes = {
    partyListItem: PropTypes.array.isRequired
  }
   export default PartyList;
  