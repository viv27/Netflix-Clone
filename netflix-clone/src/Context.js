import React, {Component,useState} from 'react'
import { render } from 'react-dom';

const {Provider,Consumer} = React.createContext();



    
    
    class ThemeContextProvider extends Component{
        state ={
            watched:[],
            watchlist:[]
        }

        addTheme = (title)=>{
            console.log("TITLE: ",title)
            this.setState(prevState=>{
                return{
                    watched:[...prevState.watched,title]
                }
            })
        }
        addWatched = (title)=>{
            console.log("TITLE: ",title)
            this.setState(prevState=>{
                return{
                    watchlist:[...prevState.watched,title]
                }
            })
        }
    
        render(){
        return(
                <Provider value ={{watched : this.state.watched,addTheme: this.addTheme,watchlist:this.state.watchlist,addWatched: this.addWatched}}>
                    {this.props.children}
                    {console.log("WATCHED: ",this.state.watched)}
                </Provider>
                
        )
        }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}