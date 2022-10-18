const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {name, image, _id} = this.props.poke
        return (
            <Default title={`${name} Edit Page`} poke={this.props.poke}>
                <form method="POST" action={`/pokes/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Image: <input type="img" name="image" defaultValue={image}></input><br />
                    <input type="submit" value="Edit Poke" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit