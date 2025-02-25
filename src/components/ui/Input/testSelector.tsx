import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Label, ErrorMessage } from "../../../styles/styled/auth.styles";
import { Select, SelectContainer } from "../../../styles/styled/dynamicForm.Styles";

interface SelectorProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const TestSelector = <T extends FieldValues>({ name, label, control, options, placeholder }: SelectorProps<T>) => {
   return (
      <Controller
         name={name}
         control={control}
         render={({ field, fieldState: { error } }) => (

            <SelectContainer>
               <Label htmlFor={name}>{label}</Label>
               
               <Select {...field} id={name}>
                  {placeholder && <option value="">{placeholder}</option>}
                  {options.map((option) => (
                     <option key={option.value} value={option.value}>
                        {option.label}
                     </option>
                  ))}
               </Select>

               {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </SelectContainer>
         
         )}
      />
   );
};

export default TestSelector;