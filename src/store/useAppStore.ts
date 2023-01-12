import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const useAppStore = create<any>()((set) => ({
  cards: [
    { id: 0, emoji: '🍅', name: 'Tomato', color: '#E42100', direction: 'none' },
    { id: 1, emoji: '🍊', name: 'Tangerine', color: '#F36000', direction: 'none' },
    { id: 2, emoji: '🍋', name: 'Lemon', color: '#F3BC00', direction: 'none' },
    { id: 3, emoji: '🍐', name: 'Pear', color: '#A0A226', direction: 'none' },
    { id: 4, emoji: '🥬', name: 'Lettuce', color: '#349B19', direction: 'none' },
    { id: 5, emoji: '🫐', name: 'Blueberries', color: '#70BBFF', direction: 'none' },
    { id: 6, emoji: '🍆', name: 'Eggplant', color: '#7F4877', direction: 'none' },
    { id: 7, emoji: '🍇', name: 'Grapes', color: '#BC2A6E', direction: 'none' },
  ],
  history: [],
  activeIndex: 0,
  setHistory: (history: any) => set({ history }),
  setActiveIndex: (activeIndex: number) => set({ activeIndex }),
  setCards: (cards: any) => set({ cards }),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useAppStore);
}

export default useAppStore;
