import React from 'react';
class Photos extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            type:'photos',
            picData: []
        }
            }
        
            componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>res.json())
        .then(pics=>{
            this.setState({
                picData: pics
            })
        }

        )
            }

    render(){
    return<div>
        <h2>Photos</h2>
        {this.state.picData.slice(0,5).map((pic, key) => (
        <img
        src={pic.url}
        alt="car"
      />
      ))}
    </div>
    }
}

export default Photos;