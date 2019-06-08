import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Layout extends Component{
 render(){
   return (
   <h1>{title}</h1>
   )
 }
};
const app = document.getElementById('app');
const title = 'Welcome: Politico';
ReactDOM.render(
  <Layout/>, app
);