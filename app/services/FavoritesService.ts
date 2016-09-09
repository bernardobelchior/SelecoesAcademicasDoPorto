import {Set} from 'typescript-collections';

export class FavoritesService {
    private static instance: FavoritesService;
    private static isCreating: boolean = false;

    //
    private favorites: Set<string>;

    constructor() {
        if (!FavoritesService.isCreating)
            throw new Error("FavoritesService is a singleton. Do not use new, use the getInstance method instead.");
    }

    public static getInstance(): FavoritesService {
        if (FavoritesService.instance == null) {
            FavoritesService.isCreating = true;
            FavoritesService.instance = new FavoritesService();
            FavoritesService.isCreating = false;
        }

        return FavoritesService.instance;
    }
}
