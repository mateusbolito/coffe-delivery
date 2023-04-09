import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import IntroImg from '../../../../assets/IntroImg.png'
import { RegularText } from "../../../../components/Typography";
export function Intro() {
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
                <p>beneficip</p>
                <p>beneficip</p>
                <p>beneficip</p>
                <p>beneficip</p>
            </BenefitsContainer>

         </div>
         <img src={IntroImg}/>
        </IntroContent>
    </IntroContainer>
 )
}