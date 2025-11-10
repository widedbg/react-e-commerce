import { CheckoutItem } from "@/components/Checkoutitem";
import { Button } from "@/components/ui/button";
import { products } from "@/dev-data";
import type { Product } from "@/lib/interfaces";
import { useCart } from "@/providers/cart-provider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function Checkout() {
  const { cart, setCart } = useCart();
  const [checkoutProducts, setcheckoutProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length > 0) {
      const filteredProducts = products.filter((prod) =>
        cart.find((c) => c.id === prod.id)
      );
      let TempTotalPrice = 0;
      filteredProducts.forEach((prod) => {
        const quantity = cart.find((c) => c.id === prod.id)?.quantity as number;
        TempTotalPrice = TempTotalPrice + prod.price * quantity;
      });
      setTotalPrice(TempTotalPrice);
      setcheckoutProducts(filteredProducts);
    }
  }, [cart]);
  function finishCheckout() {
    toast.success("thank you for your purchase");
    setCart([]);
    navigate("/");
  }

  return (
    <div className="flex justify-center">
      {checkoutProducts?.length > 0 ?
      <div className="w-full p-1 lg:p-5 lg:w-[80%] flex flex-col gab-4">
        {checkoutProducts.map((prod) => {
          const quantity = cart.find((c) => c.id === prod.id)
            ?.quantity as number;
          return (
            <CheckoutItem
              name={prod.name}
              image={prod.image}
              quantity={quantity}
              price={prod.price}
              id={prod.id}
            />
          );
        })}
        <div className="flex-justify-end">
          <span className="font-bold text-[18px]">Total : {totalPrice}</span>
        </div>
        <div className="flex-justify-end">
          <Button onClick={finishCheckout}>Confirm Purchase</Button>
        </div>
      </div>: 
      <div className="w-full p-1 lg:p-5 item-center lg:w-[80%] flex flex-col gap-4">
            <p className="font-bold text-xl">
                There is no products in your cart select some product to finish your checkout.
            </p>
            <Button onClick={(()=> navigate('/products'))} className="max-w-[220px]">
                Browse Products

            </Button>
      </div>
      } 
    </div>
  );
}
