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

interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Diagnosis['code'][];
}
  
export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}

export interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}

export interface OccupationalHealthcareEntry extends BaseEntry {
    type: "OccupationalHealthcare";
    employerName: string;
    sickLeave?: {
        startDate: string;
        endDate: string;
    }
}

export interface HospitalEntry extends BaseEntry {
    type: "Hospital";
    discharge: {
        date: string;
        criteria: string;
    }
}

export type Entry =
    | HospitalEntry
    | OccupationalHealthcareEntry
    | HealthCheckEntry;

export interface EntryInput {
    type: "Hospital" | "OccupationalHealthcare" | "HealthCheck";
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: string[];
    discharge?: {
        date: string;
        criteria: string;
    };
    employerName?: string;
    sickLeave?: {
        startDate: string;
        endDate: string;
    };
    healthCheckRating?: HealthCheckRating;
    }
      
type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;

export type EntryWithoutId = UnionOmit<Entry, 'id'>;

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
    entries: Entry[];
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

export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatient = Omit<Patient, 'id'>;