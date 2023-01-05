interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [index: number]: boolean
}

interface Directors extends Teacher {
    numberOfReports: number
}