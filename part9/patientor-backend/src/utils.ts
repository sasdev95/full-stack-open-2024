import * as yup from 'yup';
import { NewPatient, Gender, EntryWithoutId, EntryInput, HealthCheckRating } from './types';

const patientSchema = yup.object({
    name: yup.string().required(),
    dateOfBirth: yup.string().required(),
    ssn: yup.string().required(),
    gender: yup.mixed().oneOf(Object.values(Gender)).required(),
    occupation: yup.string().required(),
});

export const toNewPatient = (object: unknown): NewPatient => {
    const validatedData = patientSchema.validateSync(object, { strict: true }) as NewPatient;
    if (!validatedData) {
        throw new Error('Validation failed');
    }

    if (!Object.values(Gender).includes(validatedData.gender)) {
        throw new Error('Invalid gender');
    }
    return validatedData;
};

const entrySchema = yup.object({
    type: yup.string().required().oneOf(['Hospital', 'OccupationalHealthcare', 'HealthCheck']),
    description: yup.string().required(),
    date: yup.string().required(),
    specialist: yup.string().required(),
    diagnosisCodes: yup.array().of(yup.string()).optional(),
    discharge: yup.object({
      date: yup.string(),
      criteria: yup.string(),
    }).when('type', (type, schema) => type.toString() === 'Hospital' ? schema.required() : schema.notRequired()),
    employerName: yup.string().when('type', (type, schema) => type.toString() === 'OccupationalHealthcare' ? schema.required() : schema.notRequired()),
    sickLeave: yup.object({
      startDate: yup.string(),
      endDate: yup.string(),
    }).when('type', (type, schema) => type.toString() === 'OccupationalHealthcare' ? schema.required() : schema.notRequired()),
    healthCheckRating: yup.number().when('type', (type, schema) => 
        type.toString() === 'HealthCheck' ? schema.oneOf(Object.values(HealthCheckRating).map(v => Number(v))).required() : schema.notRequired()),
});
  
export const toNewEntry = (object: EntryInput): EntryWithoutId => {
    if (!object.type || !['Hospital', 'OccupationalHealthcare', 'HealthCheck'].includes(object.type)) {
        throw new Error('Invalid or missing "type" field');
    }

    try {
        const validatedData = entrySchema.validateSync(object, { strict: true });
        return validatedData as EntryWithoutId;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error('Validation failed for entry data: ' + error);
        } else {
            throw new Error('Unknown error during validation');
        }
    }
};