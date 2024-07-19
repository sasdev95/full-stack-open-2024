import React from 'react';
import { Entry } from '../../types';
import { Card, CardContent, Typography } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';

const EntryDetails: React.FC<{ entry: Entry }> = ({ entry }) => {
    const assertNever = (value: never): never => {
        throw new Error(
            `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
    };

    const entryIcon = (type: string) => {
        switch (type) {
            case "Hospital":
                return <LocalHospitalIcon />;
            case "OccupationalHealthcare":
                return <WorkIcon />;
            case "HealthCheck":
                return <MedicalInformationIcon />;
            default:
                return null;
        }
    };

    const cardContentStyle = {
        padding: 1,
        '&:last-child': {
            paddingBottom: 1
        }
    };

    const healthRatingColor = (rating: number) => {
        switch (rating) {
            case 0:
                return 'green';  // Healthy
            case 1:
                return 'lime';   // Low Risk
            case 2:
                return 'yellow'; // Moderate Risk
            case 3:
                return 'red';    // High Risk
            default:
                return 'grey';   // Unknown or not applicable
        }
    };

    switch (entry.type) {
        case "Hospital":
            return (
                <Card variant="outlined" sx={{ marginBottom: 2 }}>
                    <CardContent sx={cardContentStyle}>
                        <Typography>
                            {` ${entry.date} Hospital Admission`} &nbsp;
                            {entryIcon(entry.type)}
                        </Typography>
                        <Typography><i>{entry.description}</i></Typography>
                        <Typography>{`Discharged ${entry.discharge.date}: ${entry.discharge.criteria}`}</Typography>
                        <Typography>Diagnose by {entry.specialist}</Typography>
                    </CardContent>
                </Card>
            );
        case "OccupationalHealthcare":
            return (
                <Card variant="outlined" sx={{ marginBottom: 2 }}>
                    <CardContent sx={cardContentStyle}>
                        <Typography>
                            {`${entry.date}`} &nbsp;
                            {entryIcon(entry.type)} &nbsp;
                            {`${entry.employerName}`}
                        </Typography>
                        <Typography><i>{entry.description}</i></Typography>
                        <Typography>Diagnose by {entry.specialist}</Typography>
                        {entry.sickLeave && (
                            <Typography>{`Sick leave from ${entry.sickLeave.startDate} to ${entry.sickLeave.endDate}`}</Typography>
                        )}
                    </CardContent>
                </Card>
            );
        case "HealthCheck":
            return (
                <Card variant="outlined" sx={{ marginBottom: 2 }}>
                    <CardContent sx={cardContentStyle}>
                        <Typography>
                            {`${entry.date}`} &nbsp;
                            {entryIcon(entry.type)}
                        </Typography>
                        <Typography><i>{entry.description}</i></Typography>
                        <Typography>
                            <FavoriteIcon style={{ color: healthRatingColor(entry.healthCheckRating) }} />
                        </Typography>
                        <Typography>Diagnose by {entry.specialist}</Typography>
                    </CardContent>
                </Card>
            );
        default:
            return assertNever(entry);
    }
};

export default EntryDetails;