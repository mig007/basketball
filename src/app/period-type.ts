export interface PeriodType {
    ID:number,
    name:string,
    short:string
}

export const PERIOD:Record<string, PeriodType> = {
    HALF: {ID: 0, name: "Half", short: "H"},
    QUARTER: {ID: 1, name: "Quarter", short: "Q"},
    OT: {ID: 2, name: "Overtime", short: "OT"},

}