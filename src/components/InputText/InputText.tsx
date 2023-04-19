import React, {useState} from "react";

interface IInputTextProps {
    min?: number;
    max?: number;
}

function InputText({ max, min }: IInputTextProps) {
    const [value, setValue] = useState('');
    const [showErrorMin, setShowErrorMin] = useState(false);
    const [showErrorMax, setShowErrorMax] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (min && newValue.length < min) {
            setShowErrorMin(true);
        } else if (max && newValue.length > max) {
            setShowErrorMax(true);
        } else {
            setShowErrorMin(false);
            setShowErrorMax(false);
        }
    };

    return (
        <div className="input-container">
            <label className="input-label" htmlFor="inputText">
                Введите текст:
            </label>
            <input
                className={`input-field ${showErrorMax || showErrorMin ? 'input-field--error' : ''}`}
                type="text"
                id="inputText"
                value={value}
                onChange={handleChange}
            />

            {showErrorMax && (
                <div className="input-error">
                    {max && `Нельзя ввести больше, чем ${max} символов.`}
                </div>
            )}

            {showErrorMin && (
                <div className="input-error">
                    {min && `Вам нужно ввести минимум ${min} символа. `}
                </div>
            )}
        </div>
    );
}

export default InputText;