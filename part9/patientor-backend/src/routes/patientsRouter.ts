import express from 'express';
import patientsService from '../services/patientsService';
import { toNewPatient, toNewEntry } from '../utils';
import { EntryInput } from '../types';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientsService.getPatients());
});

router.get('/:id', (req, res) => {
    const patient = patientsService.getPatientById(req.params.id);
    if (patient) {
        res.json(patient);
    } else {
        res.status(404).send('Patient not found');
    }
});

router.post('/', (req, res) => {
    try {
        const newPatient = toNewPatient(req.body);
        const addedPatient = patientsService.addPatient(newPatient);
        res.json(addedPatient);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(500).send('Server error');
        } 
    }
});

router.post('/:id/entries', (req, res) => {
    try {
        const patient = patientsService.getPatientById(req.params.id);
        if (!patient) {
            res.status(404).send('Patient not found.');
        } else {
            const newEntry = toNewEntry(req.body as EntryInput);
            const updatedPatient = patientsService.addEntry(patient, newEntry);
            res.json(updatedPatient);
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(500).send('Server error');
        }
    }
});

export default router;