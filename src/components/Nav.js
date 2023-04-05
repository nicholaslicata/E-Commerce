import { Link } from 'react-router-dom';

function Nav() {
    return(
        <nav className='navbar'>
            <div className='nav-logo'>
                <h1>E-Commerce</h1>
            </div>
            <div className='nav-links'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='store'>Store</Link>
                <Link className='nav-link' to='cart'>Cart</Link>
            </div>
        </nav>
    )
}

export default Nav;