interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

export const calculateExercises = (target: number, dailyHours: number[]): ExerciseResult => {
    if (dailyHours.some(hours => hours < 0) || target < 0) {
        throw new Error('Negative values are invalid.');
    }
    
    const periodLength = dailyHours.length;
    const trainingDays = dailyHours.filter(hours => hours > 0).length;
    const totalHours = dailyHours.reduce((acc, cur) => acc + cur, 0);
    const average = totalHours / periodLength;
    const success = (average >= target);
    const rating = average >= target ? 3 : (average >= target * 0.8 ? 2 : 1);
    const ratingDescription = rating === 3 ? 'great job, you met your target!' :
                              rating === 2 ? 'not too bad, but could be better' :
                              'you need to work harder to reach your target!';

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};

if (process.argv.length < 4) {
    console.error('Error: No exercise hours provided. At least one daily entry is required.');
    process.exit(1);
}

const target = Number(process.argv[2]);
if (isNaN(target)) {
    console.error('Error: Target must be a valid number.');
    process.exit(1);
}

const dailyHours = process.argv.slice(3).map(Number);
if (dailyHours.some(isNaN)) {
    console.error('Error: All daily hours must be valid numbers.');
    process.exit(1);
}

try {
    console.log(JSON.stringify(calculateExercises(target, dailyHours), null, 4));
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error('Error:', error.message);
    } else {
        console.error('Unknown error:', error);
    }
}

//console.log(calculateExercises(2, [2, 0, 2, 2.5, 0, 2, 1]));  // rating: 1/3
//console.log(calculateExercises(2, [3, 0, 2, 4.5, 0, 3, 1]));  // rating: 2/3
//console.log(calculateExercises(2, [3, 0, 2, 4.5, 1, 3, 1]));  // rating: 3/3