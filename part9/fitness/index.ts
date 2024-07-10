import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

interface ExerciseRequestBody {
    daily_exercises: number[];
    target: number;
}

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    if (!height || !weight || isNaN(height) || isNaN(weight)) {
        return res.status(400).json({ error: "malformatted parameters" });
    }

    try {
        const bmi = calculateBmi(height, weight);
        return res.json({
            weight: weight,
            height: height,
            bmi: bmi
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        } else {
            return res.status(500).json({ error: "Unexpected error occurred" });
        }
    }
});

app.post('/exercises', (req, res) => {
    const { daily_exercises, target } = req.body as ExerciseRequestBody;

    if (!daily_exercises || !target) {
        return res.status(400).json({ error: "parameters missing" });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!Array.isArray(daily_exercises) || typeof target !== 'number' ||
        daily_exercises.some(hours => typeof hours !== 'number')) {
        return res.status(400).json({ error: "malformatted parameters" });
    }

    try {
        const result = calculateExercises(target, daily_exercises);
        return res.json(result);
    } catch (error: unknown) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        } else {
            return res.status(500).json({ error: "Unexpected error occurred" });
        }
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});