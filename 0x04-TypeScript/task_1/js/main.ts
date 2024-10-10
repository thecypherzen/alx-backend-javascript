/* define interface teacher interface */
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

/* define the Directors interface */
export interface Directors extends Teacher {
    numberOfReports: number;
}
