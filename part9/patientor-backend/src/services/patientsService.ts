import patients from '../../data/patients';
import { PublicPatient, Patient, Entry, EntryWithoutId } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): PublicPatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const getPatientById = (id: string): Patient | undefined => {
    return patients.find(p => p.id === id);
};

const addPatient = (patient: Omit<Patient, 'id'>): Patient => {
    const newPatient: Patient = {
        id: uuid(),
        ...patient
    };
    patients.push(newPatient);
    return newPatient;
};

const addEntry = (patient: Patient, entry: EntryWithoutId): Patient => {
    const entryWithId: Entry = {
        ...entry,
        id: uuid()
    };
    patient.entries.push(entryWithId);
    return patient;
};

export default { getPatients, getPatientById, addPatient, addEntry };