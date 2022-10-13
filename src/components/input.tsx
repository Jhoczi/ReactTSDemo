import React from "react";

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

//export const Input = (props: InputProps) => {
export const Input = ({value, handleChange}: InputProps) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    return <input
        type='text'
        value={value}
        //onChange={props.handleChange}
        onChange={handleInputChange}
    />
}