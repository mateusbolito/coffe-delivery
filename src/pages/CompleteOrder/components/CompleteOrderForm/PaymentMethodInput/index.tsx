import { PaymentMethodContainer } from "./styles";
import { CreditCard } from "phosphor-react";
export function PaymentMethodInput() {
    return(
        <PaymentMethodContainer>
           <CreditCard size={16} />
            Cartao de credito
        </PaymentMethodContainer>
    )
}