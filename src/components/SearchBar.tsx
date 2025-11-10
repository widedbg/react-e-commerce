import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { products } from "@/dev-data";
import { useNavigate } from "react-router-dom";
import type { Product } from "@/lib/interfaces";

export function SearchBar() {
  const navigate = useNavigate();
  const [searchedValue, setSearchedValue] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  useEffect(() => {
    setFilteredProducts(
      products.filter((prod) =>
        prod.name.toLowerCase().includes(searchedValue.toLowerCase())
      )
    );
  }, [searchedValue]);
  function handleClick(value: string) {
    const productId = products.find((prod) => prod.name === value)?.id;

    navigate("/products/" + productId);
  }
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"outline"} className="w-[190px] lg:w-[340px]">
          Search...
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[190px] lg:w-[340px]">
        <Command>
          <CommandInput
            value={searchedValue}
            onValueChange={setSearchedValue}
            placeholder="Search framework..."
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No product is found</CommandEmpty>
            <CommandGroup>
              {filteredProducts.map((prod) => (
                <CommandItem
                  value={prod.name}
                  onSelect={(value) => handleClick(value)}
                >
                  {prod.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
