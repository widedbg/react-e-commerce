
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel"
import { products } from "@/dev-data"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
export function PromotionSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const navigate=useNavigate();
  function navigateToDetails(id:number){
      navigate('/products/' + id);
  }
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent >
        {products.slice().map((prod, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col md:flex-row gap-5 aspect-16/4   ">
                  <img src={prod.image} className="rounded-2xl shadow"/>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-3xl font-bold text-primary">{prod.name}</h3>
                    <p className="text-foreground font-medium hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                      <div className="flex gap-2">{ 
                      prod.badges.map((b) => (
                        <Badge>{b}</Badge>
                      ))
                    }
                    </div>


                    <span className="font-bold">
                      {prod.price} TND <span className="text-primary">({prod.discount})</span>
                    </span> 
                    <Button className="max-w-xs" onClick={() => navigateToDetails(prod.id)}>
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
  )
}
