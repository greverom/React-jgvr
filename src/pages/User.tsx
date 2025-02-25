import { useEffect, useState } from "react";
import { FormData as UserFormData, FieldConfig } from "../Interfaces/dynamicForm.Props"; 
import DynamicForm from "../components/ui/DynamicForm/dynamicForm";
import { UserPageContainer, UserTitle } from "../styles/styled/userPage.style";

const User = () => {
  const [formFields, setFormFields] = useState<FieldConfig[]>([]);

  useEffect(() => {
    import("../data/formConfig.json")
      .then((config) => setFormFields(config.fields as FieldConfig[])) 
      .catch((error) => console.error(error));
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

export default User;