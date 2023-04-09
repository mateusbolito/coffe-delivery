import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'
export function Header() {
    return(
    <HeaderContainer>
        <div className="container">
            <img src={Logo} alt="" />
            <HeaderButtonsContainer>
                <HeaderButton variant="purple">
                <MapPin size={20} weight="fill" />
                Mato Grosso, MT
                </HeaderButton>
                <HeaderButton variant="yellow">
                <ShoppingCart size={20} weight="fill" />
                </HeaderButton>
            </HeaderButtonsContainer>
        </div>
    </HeaderContainer>
    )
}