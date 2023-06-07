import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  AddCartWrapper,
  CardFooter,
  CoffeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";
import { ShoppingCart } from "phosphor-react";

export interface Coffe {
  id: number;
  tags: string;
  name: string;
  description: string;
  photo: string;
  price: number;
}
interface CoffeeProps {
  coffee: Coffe;
}
export function CoffeCard({ coffe }: any) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeToCart } = useCart();

  function handleIncrese() {
    setQuantity((state) => state + 1);
  }
  function handleDecrease() {
    setQuantity((state) => state - 1);
  }
  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffe,
      quantity: 1,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  const formattedPrice = formatMoney(coffe.price);

  return (
    <CoffeCardContainer>
      <img src={`/public/coffees/${coffe.photo}`} />
      <Tags>
        {coffe.tags.map((tag: any) => (
          <span key={`${coffe.id}${tag}`}> {tag} </span>
        ))}
      </Tags>

      <Name>{coffe.name} </Name>
      <Description>{coffe.description} </Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="title">
            {formattedPrice}{" "}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput
            onIncrese={handleIncrese}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeCardContainer>
  );
}
