export function randomArr(arr:Array<string | any>){
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}
