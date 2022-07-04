export interface Response<T> {
    code: number
    msg: string
    data?: T[]
}

export interface ResponseOrdinary<T> {
    code: number
    msg: string
    data?: T
}

export  const RequestData = <T>(url: string): Promise<Response<T>>  => fetch(url).then(resp => resp.json().then())

export const RequestDataOrdinary = <T>(url: string): Promise<ResponseOrdinary<T>>  => fetch(url).then(resp => resp.json().then())


