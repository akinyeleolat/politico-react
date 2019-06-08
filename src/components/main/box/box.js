import React,{Component} from 'react';
class Box extends Component{
    render(){
      return (
        <div>
            <div className="box">
                    <h3>{this.props.title}</h3>
                    <img  ref="image" src={this.props.imageUri} />
                    <p>{this.props.desc}</p>
                </div>
        </div>
      )
    }
   }
   export default Box;
  