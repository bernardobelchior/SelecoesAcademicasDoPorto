import {Set, util} from 'typescript-collections';

export class FavoritesService {
    private static instance: FavoritesService;
    private static isCreating: boolean = false;

    private favorites: Set<Favorite>;

    constructor() {
        if (!FavoritesService.isCreating)
            throw new Error("FavoritesService is a singleton. Do not use new, use the getInstance method instead.");

        this.favorites = new Set<Favorite>();
    }

    public static getInstance(): FavoritesService {
        if (FavoritesService.instance == null) {
            FavoritesService.isCreating = true;
            FavoritesService.instance = new FavoritesService();
            FavoritesService.isCreating = false;
        }

        return FavoritesService.instance;
    }

    public addFavorite(favorite: Favorite): boolean {
        return this.favorites.add(favorite);
    }

    public removeFavorite(favorite: Favorite): boolean {
        return this.favorites.remove(favorite);
    }

    public getFavorites() : Set<Favorite> {
      return this.favorites;
    }
}

export class Favorite {
    constructor(private studentsAssociationId: number, private modalityId: number) {

    }

    public getStudentsAssociationId(): number {
        return this.studentsAssociationId;
    }

    public getModalityId(): number {
        return this.modalityId;
    }

    public toString(): string {
        return util.makeString(this);
    }
}
