import { TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

const FormInputText = ({ name, control, defaultValue, isDisable, value, onChange, errorMsg, placeholder, classFormInput, register, type }) => {
    return (

        <Controller
            name={name}
            control={control}
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}

            rules={{
                required: true,
            }}
            render={({ field,
                fieldState: { error },

            }) => (
                <TextField
                    {...field}
                   
                    disabled={isDisable}
                    helperText={error ? errorMsg[error.type] : ""}
                    error={error != undefined}
                    placeholder={placeholder}
                    type={type}

                    InputProps={{
                        className: classFormInput,
                        disableUnderline: true,
                    }}
                  
                    disableUnderline={true}
                />
            )}
        />

    )
}

export default FormInputText