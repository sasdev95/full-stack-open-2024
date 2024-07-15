import React from 'react';
import styles from '../Diaries.module.css'
import { NonSensitiveDiaryEntry } from '../types';

interface Props {
    entries: NonSensitiveDiaryEntry[];
}

const Diaries: React.FC<Props> = ({ entries }) => {
    return (
        <div>
            <h2>Diary Entries</h2>
            <ul className={styles.diaryList}>
                {entries.map(diary => (
                    <li key={diary.id} className={styles.diaryEntry}>
                        <div className={styles.diaryDate}>{diary.date}</div>
                        <div className={styles.diaryDetails}>visibility: {diary.visibility}</div>
                        <div className={styles.diaryDetails}>weather: {diary.weather}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Diaries;