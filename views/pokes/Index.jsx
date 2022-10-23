const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const {pokes} = this.props
        // const pokes = this.props.pokes 
        return(
            <Default title="Pokemons Index Page">
                <ul>
                    {
                        pokes.map((poke) => {
                            const {name, image, _id} = poke
                            return (
                                <li key={_id}>
                                    <a href={`/pokes/${_id}`}>
                                    {name}</a> <br/>
                                    {image}
                                    
                                    <br/>
                                    <form method="POST" action={`/pokes/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index