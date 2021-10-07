const Header = ({cart}) => {
    return(
        <header>
            <div className="navigation">
            <h1>Happy pie</h1>
            <nav>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                </ul>
            </nav>
            </div>
            
            <div className="shopping-cart">
                <button>shopping cart ({cart.length})</button>
            </div>
        </header>
    )
}

export default Header;