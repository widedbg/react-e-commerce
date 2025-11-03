import { createContext, useContext, useState } from "react";

type TCart = {
  id: number;
  quantity: number;
};
type CartContextType = {
  cart: TCart[];
  setCart: (cart: TCart[]) => void;
  removeFormCart: (id: number) => void;
  addToCart: (cart: TCart) => void;
};
const initValue = {
  cart: [],
  setCart: () => null,
  removeFormCart: () => null,
  addToCart: () => null,
};

const CartContext = createContext<CartContextType>(initValue);
export function CartProvider({ children, ...props }) {
  const [cart, setCart] = useState<TCart[]>([]);
  function addToCart(newCart: TCart) {
    
    setCart((prev) => {
        const foundIdx = prev.findIndex((c)=> c.id === newCart.id);

        if(foundIdx !== -1){
            return prev.map((c,i) => i === foundIdx ? { ...c, quantity: newCart.quantity} : c);

        }
        return [...prev, { id: newCart.id, quantity: newCart.quantity}];
    });
  };
  function removeFormCart(id: number) {
    
    setCart(
        (prev) => prev.filter((c) => c.id !== id)
    );
  }
  const value = {
    cart,
    setCart,
    addToCart,
    removeFormCart,
  };
  return (
    <CartContext.Provider {...props} value={value}>
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
