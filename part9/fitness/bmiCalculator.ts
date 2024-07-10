// Imperial units -- height (inches), weight (lbs.)
export const calculateBmi = (height: number, weight: number): string => {
    if (height <= 0 || weight <= 0) {
        throw new Error('Invalid height or weight. Both should be greater than zero.');
    }
    
    const bmi = weight / (height ** 2) * 703;
    if (bmi < 18.5) {
        return 'Underweight (unhealthy weight)';
    } else if (bmi <= 24.9) {
        return 'Normal (healthy weight)';
    } else if (bmi <= 29.9) {
        return 'Overweight (unhealthy weight)';
    } else {
        return 'Obese (unhealthy weight)';
    }
};

/*
if (process.argv.length !== 4) {
    console.error('Error: Exactly two arguments are required: height in inches and weight in pounds.');
    process.exit(1);
}

const height = Number(process.argv[2]);
const weight = Number(process.argv[3]);

if (isNaN(height) || isNaN(weight)) {
    console.error('Error: Both arguments must be valid numbers.');
    process.exit(1);
}

try {
    console.log(calculateBmi(height, weight));
} catch (error) {
    console.error('Error:', error.message);
}

console.log(calculateBmi(70, 125));  // Test for Underweight
console.log(calculateBmi(70, 150));  // Test for Normal weight
console.log(calculateBmi(70, 185));  // Test for Overweight
console.log(calculateBmi(70, 210));  // Test for Obese
*/