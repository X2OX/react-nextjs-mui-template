export default class UUID {
    private static uuidRex: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    readonly uuid: string;

    constructor(str?: string) {
        if (str && UUID.isValidUUID(str)) {
            this.uuid = str;
        } else {
            this.uuid = UUID.createUUID();
        }
    }

    public static createUUID = ():string => {
        if (typeof window !== 'undefined' && typeof window?.crypto?.randomUUID === 'function') {
            return window.crypto.randomUUID()
        }

        let d: number = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
    }

    public static isValidUUID = (uuid: string) => {return this.uuidRex.test(uuid)}
    public static getDashFreeUUID = (uuid: UUID) => {return uuid.toString().replace(/-/g, '')}
    public equals = (uuid: string | UUID) => {return (uuid instanceof UUID) ? this.uuid === uuid.toString() : this.uuid === uuid}
    public getDashFreeUUID = () => {return UUID.getDashFreeUUID(this)}
    public toString = () => {return this.uuid}
}
