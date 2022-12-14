const React = require('react');

class Default extends React.Component {
    render(){
        const {poke, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <h1>
                    {title}
                </h1>
                <body>
                    <nav>
                        <a href="/pokes">Go to Home Page For pokemons  </a>    
                        <a href="/pokes/new">  Create a New pokemon </a> <br/>
                        { poke? <a href={`/pokes/${poke._id}/edit`}> {poke.name} Edit Page </a> : ''} <br/>
                        { poke? <a href={`/pokes/${poke._id}`}>{poke.name} Show Page</a> : ''}
                    </nav>
                    {/* <h1>
                        {title}
                    </h1> */}
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default