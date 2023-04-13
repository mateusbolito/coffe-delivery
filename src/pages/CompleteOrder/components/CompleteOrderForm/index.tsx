import { CurrencyDollar, MapPin } from "phosphor-react";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "../styles";
import { useTheme } from "styled-components";
import { AdressForm } from "./AdressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompleteOrderForm() {
  const {colors} = useTheme();
    return(
       <CompleteOrderFormContainer>
        <TitleText size="xs" color="subtitle">
            complete seu pedido
        </TitleText>

        <FormSectionContainer>
            <SectionTitle
            title="Endereço de entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<MapPin color={colors["brand-yellow-dark"]} size={22}/>}
            />

            <AdressForm />
        </FormSectionContainer>

        <FormSectionContainer>
            <SectionTitle
            title="Pagamento "
            subtitle="Informe o endereço onde deseja receber seu pedido"
            icon={<CurrencyDollar color={colors["brand-purple"]} size={22}/>}
            />
           <PaymentMethodOptions />
        </FormSectionContainer>
       </CompleteOrderFormContainer>
    )
}