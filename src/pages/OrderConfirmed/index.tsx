import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import foto from '../../assets/Foto.svg'
import { InfoWithIcom } from "../../components/InfoWithIcon";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
 
 export function OrderConfirmedPage()  {
    const { colors } = useTheme();
    return(
    <OrderConfirmedContainer className="container">
    <div>
    <TitleText size="l">Uhu! Pedido confirmado</TitleText> 
    <RegularText size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
    </div>          
    <section>
        <OrderDetailsContainer>
            <InfoWithIcom  
              icon={<MapPin weight="fill" />}
              iconBg={colors["brand-purple"]}
              text={
                <RegularText>Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
                 <br/>
                 Farrapos - Porto Alegre, RS
                </RegularText>
              }
            />
             <InfoWithIcom  
              icon={<Clock weight="fill" />}
              iconBg={colors["brand-yellow"]}
              text={
                <RegularText>Previsao de entrega
                 <br/>

                 <strong>20 min - 30 min</strong>
                </RegularText>
              }
            />
             <InfoWithIcom  
              icon={<CurrencyDollar weight="fill" />}
              iconBg={colors["brand-purple"]}
              text={
                <RegularText>Pagamento na Entrega
                 <br/>
                <strong>Cartão de Crédito</strong>
                </RegularText>
              }
            />
        </OrderDetailsContainer>
        
         <img src={foto} alt="" />
    </section>          

</OrderConfirmedContainer>
    )
 }
