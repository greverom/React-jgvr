import { useDynamicForm } from "../../../hooks/Form/useFormHandler";
import Button from "../buttons/button";
import { DynamicFormContainer, DynamicFormWrapper, FormTitle, 
         FormGrid, InputGroup, Label, InputContainer, Input, 
         SelectContainer,  Select, ErrorMessage, ButtonContainer} from "../../../styles/Form/dynamicFormComponent.Styles";
import Modal from "../modal/modal";
import { DynamicFormProps, FormData } from "../../../Interfaces/dynamicForm.Props";

export default function DynamicForm({ fields, onSubmit }: DynamicFormProps) {
  const {
    register,
    handleSubmit,
    handleFormSubmit,
    errors,
    formModal,
    setFormModal,
  } = useDynamicForm(fields, onSubmit);

  return (
    <DynamicFormContainer>

      <DynamicFormWrapper onSubmit={handleSubmit(handleFormSubmit)}>

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

      <Modal
        isOpen={formModal.isOpen}
        onClose={() => setFormModal({ isOpen: false, title: "", message: "", type: "success" })}
        type={formModal.type}
        title={formModal.title}
        message={formModal.message}
      />
      
    </DynamicFormContainer>
  );
}
