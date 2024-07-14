import { ContentProps } from "../types";
import Part from "./Part";

const Content: React.FC<ContentProps> = ({ parts }) => {
    return (
        <div>
            {parts.map(part => <Part key={part.name} part={part} /> )}
        </div>
    );
};

export default Content;