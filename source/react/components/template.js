import React, {Component} from 'react'
import stylus from '../../stylus/main.styl'

export default class Template extends Component{
    render(){
        return  <section id="template">
                    <h2 className={stylus.test} style={{backgroundImage:'url(assets/fofao.jpg)'}}>Template page</h2>
                    <img src={require('../../assets/fofao.jpg')}/>
                </section>
    }
}
