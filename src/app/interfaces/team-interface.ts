import { PlayerInterface } from "./player-interface"

export interface TeamInterface {
    _id?: string
    name:string
    city:string
    players?: PlayerInterface[]

}
