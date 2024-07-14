import { TotalProps } from "../types";

const Total: React.FC<TotalProps> = ({ total }) => {
    return <p>Number of exercises {total}</p>;
}

export default Total;