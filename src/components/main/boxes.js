import React,{Component} from 'react';
import Box from './box/box';
import BoxItem from './box/boxItem';
class Boxes extends Component{
    render(){
        let i;
        let boxList=[]
        for(i=0;i<BoxItem.length;i++){
            boxList.push(<Box title = {BoxItem[i].title} imageUri={BoxItem[i].imageUri} desc={BoxItem[i].desc}/>);
        }
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
   