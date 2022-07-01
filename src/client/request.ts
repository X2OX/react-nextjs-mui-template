export interface Response<T> {
    code: number
    msg: string
    data?: T[]
}

const RequestData = <T>(url: string): Promise<Response<T>>  => fetch(url).then(resp => resp.json().then())

export default RequestData
