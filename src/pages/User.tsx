import { useEffect, useState } from "react";
import { FormData as UserFormData, FieldConfig } from "../Interfaces/dynamicForm.Props"; 
import DynamicForm from "../components/ui/DynamicForm/dynamicForm";

const User = () => {
  const [formFields, setFormFields] = useState<FieldConfig[]>([]);

  useEffect(() => {
    import("../data/formConfig.json")
      .then((config) => setFormFields(config.fields as FieldConfig[])) 
      .catch((error) => console.error("Error cargando el formulario:", error));
  }, []);

  const handleSubmit = (data: UserFormData) => { 
    console.log("Formulario enviado:", data);
  };

  return (
    <div>
      <h1>User Page</h1>
      {formFields.length > 0 ? (
        <DynamicForm fields={formFields} onSubmit={handleSubmit} />
      ) : (
        <p>Loading form...</p>
      )}
    </div>
  );
};

export default User;