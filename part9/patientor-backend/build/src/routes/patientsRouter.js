"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientsService_1 = __importDefault(require("../services/patientsService"));
const utils_1 = require("../utils");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(patientsService_1.default.getPatients());
});
router.get('/:id', (req, res) => {
    const patient = patientsService_1.default.getPatientById(req.params.id);
    if (patient) {
        res.json(patient);
    }
    else {
        res.status(404).send('Patient not found');
    }
});
router.post('/', (req, res) => {
    try {
        const newPatient = (0, utils_1.toNewPatient)(req.body);
        const addedPatient = patientsService_1.default.addPatient(newPatient);
        res.json(addedPatient);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        }
        else {
            res.status(500).send('Server error');
        }
    }
});
router.post('/:id/entries', (req, res) => {
    try {
        const patient = patientsService_1.default.getPatientById(req.params.id);
        if (!patient) {
            res.status(404).send('Patient not found.');
        }
        else {
            const newEntry = (0, utils_1.toNewEntry)(req.body);
            const updatedPatient = patientsService_1.default.addEntry(patient, newEntry);
            res.json(updatedPatient);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        }
        else {
            res.status(500).send('Server error');
        }
    }
});
exports.default = router;
