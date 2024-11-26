export interface Employee {
    id: string;
    name: string;
    division: string;
}

//extend interface
export interface Manager extends Employee {
    numberOfEmployees: number;
}