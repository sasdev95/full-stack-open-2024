import * as yup from 'yup';

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}

const patientSchema = yup.object().shape({
    name: yup.string().required(),
    dateOfBirth: yup.string().required(),
    ssn: yup.string().required(),
    gender: yup.mixed<Gender>().oneOf(Object.values(Gender)).required(),
    occupation: yup.string().required(),
});

export function isPatient(object: unknown): object is NewPatient {
    return typeof object === 'object' && object !== null && patientSchema.isValidSync(object);
}

export type PublicPatient = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;