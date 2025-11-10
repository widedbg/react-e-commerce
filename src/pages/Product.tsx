import { useParams } from "react-router-dom";
import { products } from "@/dev-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { Product as ProductI } from "@/lib/interfaces";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { RecomendedProducts } from "@/components/RecomendedProducts";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

import { useCart } from "@/providers/cart-provider";
import { toast } from "sonner";
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductI>();
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const { addToCart } = useCart();
  function AddNewItemToCart() {
    const data = {
      id: Number(id),
      quantity: selectedQuantity,
    };
    addToCart(data);
    toast.success(`Product added to your cart!`, {
    description: "You can view your cart or continue shopping.",
    duration: 3000, 
    });
  }
  useEffect(() => {
    if (id) {
      const foundProduct = products.find((prod) => {
        return prod.id === Number(id);
      });

      setProduct(foundProduct);
    } else {
      console.log("Product not found");
    }
  }, [id]);

  return (
    <div className="bg-muted flex justify-center min-h-screen w-full p-1 sm:p-6">
      <div className=" w-full sm:w-[80%] bg-white dark:bg-black p-2 sm:p-6 rounded-xl ">
        <div className="flex  flex-col sm:flex-row gap-3 sm:gap-6  ">
          <div>
            <Carousel>
              <CarouselContent>
                {product?.detailImages?.map((image, index) => {
                  return (
                    <CarouselItem key={index}>
                      <img src={image} className="rounded-xl" />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-4xl font-bold ">{product?.name}</h3>

            <span className="font-bold">
              {product?.price} TND{" "}
              <span className="text-primary">({product?.discount})</span>
            </span>

            <div className="flex  items-center gap-3">
              <Rating value={product?.rating} readOnly>
                {Array.from({ length: 5 }).map((_, index) => (
                  <RatingButton className="text-yellow-500" key={index} />
                ))}
              </Rating>
              <span className="font-bold">{product?.reviews} Reviews</span>
            </div>

            <div className="flex gap-2">
              {product?.badges.map((b) => (
                <Badge>{b}</Badge>
              ))}
            </div>
            <span className=" font-bold text-xl">
              Available item :{product?.quantity}
            </span>
            <Input
              value={selectedQuantity}
              max={product?.quantity}
              min={1}
              onChange={(event) =>
                setSelectedQuantity(Number(event.target.value))
              }
              type="number"
              step={1}
            />
            <Button className="max-w-xs" onClick={AddNewItemToCart}>
              Add to cart
            </Button>
            <p className="text-foreground font-medium hidden md:block">
              {product?.description}
            </p>
          </div>
        </div>
        <Separator className="my-5 " />
        <h4 className="font-bold text-xl text-center">You might also like</h4>
        <RecomendedProducts category={product?.category} id={id} />
      </div>
    </div>
  );
}
export default Product;
