import './Guestlog.css'

function Guestlog() {
    return (
        <div>
            <h3>Put your name down and a message!</h3>
            <input id="nameBox" placeholder="Name"></input>
            <textarea id="messageBox" placeholder="Message"></textarea>
            <button>Submit</button>
        </div>
    )
}

export default Guestlog