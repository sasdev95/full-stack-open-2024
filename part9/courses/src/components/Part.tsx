import CoursePart from "../types";

const Part: React.FC<{ part: CoursePart }> = ({ part }) => {
    const noMarginStyle = {
        margin: 0,
    };
    const containerStyle = {
        marginBottom: '20px',
    };

    switch (part.kind) {
        case "basic":
            return (
                <div style={containerStyle}>
                    <h4 style={noMarginStyle}>{part.name} {part.exerciseCount}</h4>
                    <p style={noMarginStyle}><em>{part.description}</em></p>
                </div>
            );
        case "group":
            return (
                <div style={containerStyle}>
                    <h4 style={noMarginStyle}>{part.name} {part.exerciseCount}</h4>
                    <p style={noMarginStyle}>Project Exercises: {part.groupProjectCount}</p>
                </div>
            );
        case "background":
            return (
                <div style={containerStyle}>
                    <h4 style={noMarginStyle}>{part.name} {part.exerciseCount}</h4>
                    <p style={noMarginStyle}><em>{part.description}</em></p>
                    Submit background material to <a href={part.backgroundMaterial}>link</a>
                </div>
            );
        case "requirements":
            return (
                <div style={containerStyle}>
                    <h4 style={noMarginStyle}>{part.name} {part.exerciseCount}</h4>
                    <p style={noMarginStyle}><em>{part.description}</em></p>
                    <p style={noMarginStyle}>Required Skills: {part.requirements.join(", ")}</p>
                </div>
            );
        default:
            return null;
    }
}

export default Part;