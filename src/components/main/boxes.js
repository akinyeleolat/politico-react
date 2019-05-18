import React,{Component} from 'react';
import Box from './box/box';
import BoxItem from './box/boxItem';
class Boxes extends Component{
    render(){
        let boxList=[]
        BoxItem.map(item => {
            boxList.push(<Box title = {item.title} imageUri={item.imageUri} desc={item.desc}/>);
            return boxList;
        });
        return (
            <section id="boxes">
                <div className="container">
                    <h1><span className="highlight">How it Works</span></h1>
                    <div>{boxList}</div>
                </div>
            </section>
          )
    }
   }
   export default Boxes;
   