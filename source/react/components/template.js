import React, {Component} from 'react'
import stylus from '../../stylus/main.styl'

export default class Template extends Component{
    render(){
        return  <section id="template">
                    <h2 className={stylus.test}>Template page</h2>
                </section>
    }
}
