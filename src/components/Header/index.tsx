import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
export function Header() {

    const { CartQuantity} = useCart();

    return(
    <HeaderContainer>
        <div className="container">
            <NavLink to='/'>
            <img src={Logo} alt="" />
            </NavLink>
            <HeaderButtonsContainer>
                <HeaderButton variant="purple">
                <MapPin size={20} weight="fill" />
                Mato Grosso, MT
                </HeaderButton>
                <NavLink to='/completeOrder'>
                <HeaderButton variant="yellow">
                    {CartQuantity >= 1 && <span>{CartQuantity} </span>}
                <ShoppingCart size={20} weight="fill" />
                </HeaderButton>
                </NavLink>
            </HeaderButtonsContainer>
        </div>
    </HeaderContainer>
    )
}