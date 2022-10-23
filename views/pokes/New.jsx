const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create a New Pokemon Page">
            <form method="POST" action="/pokes">
                Name: <input type="text" name="name" placeholder='Name of Poke'></input><br/>
                Image: <input type="text" name="image" placeholder='Image of Poke'></input><br/>
                <input type="submit" value="Submit Poke"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New