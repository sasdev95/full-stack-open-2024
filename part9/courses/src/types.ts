interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

interface DescriptiveCoursePart extends CoursePartBase {
    description: string;
}

interface CoursePartBasic extends DescriptiveCoursePart {
    kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
}

interface CoursePartBackground extends DescriptiveCoursePart {
    backgroundMaterial: string;
    kind: "background"
}

interface CoursePartRequirements extends DescriptiveCoursePart {
    requirements: string[];
    kind: "requirements"
}

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartRequirements;

export interface HeaderProps {
    name: string;
}

export interface ContentProps {
    parts: CoursePart[]
}

export interface TotalProps {
    total: number;
}

export default CoursePart;