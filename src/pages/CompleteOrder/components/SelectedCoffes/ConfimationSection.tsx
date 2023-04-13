
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
 

 const DELIVERY_PRICE = 10.9

export function CofirmationSection() {
    const {cartItemsTotal, CartQuantity} = useCart() 

    const carTotal = DELIVERY_PRICE + cartItemsTotal

    const formattedItemsTotal = formatMoney(cartItemsTotal);
    const formattedCartotal = formatMoney(carTotal);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
    return(
        <ConfirmationSectionContainer>
            <div>
            <RegularText size="s">total de itens</RegularText>
            <RegularText >R$ {formattedItemsTotal} </RegularText>
            </div> 

            <div>
            <RegularText size="s">Entregas</RegularText>
            <RegularText >R$ {formattedDeliveryPrice} </RegularText>
            </div> 

            <div>
            <RegularText size="l" weight={700} color="subtitle">Total</RegularText>
            <RegularText size="l" weight={700} color="subtitle">R$ {formattedCartotal} </RegularText>
            </div>

            <Button  text="Confirmar pedido" disabled={CartQuantity <= 0} />
        </ConfirmationSectionContainer>
    )
}