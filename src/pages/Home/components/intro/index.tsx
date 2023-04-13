import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import IntroImg from '../../../../assets/IntroImg.png'
import { RegularText } from "../../../../components/Typography";
import { ShoppingCart, Package, Timer, Coffee} from "phosphor-react";
import { InfoWithIcom } from "../../../../components/InfoWithIcon";
import { useTheme } from "styled-components";
export function Intro() {
  const {colors} = useTheme()
 return(
    <IntroContainer>
        <IntroContent className="container">
         <div>
          <section>
            <IntroTitle size="xl">
            Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as='h3'>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </RegularText>
          </section>
            <BenefitsContainer>
            <InfoWithIcom icon={<ShoppingCart weight="fill"/>} 
               iconBg={colors["brand-yellow-dark"]}
               text='compra simples e sugura'
                />
                <InfoWithIcom icon={<Package weight="fill"/>} 
               iconBg={colors["base-text"]}
               text='Embalagem manter o vafé intacto'
                />
                 <InfoWithIcom icon={<Timer weight="fill"/>} 
               iconBg={colors["brand-yellow-dark"]}
               text='Entrega rapida e rastreada'
                />
                 <InfoWithIcom icon={<Coffee weight="fill"/>} 
               iconBg={colors["brand-purple"]}
               text='o café chega fresquinho até voce'
                />
            </BenefitsContainer>

         </div>
         <img src={IntroImg}/>
        </IntroContent>
    </IntroContainer>
 )
}