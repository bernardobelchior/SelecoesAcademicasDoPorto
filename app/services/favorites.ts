import {Set, util} from 'typescript-collections';
import {Platform} from 'ionic-angular';
import {Device, File} from 'ionic-native';
import {StudentsAssociation} from '../class/studentsAssociation';
import {Modality} from '../class/modality';
import {TestData} from '../test/testData';

const FAVORITES_FILENAME = "favorites.dat";

export class FavoritesService {
    private static instance: FavoritesService;
    private static isCreating: boolean = false;

    private favorites: Set<Favorite>;
    private favoritesChanged: boolean = false;

    constructor(private platform: Platform) {
        if (!FavoritesService.isCreating)
            throw new Error("FavoritesService is a singleton. Do not use new, use the getInstance method instead.");

        this.favorites = new Set<Favorite>(this.favoriteHashFunction);
    }

    public static getInstance(): FavoritesService {
        if (FavoritesService.instance == null) {
            FavoritesService.isCreating = true;
            FavoritesService.instance = new FavoritesService(new Platform());
            FavoritesService.isCreating = false;
        }

        return FavoritesService.instance;
    }

    public isFavorited(association: StudentsAssociation, modality: Modality): boolean {
        return this.favorites.contains(new Favorite(association, modality));
    }

    toggleFavorite(association: StudentsAssociation, modality: Modality) {
        let favorite: Favorite = new Favorite(association, modality)
        this.favoritesChanged = true;

        if (this.favorites.contains(favorite))
            this.removeFavorite(favorite);
        else
            this.addFavorite(favorite);
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

    public saveFavorites(): void {
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

    //TODO: Test loading and saving!
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
                favorites.add(new Favorite(TestData.getStudentsAssociations()[table[pair].key.studentsAssociationId],
                    TestData.getModalities()[table[pair].key.modalityId]));
            }

            favorites.forEach(function(favorite) {
                console.log(favorite);
            })

        }).catch(function(error) {
            console.log("Error loading favorites. " + error.message);
            favorites.clear();
        });

        this.favoritesChanged = false;
    }

    public getFavoritesChanged(): boolean {
        return this.favoritesChanged;
    }

    private favoriteHashFunction(favorite: Favorite): string {
        return (favorite.getStudentsAssociation().getId().toString() + ";" + favorite.getModality().getId().toString());
    }
}

export class Favorite {
    constructor(private studentsAssociation: StudentsAssociation, private modality: Modality) {

    }

    public getStudentsAssociation(): StudentsAssociation {
        return this.studentsAssociation;
    }

    public getModality(): Modality {
        return this.modality;
    }

    public toString(): string {
        return ("{studentsAssociation: " + this.studentsAssociation.getId() +
            ", modality: " + this.modality.getId() + "}");
    }
}
