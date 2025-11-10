import { useCart } from "@/providers/cart-provider";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface CheckoutItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export function CheckoutItem(props: CheckoutItemProps) {
  const { removeFormCart } = useCart();
  return (
    <Card>
      <CardContent className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex  items-center gap-4">
          <img src={props.image} className="w-[75px] h-[75px]" />
          <h4 className="font-bold ">{props.name}</h4>
          <Button
            variant={"destructive"}
            onClick={() => removeFormCart(props.id)}
          >
            Remove
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-bold text-primary text-[14px]">
            x {props.quantity}
          </span>
          <span className="font-bold text-[18px]">{props.price} TND</span>
        </div>
      </CardContent>
    </Card>
  );
}
