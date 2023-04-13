import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeCartCard } from "../CoffeCartCard";
import { CofirmationSection } from "./ConfimationSection";
import { DetailsContainer, SelectedCoffesContainer } from "./styles";

export function SelectedCoffes() {
    const {cartItems} = useCart();
    return(
        <SelectedCoffesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>
            <DetailsContainer>
                {cartItems.map((item) =>(
                  <CoffeCartCard key={item.id} coffee={item} /> 
                  ))}
                
                

                <CofirmationSection />
            </DetailsContainer>
        </SelectedCoffesContainer>
    )
}