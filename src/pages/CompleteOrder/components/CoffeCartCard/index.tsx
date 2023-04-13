import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContexts";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { Trash } from "phosphor-react";


interface CoffeeCartCardProps {
    coffee: CartItem;
}
export function CoffeCartCard({coffee}: CoffeeCartCardProps) {
    const {changeCartItemQuantity, removeCartItem} = useCart();
    function handleDecrease() {
        changeCartItemQuantity(coffee.id, 'decrease');
    } 
    function handleIncrease() {
        changeCartItemQuantity(coffee.id, 'increase');
    } 

    function handleRemove() {
        removeCartItem(coffee.id)
    }
        
    
   
    const coffeeTotal = coffee.price * coffee.quantity
    const formattedPrice = formatMoney(coffeeTotal);

  
    return(
        <CoffeeCartCardContainer>
            <div>
             <img src={`/public/coffees/${coffee.photo}`} />
              <div>
              <RegularText color="subtitle">{coffee.name} </RegularText>
              <ActionsContainer>
            <QuantityInput  quantity={coffee.quantity} 
             onDecrease={handleDecrease}
             onIncrese={handleIncrease}
             
            />
            <RemoveButton onClick={handleRemove}>
             <Trash size={16} />
             Remover
            </RemoveButton>
             </ActionsContainer>
              </div>
            </div>
          
        
            <p>R$ {formattedPrice} </p>
        </CoffeeCartCardContainer>
    )
}