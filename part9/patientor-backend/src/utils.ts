import * as yup from 'yup';
import { NewPatient, Gender } from './types';

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