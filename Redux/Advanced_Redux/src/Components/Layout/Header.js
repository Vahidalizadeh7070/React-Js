import '../../App.css';
import CartButton from './CartButton';
import HeaderClasses from './Header.module.css';
const { Fragment } = require("react")

const Header = props => {
    return (
        <Fragment>
            <nav className={`${HeaderClasses["heeader-height"]} fixed-top navbar navbar-light bg-light`}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-1 h1">Game shop</span>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <CartButton onClick={props.onShowCart}/>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}
export default Header;