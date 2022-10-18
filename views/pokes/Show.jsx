
const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {name, image, _id} = this.props.poke
        return(
        <Default title={`${name} Show Page`} poke={this.props.poke}>
            <img src={`${image}`} alt={`Image of ${name}`} />
        </Default>
        )
   } 
}

module.exports = Show