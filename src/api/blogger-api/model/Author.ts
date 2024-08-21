import type { Image } from "./Image";


export interface Author {
    id: string;
    displayName: string;
    url: string;
    image: Image;
}
