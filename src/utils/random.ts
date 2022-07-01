export function randomArr(arr:Array<string>):string{
    const idx = Math.ceil(Math.random() * arr.length)
    return arr[idx]
}
