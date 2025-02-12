export interface PlanetDetail {
    temperatura: string;
    gravedad: string;
    duracion_año: string;
    radio: string;
}

export interface Planet {
    id: string;
    spanishName: string;
    description: string;
    img: string;
    detail: PlanetDetail;
}

export interface PlanetStoreState {
    planets: Planet[];
    searchQuery: string;
    isLoading: boolean;
    sortAZ: boolean;
    itemsPerPage: boolean;
    setSearchQuery: (query: string) => void;
    setPlanets: (planets: Planet[]) => void;
    setLoading: (loading: boolean) => void;
    setSortAZ: (sort: boolean) => void;
    filteredPlanets: () => Planet[];
    setItemsPerPage: (sort: boolean) => void;
 
}