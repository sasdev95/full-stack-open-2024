import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Diaries from './components/Diaries';
import AddDiaryEntry from './components/AddDiaryEntry';
import { NewDiaryEntry, NonSensitiveDiaryEntry } from './types';

const App: React.FC = () => {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      const response = await axios.get<NonSensitiveDiaryEntry[]>('http://localhost:3000/api/diaries');
      setDiaries(response.data);
    }
    fetchDiaries();
  }, []);

  const addDiaryEntry = async (newDiary: NewDiaryEntry) => {
    try {
      const response = await axios.post<NonSensitiveDiaryEntry>('http://localhost:3000/api/diaries', newDiary);
      setDiaries([...diaries, response.data]);
    } catch (error) {
      console.error('Failed to add diary entry:', error);
    }
  };

  return (
    <div>
      <AddDiaryEntry onAddDiary={addDiaryEntry} />
      <Diaries entries={diaries} />
    </div>
  );
};

export default App;