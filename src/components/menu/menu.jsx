import './menu.css'

export const Menu = ({toggleDrop,dropOpen}) => {
    return (
        <button className={`menuButton ${dropOpen ? 'menuOpen' : ''}`} onClick={toggleDrop}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}