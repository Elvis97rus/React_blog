import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option {...defaultValue.selected} disabled value="">{defaultValue.value}</option>
            {
                options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )
            }
        </select>
    );
};

export default MySelect;