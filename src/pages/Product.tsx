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
import type { Product } from "@/lib/interfaces";
import { Rating, RatingButton } from "@/components/ui/shadcn-io/rating";
import { RecomendedProducts } from "@/components/RecomendedProducts";
import { Separator } from "@/components/ui/separator";
function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

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
      <div className=" w-full sm:w-[80%] bg-white p-2 sm:p-6 rounded-xl ">
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
            <Button className="max-w-xs">Add to cart</Button>
            <p className="text-foreground font-medium hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <Separator className="my-5 " />
        <h4 className="font-bold text-xl text-center">You might also like</h4>
        <RecomendedProducts category={product?.category} id={id}/>
      </div>
    </div>
  );
}
export default Product;
