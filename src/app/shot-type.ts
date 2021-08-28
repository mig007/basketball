export interface ShotType {
    ID:number;
    value:number;
    name:string;
    short: string;
}
export const SHOT_TYPE:Record<string, ShotType> = {
    FT: {ID: 2, value:1, name: "Free Throw", short: "FT"},
    FG: {ID: 0, value:2, name: "Field Goal", short: "2PT"},
    THREE: {ID: 1, value:3, name: "Three Pointer", short: "3PT"},
}