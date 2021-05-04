import DateTimeFormat = Intl.DateTimeFormat;

export default interface ICreateUserResponse {
    name: string,
    job: string,
    id: number,
    createdAt: DateTimeFormat
}