import { Checkbox } from "@mui/material";

const CheckBox = ({ name, index, isChecked, onChange, style,...props }) => {
    return (
        <div style={{ display: 'block', paddingLeft: '1.5em', marginBottom: '.125rem', minHeight: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    style={style}
                    checked={isChecked}
                    onChange={onChange}
                    {...props}
                />
                <p style={{ marginLeft: '.5rem' }}>{name}</p>
            </div>
        </div>
    );
};

export default CheckBox