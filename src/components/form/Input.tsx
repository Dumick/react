import React, {FC, ReactElement} from 'react';
import InputMask from 'react-input-mask';


interface EditableInputProps {
    name: string
    value: string
    label: string
    mask?: string
    inputType?: string
    inputClass?: string
}

const MyInput: FC<EditableInputProps> = (props) => {
    const {name, value, mask, label, inputType = 'text', inputClass = 'my-input'} = props;

    const handleChange = () => {

    }

    let content: ReactElement;
    if (mask?.length > 0)
        content = <InputMask mask={mask} id={name} value={value}/>

    content = <input type={inputType} name={name} value={value}/>

    return <label>
        {label}
        {content}
        <span>{}</span>
    </label>
};

export default MyInput;
