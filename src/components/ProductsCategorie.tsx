import { useParams } from "react-router-dom";
import { products } from "@/dev-data";
import ProductCard from "./ProductCard";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Slider } from "./ui/slider";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { useEffect, useState } from "react";
interface Filters {
  price: number[];
  rating?: number;
}
export function ProductCategorie() {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (prod) => prod.category === category
  );
  const [productsList, setProductsList] = useState(filteredProducts);

  const [sort, setSort] = useState<string>("price-accending");
  const [filters, setFilters] = useState<Filters>({
    price: [0, 3000],
  });
 useEffect(() => {
  let templist = filteredProducts;

  
  if (filters.price) {
    templist = templist.filter(
      (prod) =>
        prod.price >= filters.price[0] && prod.price <= filters.price[1]
    );
  }
  if (filters.rating) {
    templist = templist.filter((prod) => prod.rating === filters.rating);
  }

  
  if (sort === "price-accending") {
    templist = templist.sort((a, b) => a.price - b.price);
  } else if (sort === "price-decending") {
    templist = templist.sort((a, b) => b.price - a.price);
  } else if (sort === "popularity") {
    templist = templist.sort((a, b) => b.rating - a.rating); // exemple de popularité
  } else if (sort === "new") {
    templist = templist.sort((a, b) => b.id - a.id); // exemple : id plus récent = nouveau
  }

  setProductsList(templist);
}, [filters, sort, category]);

  return (
    <div>
      <div className="bg-muted flex justify-center min-h-screen w-full p-1 sm:p-6">
        <div className=" w-full sm:w-[80%] bg-white dark:bg-black p-2 sm:p-6 rounded-xl ">
          {/*filter section*/}
          <div className="flex justify-end gap-3">
            <Dialog>
              <DialogTrigger>
                <Button>Filter</Button>
              </DialogTrigger>
              <DialogContent className="max-w-[420px]">
                <DialogHeader>
                  <DialogTitle>Filters</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gab-3">
                  <div className="w-[60%] space-y-3">
                    <Label className="font-bold text-lg">Price Range</Label>
                    <Slider
                      value={filters?.price}
                      onValueChange={(value) =>
                        setFilters({ ...filters, price: value })
                      }
                      max={3000}
                      step={1}
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Min: {filters?.price?.[0]}</span>
                      <span>Max: {filters?.price?.[1]}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label className="font-bold text-lg">Rating</Label>
                    <Rating
                      value={filters?.rating}
                      onValueChange={(value) =>
                        setFilters({ ...filters, rating: value })
                      }
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <RatingButton className="text-yellow-500" key={index} />
                      ))}
                    </Rating>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose>
                    <Button variant={"secondary"}>Cancel</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button>Sort</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                  <DropdownMenuRadioItem value="price-accending">
                    Price accending
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-decending">
                    Price decending
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="popularity">
                    Popularity
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="new">New</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/*product list*/}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 mt-5 ">
            {productsList.map((prod) => (
              <ProductCard
                id={prod.id}
                name={prod.name}
                image={prod.image}
                category={prod.category}
                price={prod.price}
                discount={prod.discount}
                rating={prod.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
