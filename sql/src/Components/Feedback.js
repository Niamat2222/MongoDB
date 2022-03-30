import React from 'react'
import Statics from './Statics'
import Statistics from './Statistics'
import Button from './Button'


class Feedback extends React.Component{    
    constructor(){
        super()
        this.state = {
            hyvaLaskuri: 0,
            naturaaliLaskuri: 0,
            huonolaskuri: 0,
            value: 0
        }
    }
            
    keskiarvo
    =() =>{
        const keskiarvo
        = ((this.state.hyvaLaskuri - this.state.huonolaskuri)/(this.state.hyvaLaskuri + this.state.naturaaliLaskuri + this.state.huonolaskuri))
        .toFixed(1) 
        return keskiarvo
        ;
    }

    positiivinen
     = () =>{
        const positiivinen = ((this.state.hyvaLaskuri / (this.state.hyvaLaskuri + this.state.naturaaliLaskuri + this.state.huonolaskuri))*100)
        .toFixed(1)
        return positiivinen
    }
    
    render(){

        return(
            <div>
               <p>Lähettää palautus</p>
                <Button handleClick={() => 
                    this.setState({hyvaLaskuri : this.state.hyvaLaskuri +1, value:this.state.value+1})} text={"Hyvä"}/>

                <Button handleClick={() => 
                    this.setState({naturaaliLaskuri : this.state.naturaaliLaskuri +1, value:this.state.value+1})} text={"Neutraali"}/>

                <Button handleClick={() => 
                    this.setState({huonolaskuri : this.state.huonolaskuri +1, value:this.state.value+1})} text={"Huono"}/>

                <p>statiikkat</p>

                {
                    this.state.value > 0 ? (
            <div>

            <table>
                <tbody>
                    
                    <Statics name={"Hyvä"} stats={this.state.hyvaLaskuri}/>

                    <Statics name={"Neutraali"} stats={this.state.naturaaliLaskuri}/>

                    <Statics name={"Huono"} stats={this.state.huonolaskuri}/>

                    <Statistics name={"keskiarvo"} statis={this.keskiarvo()}/>

                    <Statistics name={"positiivinen"} statis={this.positiivinen()}/>

                </tbody>
            </table>
            </div>
                    ) : (
                      <h4>Ei palautusta saatu</h4>
                    )
                }   
            </div>
        )
    }

      
}
export default Feedback