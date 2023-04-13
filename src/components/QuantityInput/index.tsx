import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
quantity: number;
onIncrese: () => void;
onDecrease: ()=> void;
}
export function QuantityInput({onIncrese, onDecrease, quantity}: QuantityInputProps) {
    return(
        <QuantityInputContainer  >
        <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
            <Minus size={14} weight="fill"/>
        </IconWrapper>
           <input type="number" readOnly value={quantity}/> 

           <IconWrapper onClick={onIncrese}>
            <Plus size={14} weight="fill"/>
        </IconWrapper>
           
        </QuantityInputContainer>
    );
}