// used to be required but not any more.. espesially when we use classes
// import React from 'react'

//destructre the props {} and just take whhat you need... without the messy props.something 
const Header = ({title}) => {
    return (
        <header>
            <h1>Hello from React
            </h1>
                 {title}

        </header>
    )
}


// we can have a default props value if not passed down from the parent to the chiled 

Header.defaultProps = {
    title : "just learning"
}


export default Header
