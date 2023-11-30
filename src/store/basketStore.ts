import { create } from "zustand";

export interface Prato {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: any;
  restaurante: number;
}

export interface BasketState {
  lista: Array<Prato & { quantity: number }>;
  addPrato: (prato: Prato) => void;
  removePrato: (prato: Prato) => void;
  clearCart: () => void;
  items: number;
  total: number;
}

const useBasketStore = create<BasketState>()((set) => ({
  lista: [],
  items: 0,
  total: 0,
  addPrato: (prato) => {
    set((state) => {
      state.items += 1;
      state.total += prato.preco;
      const hasPrato = state.lista.find((p) => p.id === prato.id);

      if (hasPrato) {
        hasPrato.quantity += 1;
        return { lista: [...state.lista] };
      } else {
        return { lista: [...state.lista, { ...prato, quantity: 1 }] };
      }
    });
  },
  removePrato: (prato) => {
    set((state) => {
      state.items -= 1;
      state.total -= prato.preco;
      return {
        lista: state.lista
          .map((p) => {
            if (p.id === prato.id) {
              p.quantity -= 1;
            }
            return p;
          })
          .filter((p) => p.quantity > 0),
      };
    });
  },
  clearCart: () => set({ lista: [], items: 0, total: 0 }),
}));

export default useBasketStore;
