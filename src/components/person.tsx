import {PersonProps} from "./types/person.type";


export const Person = (props: PersonProps) => {
    return (
        <div>{props.name.first} {props.name.last}</div>
    );
}