import React from 'react'

const Weather = ({temperature}) => {
    
    
    if(temperature < 15){
        return (<h1>It's Cold Outside</h1>);
    }else if(temperature >=15 && temperature <= 25){
        return (<h1>It's Nice Outside</h1>)
    }else{
        return (<h1>It's hot outside!</h1>)
    }
  
}

export default Weather