import {Set, util} from 'typescript-collections';
import {Platform} from 'ionic-angular';
import {Device, File} from 'ionic-native';

const FAVORITES_FILENAME = "favorites.dat";

export class FavoritesService {
    private static instance: FavoritesService;
    private static isCreating: boolean = false;

    private favorites: Set<Favorite>;
    private favoritesChanged: boolean = false;

    constructor(private platform: Platform) {
        if (!FavoritesService.isCreating)
            throw new Error("FavoritesService is a singleton. Do not use new, use the getInstance method instead.");

        this.favorites = new Set<Favorite>();
    }

    public static getInstance(): FavoritesService {
        if (FavoritesService.instance == null) {
            FavoritesService.isCreating = true;
            FavoritesService.instance = new FavoritesService(new Platform());
            FavoritesService.isCreating = false;
        }

        return FavoritesService.instance;
    }

    public addFavorite(favorite: Favorite): boolean {
        this.favoritesChanged = true;
        return this.favorites.add(favorite);
    }

    public removeFavorite(favorite: Favorite): boolean {
        this.favoritesChanged = true;
        return this.favorites.remove(favorite);
    }

    public getFavorites(): Set<Favorite> {
        return this.favorites;
    }

    private getPath(): string {
        //TODO: Choose a private path where the info would be synced with the cloud.
        //Path info: https://github.com/apache/cordova-plugin-file
        if (this.platform.is('ios'))
            return (<any>cordova).file.dataDirectory.syncedDataDirectory;
        else
            return (<any>cordova).file.dataDirectory;
    }

    private saveFavorites(): void {
        if (!window.cordova) {
            console.log("You are not running this application in a mobile device. Favorites could not be saved.");
            return;
        }

        if (!this.favoritesChanged)
            return;

        let favorites: Set<Favorite> = this.favorites;

        File.createFile(this.getPath(), FAVORITES_FILENAME, true).then(function(fileEntry) {

            fileEntry.createWriter(function(fileWriter) {
                fileWriter.onwriteend = function() {
                    console.log("Favorites succesfully saved.");
                };

                fileWriter.onerror = function(error) {
                    console.log("Error saving favorites. " + error.toString());
                };

                fileWriter.write(favorites);
            });

        }).catch(function(error) {
            console.log("Error saving favorites. " + error.toString());
        });

        this.favoritesChanged = false;
    }

    public loadFavorites(): void {
        if (!window.cordova) {
            console.log("You are not running this application in a mobile device. Favorites could not be loaded.");
            return;
        }

        let favorites: Set<Favorite> = this.favorites;
        favorites.clear();

        File.readAsText(this.getPath() + "/" + FAVORITES_FILENAME).then(function(result) {
            let table = JSON.parse(result).dictionary.table;

            for (let pair in table) {
                favorites.add(new Favorite(table[pair].key.studentsAssociationId, table[pair].key.modalityId));
            }
        }).catch(function(error) {
            console.log("Error loading favorites. " + error.message);
            favorites.clear();
        });

        this.favoritesChanged = false;
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
