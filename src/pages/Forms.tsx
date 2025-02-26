import { useEffect, useState } from "react";
import { FormData as UserFormData, FieldConfig } from "../Interfaces/dynamicForm.Props"; 
import DynamicForm from "../components/ui/DynamicForm/dynamicForm";
import { UserPageContainer, UserTitle } from "../styles/Form/formPage.style";
import formConfig from "../data/formConfig.json"; 

const Forms = () => {
  const [formFields, setFormFields] = useState<FieldConfig[]>([]);

  useEffect(() => {
    setFormFields(formConfig.fields as FieldConfig[]);
  }, []);

  const handleSubmit = (data: UserFormData) => { 
    console.log(data);
  };

  return (
    <UserPageContainer>
      <UserTitle>Formulario</UserTitle>
      {formFields.length > 0 ? (
        <DynamicForm fields={formFields} onSubmit={handleSubmit} />
      ) : (
        <p>Loading form...</p>
      )}
    </UserPageContainer>
  );
};

export default Forms;