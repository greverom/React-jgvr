import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { RememberMeCheckbox, RememberMeLabel, RememberMeContainer } from "../../../styles/styled/auth.styles";

interface CheckboxProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
}

const TestCheckbox = <T extends FieldValues>({ name, label, control }: CheckboxProps<T>) => {
   return (
      <Controller
         name={name}
         control={control}
         render={({ field }) => (
            <RememberMeContainer>
               <RememberMeCheckbox 
                  type="checkbox" 
                  id={name} 
                  checked={field.value ?? false} 
                  onChange={(e) => field.onChange(e.target.checked)}
               />
               <RememberMeLabel htmlFor={name}>{label}</RememberMeLabel>
            </RememberMeContainer>
         )}
      />
   );
};

export default TestCheckbox;