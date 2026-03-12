import './Nav.css'

function Nav({ setPage }) {
    return (
        <div id="nav">
            <ul>
                <li onClick={ () => setPage("home") }>Home</li>
                <li onClick={ () => setPage("about") }>About</li>
                <li onClick={ () => setPage("contact") }>Contact</li>
            </ul>
        </div>
    )
}

export default Nav