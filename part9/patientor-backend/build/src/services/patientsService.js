"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
const uuid_1 = require("uuid");
const getPatients = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
const getPatientById = (id) => {
    return patients_1.default.find(p => p.id === id);
};
const addPatient = (patient) => {
    const newPatient = Object.assign({ id: (0, uuid_1.v1)() }, patient);
    patients_1.default.push(newPatient);
    return newPatient;
};
const addEntry = (patient, entry) => {
    const entryWithId = Object.assign(Object.assign({}, entry), { id: (0, uuid_1.v1)() });
    patient.entries.push(entryWithId);
    return patient;
};
exports.default = { getPatients, getPatientById, addPatient, addEntry };
