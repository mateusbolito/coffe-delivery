import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffes } from "./components/SelectedCoffes";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrderPage() {
    return(
        <CompleteOrderContainer className='container'>
            <CompleteOrderForm/>
            <SelectedCoffes/>
        </CompleteOrderContainer>
    )
}