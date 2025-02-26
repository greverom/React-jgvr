import { useForm } from "react-hook-form";
import { DynamicFormProps, FormData } from "../../../Interfaces/dynamicForm.Props"; 
import { createValidationSchema } from "../../../validations/dynamicFormValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../buttons/button";

import { DynamicFormContainer, DynamicFormWrapper, FormTitle,
         FormGrid, InputGroup, Label, InputContainer, Input, SelectContainer,
         Select, ErrorMessage, ButtonContainer } from "../../../styles/Form/dynamicFormComponent.Styles"; 

export default function DynamicForm({ fields, onSubmit }: DynamicFormProps) {
  const validationSchema = createValidationSchema(fields);
  const { register, handleSubmit, formState: { errors }} = useForm<FormData>({  
    resolver: yupResolver(validationSchema),
  });

  return (
    <DynamicFormContainer>
      
      <DynamicFormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Registro de Usuario</FormTitle>
  
        <FormGrid>
          {fields.map((field) => (
            <InputGroup key={field.name}>
              <Label>{field.label}</Label>
  
              {field.type === "select" ? (
                <SelectContainer>
                  <Select {...register(field.name as keyof FormData)} defaultValue="">
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value} disabled={option.disabled}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </SelectContainer>
              ) : (
                <InputContainer>
                  <Input
                    type={field.type} 
                    {...register(field.name as keyof FormData)}
                    $hasError={!!errors[field.name as keyof FormData]}
                  />
                </InputContainer>
              )}
              {errors[field.name as keyof FormData] && (
                <ErrorMessage>{errors[field.name as keyof FormData]?.message as string}</ErrorMessage>
              )}
            </InputGroup>
          ))}
        </FormGrid>
  
        <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>
      </DynamicFormWrapper>
    </DynamicFormContainer>
  );
}