import _ from 'lodash';

export interface Film {
    characters: string[] | Character[];
    created: Date;
    director: string;
    edited: Date;
    episode_id: string;
    opening_crawl: string;
    planets: string[] | Planet[];
    producer: string;
    release_date: Date;
    species: string[] | Specie[];
    starships: string[] | Starship[];
    title: string;
    url: string;
    vehicles: string[] | Vehicle[];
    [key: string]: string | Date | string[] | Character[] | Planet[] | Specie[] | Starship[] | Vehicle[]; // Add this line
}

export interface Character {
    birth_year: string;
    eye_color: string;
    films: string[] | Film[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string | Planet;
    mass: string;
    name: string;
    skin_color: string;
    created: Date;
    edited: Date;
    species: string[] | Specie[];
    starships: string[] | Starship[];
    url: string;
    vehicles: string[] | Vehicle[];
}

export interface Planet {
    climate: string;
    created: Date;
    diameter: string;
    edited: Date;
    films: string[] | Film[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[] | Character[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}

export interface Specie {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: Date;
    designation: string;
    edited: Date;
    eye_colors: string;
    hair_colors: string;
    homeworld: string | Planet;
    language: string;
    name: string;
    people: string[] | Character[];
    films: string[] | Film[];
    skin_colors: string;
    url: string;
}

export interface Starship {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: string[] | Film[];
    pilots: string[] | Character[];
    starship_class: string;
    url: string;
}

export interface Vehicle {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: string[] | Character[];
    films: string[] | Film[];
    url: string;
    vehicle_class: string;
}

// Define enums and constants
export enum ResourceType {
    Films = 'films',
    Characters = 'characters',
    Planets = 'planets',
    Species = 'species',
    Starships = 'starships',
    Vehicles = 'vehicles',
}

// Define cache and request functions
const cache = window.localStorage;
const prefix = 'swCache'

async function request(url: string) {
    const cached = cache.getItem(`${prefix}.${url}`);
    if (cached) {
        return JSON.parse(cached);
    }

    const headers = {
        "headers": {
            "accept": "application/json"
        }
    };
    const result = await fetch(url, headers).then(res => res.json());

    cache.setItem(`${prefix}.${url}`, JSON.stringify(result));

    return result;
}

// Define Resource class
class Resource<S> {
    constructor(public value: S) {}

    public async populate(path: string) {
        await this.populateRec(path, this.value);

        return this;
    }

    private async populateSingle(path: string, obj: any) {
        if (Array.isArray(obj[path])) {
            obj[path] = await Promise.all((obj[path] as string[]).map(url => request(url.replace('http', 'https'))));

            return this;
        }

        obj[path] = await request((obj[path] as string).replace('http', 'https'));

        return this;
    }

    private populateRec(path: string, obj: any): Promise<{}> {
        const [next, ...rest] = path.split('.');

        if (rest.length > 0 && Array.isArray(obj[next])) {
            return Promise.all(obj[next].map((single: any) => this.populateRec(rest.join('.'), single)));
        }

        if (rest.length === 0 && Array.isArray(obj)) {
            return Promise.all(obj.map(single => this.populateSingle(next, single)));
        } else if (rest.length === 0) {
            return this.populateSingle(next, obj);
        }

        return this.populateRec(rest.join('.'), obj[next] as {});
    }
}

// Define collectionBuilder function
function collectionBuilder<T>(resource: ResourceType) {
    return class SWCollection {
        static root = `https://swapi.dev/api/${resource}/`;
        public resources: Resource<T>[] = [];

        constructor(unparsedResources: T[]) {
            this.resources = unparsedResources.map(resource => new Resource<T>(resource));
        }

        async populateAll(path: string) {
            this.resources = await Promise.all(this.resources.map(obj => obj.populate(path)));

            return this;
        }

        static async getPage(page: number = 1, search?: string) {
            if (search) {
                return request(`${SWCollection.root}?page=${page}&search=${search}`);
            }

            return request(`${SWCollection.root}?page=${page}`);
        }

        public static async find(predicate?: (single: T) => boolean) {
            const { count, results: firstResult } = await SWCollection.getPage();
            const pages = Math.ceil(count / firstResult.length);
            const left = Array.from({ length: (pages - 1) }, (_, i) => SWCollection.getPage(2 + i));
            const restResults = await Promise.all(left);

            const totalResults: T[] = [{ results: firstResult }, ...restResults].reduce((allResults, { results }) => {
                return [...allResults, ...results];
            }, []);

            return new SWCollection(_.filter(totalResults, predicate));
        }

        public static async findBySearch(predicate: string[]) {
            const pages = await Promise.all(predicate.map(query => this.getPage(1, query)));

            return new SWCollection(_.flatMap(pages, 'results'));
        }
    }
}

// Define collections for each resource type
export const Films = collectionBuilder<Film>(ResourceType.Films);
export const Characters = collectionBuilder<Character>(ResourceType.Characters);
export const Planets = collectionBuilder<Planet>(ResourceType.Planets);
export const Species = collectionBuilder<Specie>(ResourceType.Species);
export const Starships = collectionBuilder<Starship>(ResourceType.Starships);
export const Vehicles = collectionBuilder<Vehicle>(ResourceType.Vehicles);
