import React,{Component} from 'react';
import Showcase from './showcase';
import Newsletter from './newsletter';
import Boxes from './boxes';
import './main.css'
class Main extends Component{
    render(){
      return (
        <div className='main'>
        <Showcase/>
        <Newsletter/>
        <Boxes/>
        </div>
      )
    }
   }
   export default Main;
   