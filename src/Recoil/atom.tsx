import { selector } from "recoil";

export const carTotal = selector({
    key: 'uniquekey',
    get: ({ get })=>{
        return carTotal;
    }
})
export const x = ()=>{
    return 1
}