import React, { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { NewDiaryEntry, Weather, Visibility } from '../types';

interface Props {
    onAddDiary: (newDiary: NewDiaryEntry) => void;
}

const AddDiaryEntry: React.FC<Props> = ({ onAddDiary }) => {
    const [entry, setEntry] = useState<NewDiaryEntry>({
        date: '',
        weather: Weather.Sunny,
        visibility: Visibility.Great,
        comment: ''
    });
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEntry(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!entry.date) {
            setError('Date must be selected.');
            return;
        }

        setError('');
        try {
            await onAddDiary(entry as NewDiaryEntry);
            setEntry({ date: '', weather: Weather.Sunny, visibility: Visibility.Great, comment: '' });
            alert('Diary entry added successfully!');
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                setError(`${axiosError.response.data}`);
            } else {
                setError('Failed to add diary entry due to a network error.');
            }
        }
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    return (
        <div>
            <h2>Add New Entry</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Date: &nbsp;
                    <input type="date" name="date" value={entry.date} onChange={handleChange} />
                </label>
                <br />
                Visibility:
                {Object.values(Visibility).map(visibility => (
                    <label key={visibility}>
                        <input
                            type="radio"
                            name="visibility"
                            value={visibility}
                            checked={entry.visibility === visibility}
                            onChange={handleChange}
                        /> {visibility}
                    </label>
                ))}
                <br />
                Weather:
                {Object.values(Weather).map(weather => (
                    <label key={weather}>
                        <input
                            type="radio"
                            name="weather"
                            value={weather}
                            checked={entry.weather === weather}
                            onChange={handleChange}
                        /> {weather}
                    </label>
                ))}
                <br />
                <label>
                    Comment: &nbsp;
                    <input type="text" name="comment" value={entry.comment} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddDiaryEntry;