import { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { ErrorMessage, Input, InputContainer, InputGroup, InputIcon, Label } from "../../../styles/Login-Register/login-register";
import { InputFieldProps } from "../../../Interfaces/authenticationProps";

interface TestInputProps<T extends FieldValues> extends InputFieldProps<T> {
    control: Control<T>;
    name: Path<T>; 
}

const TestInput = <T extends FieldValues>({ name, label, type = "text", control }: TestInputProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
        <Controller
            name={name}  
            control={control}
            render={({ field, fieldState: { error } }) => (
                <InputGroup> 
                    <Label htmlFor={name as string}>{label}</Label>
        
                    <InputContainer>
                        {type === "email" && (
                            <InputIcon $position="left">
                                <FaEnvelope />
                            </InputIcon>
                        )}
        
                        <Input
                            {...field}
                            id={name as string}
                            type={type === "password" && showPassword ? "text" : type}
                            $hasError={!!error}
                            value={typeof field.value === "boolean" ? "" : field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.value)}
                        />
        
                        {type === "password" && (
                            <InputIcon $position="right" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </InputIcon>
                        )}
                    </InputContainer>
        
                    {error && <ErrorMessage>{error.message}</ErrorMessage>}
                </InputGroup>
            )}
        />
    );
};

export default TestInput;