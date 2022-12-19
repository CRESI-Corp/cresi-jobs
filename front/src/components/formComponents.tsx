import React, { ChangeEvent } from 'react';

interface inputProps {
    placeholder: string;
    type: string;
    className: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


const FormInput: React.FC<inputProps> = ({ placeholder, type, className, value, onChange }) => {
    return (
        <input type={type} className={className} value={value} placeholder={placeholder} onChange={onChange} />
    );
};

interface selectProp {
    className: string;
    value: string;
    options: Array<{ value: string; className: string, isDisabled: boolean, }>;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelect: React.FC<selectProp> = ({ className, value, options, onChange }) => {
    return (
        <select className={className} defaultValue={options[0].value} onChange={onChange}>

            {options.map((option, key) => (
                <option key={key} className={option.className} disabled={option.isDisabled} value={option.value}>
                    {option.value}
                </option>
            ))}

        </select>
    );
}

interface textareaProps {
    placeholder: string;
    className: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea: React.FC<textareaProps> = ({ placeholder, className, value, onChange }) => {
    return (
        <textarea className={className} value={value} placeholder={placeholder} onChange={onChange} />
    );
};

interface buttonProps {
    className: string;
    value: string;
    type: "button" | "reset" | "submit" | undefined;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FormButton: React.FC<buttonProps> = ({ className, value, type, onClick }) => {
    return (
        <button type={type} onClick={onClick} className={className}>
            {value}
        </button>
    );
};

export {
    FormInput,
    FormSelect,
    FormTextArea,
    FormButton,
} 