import React, { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiBaseUrl } from '../../constants';
import { Patient, Diagnosis, Entry, HealthCheckRating, EntryFormState, HospitalEntry, OccupationalHealthcareEntry } from '../../types';
import { 
    Typography, CircularProgress, Box, TextField, Button, MenuItem, Select, FormControl, InputLabel, 
    Card, CardContent, Snackbar, Alert, Stack, SelectChangeEvent
} from '@mui/material';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import EntryDetails from './EntryDetails';

interface PatientDetailsPageProps {
    patients: Patient[];
    diagnoses: Diagnosis[];
}

const PatientDetailsPage: React.FC<PatientDetailsPageProps> = () => {
    const { id } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | null>(null);
    const [entry, setEntry] = useState<EntryFormState>({
        type: "HealthCheck",
        description: '',
        date: '',
        specialist: '',
        healthCheckRating: HealthCheckRating.Healthy,
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPatientDetails = async () => {
            try {
                const { data: patientData } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
                setPatient(patientData);   
            } catch (error) {
                console.error(`Failed to fetch patient details: ${error}`);
            }
        };
        fetchPatientDetails();
    }, [id]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        if (name.startsWith('discharge')) {
            if (entry.type === 'Hospital') {
                setEntry(prev => ({
                    ...prev as HospitalEntry,
                    discharge: { 
                        ...prev.discharge,
                        [name === 'dischargeDate' ? 'date' : 'criteria']: value }
                }));
            }
        } else if (name.startsWith('sickLeave')) {
            if (entry.type === 'OccupationalHealthcare') {
                setEntry(prev => ({
                    ...prev as OccupationalHealthcareEntry,
                    sickLeave: { 
                        ...prev.sickLeave, 
                        [name === 'sickLeaveStartDate' ? 'startDate' : 'endDate']: value }
                }));
            }
        } else {
            setEntry(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleTypeChange = (event: SelectChangeEvent) => {
        const newType = event.target.value as Entry['type'];
        setEntry(getInitialEntryState(newType));
    };
    

    const handleSelectChange = (event: SelectChangeEvent) => {
        const { name, value } = event.target;
        setEntry(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const { data: updatedPatient } = await axios.post<Patient>(`${apiBaseUrl}/patients/${id}/entries`, entry);
            setPatient(updatedPatient);
            setEntry(getInitialEntryState(entry.type));
        } catch (error) {
            console.error(`Failed to add entry: ${error}`);
            setError('Failed to add entry. Please check the data provided.');
        }
    };

    const getInitialEntryState = (type: Entry['type']): EntryFormState => {
        switch (type) {
            case 'HealthCheck':
                return { type, description: '', date: '', specialist: '', healthCheckRating: HealthCheckRating.Healthy };
            case 'Hospital':
                return { type, description: '', date: '', specialist: '', discharge: { date: '', criteria: '' } };
            case 'OccupationalHealthcare':
                return { type, description: '', date: '', specialist: '', employerName: '', sickLeave: { startDate: '', endDate: '' } };
            default:
                throw new Error('Unknown type');
        }
    };

    if (!patient) {
        return <CircularProgress />;
    }

    return (
        <Box>
            <br />
            <Typography variant="h4">
                {patient.name} &nbsp;
                {patient.gender === 'male' && <MaleIcon />}
                {patient.gender === 'female' && <FemaleIcon />}
            </Typography>
            <br />
            <Typography>SSN: {patient.ssn}</Typography>
            <Typography>Occupation: {patient.occupation}</Typography>
            {error && <Snackbar open={!!error} autoHideDuration={5000} onClose={() => setError(null)}>
                <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>}
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h6" sx={{ marginBottom: 1 }}>New Entry</Typography>
                        <FormControl fullWidth>
                            <InputLabel>Type</InputLabel>
                            <Select name="type" label="type" value={entry.type} onChange={handleTypeChange}>
                                <MenuItem value="HealthCheck">Health Check</MenuItem>
                                <MenuItem value="Hospital">Hospital</MenuItem>
                                <MenuItem value="OccupationalHealthcare">Occupational Healthcare</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField label="Description" name="description" onChange={handleInputChange}
                        value={entry.description || ''} fullWidth margin="normal" />
                        <TextField label="Date" name="date" type="date" onChange={handleInputChange} 
                        value={entry.date || ''} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                        <TextField label="Specialist" name="specialist" onChange={handleInputChange}
                        value={entry.specialist || ''} fullWidth margin="normal" />
                        {entry.type === 'HealthCheck' && (
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="healthCheckRating-label">Health Check Rating</InputLabel>
                                <Select
                                    labelId="Health Check Rating"
                                    name="healthCheckRating"
                                    value={entry.healthCheckRating.toString()}
                                    label="Health Check Rating"
                                    onChange={handleSelectChange}
                                >
                                    {Object.values(HealthCheckRating).filter(value => typeof value === 'number').map(value => (
                                        <MenuItem key={value} value={value}>{value}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                        {entry.type === 'Hospital' && (
                            <Stack spacing={2}>
                                <TextField label="Discharge Date" name="dischargeDate" type="date" onChange={handleInputChange}
                                value={entry.discharge?.date || ''} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                                <TextField label="Discharge Criteria" name="dischargeCriteria" onChange={handleInputChange}
                                value={entry.discharge?.criteria || ''} fullWidth margin="normal" />
                            </Stack>
                        )}
                        {entry.type === 'OccupationalHealthcare' && (
                            <Stack spacing={2}>
                                <TextField label="Employer Name" name="employerName" onChange={handleInputChange}
                                value={entry.employerName || ''} fullWidth margin="normal" />
                                <TextField label="Sick Leave Start Date" name="sickLeaveStartDate" type="date" onChange={handleInputChange}
                                value={entry.sickLeave?.startDate || ''} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                                <TextField label="Sick Leave End Date" name="sickLeaveEndDate" type="date" onChange={handleInputChange}
                                value={entry.sickLeave?.endDate || ''} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
                            </Stack>
                        )}
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2}}>Add Entry</Button>
                    </form>
                </CardContent>
            </Card>
            <br />
            <Typography variant="h5">Entries</Typography>
            {patient.entries.map((entry: Entry) => (
                <EntryDetails key={entry.id} entry={entry} />
            ))}
        </Box>
    );
};

export default PatientDetailsPage;