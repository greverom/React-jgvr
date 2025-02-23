import React, { useState } from "react";
import { Control, Controller } from "react-hook-form";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { ErrorMessage, Input, InputContainer, InputGroup, InputIcon, Label } from "../../../styles/styled/auth.styles";
import { InputFieldProps, LoginFormInputs } from "../../../Interfaces/authentication";

interface TestInputProps extends InputFieldProps {
    control: Control<LoginFormInputs>;
}

const TestInput: React.FC<TestInputProps> = ({ name, label, type = "text", control }) => {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => (
                <InputGroup> 
                <Label htmlFor={name}>{label}</Label>
    
                <InputContainer>
                    {type === "email" && (
                    <InputIcon $position="left">
                        <FaEnvelope />
                    </InputIcon>
                    )}
    
                    <Input
                    {...field}
                    id={name}
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