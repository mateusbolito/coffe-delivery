import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffes";
import { CoffeCard } from "../CoffeCard";
import { CoffeList, OurCoffesContainer } from "./styles";

export function OurCoffes() {
    return(
        <OurCoffesContainer className="container">
            <TitleText size="l" color="subtitle">Nossos Cafés</TitleText>
            
            <CoffeList>
            {coffees.map((coffee)=>(
            <CoffeCard key={coffee.id} coffe={coffee} />
            ))}
          </CoffeList> 
        </OurCoffesContainer>
    )
}