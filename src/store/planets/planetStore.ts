import { create } from 'zustand';
import {  PlanetStoreState } from './types';

export const usePlanetStore = create<PlanetStoreState>((set, get) => ({
    planets: [],
    searchQuery: '',
    isLoading: true,
    sortAZ: false,
    itemsPerPage: false,

    
    setSearchQuery: (query) => set({ searchQuery: query }),
    setPlanets: (planets) => set({ planets }),
    setLoading: (loading: boolean) => set({ isLoading: loading }),
    setSortAZ: (sort: boolean) => set({ sortAZ: sort }),
    setItemsPerPage: (sort: boolean) => set({ itemsPerPage: sort }),

    
    filteredPlanets: () => {
        const { planets, searchQuery, sortAZ , itemsPerPage } = get();
        

        let filtered = planets.filter(planet => 
            planet.spanishName.toLowerCase().includes(searchQuery.toLowerCase())
        );

    
        if (sortAZ) {
            filtered = filtered.sort((a, b) => 
                a.spanishName.localeCompare(b.spanishName, 'es', { sensitivity: 'base' })
            );
        }

        if (itemsPerPage) {
            filtered = filtered.slice(0, 5);
        }



        return filtered;
    }
}));