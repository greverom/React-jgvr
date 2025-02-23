import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormInputs } from '../../Interfaces/authenticationProps';
import { AuthContainer, AuthForm, AuthTitle} from "../../styles/styled/auth.styles";
import Button from '../../components/ui/buttons/button';
import TestInput from '../../components/ui/Input/testInput';

const registerSchema = yup.object().shape({
  //username: yup.string().required('El nombre de usuario es obligatorio'),
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  password: yup.string().required('La contraseña es obligatoria').min(6, 'Mínimo 6 caracteres'),
  confirmPassword: yup.string()
    // .oneOf([yup.ref('password'), undefined], 'Las contraseñas deben coincidir')
    // .required('La confirmación es obligatoria'),
});

const Register: React.FC = () => {
  const methods = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: RegisterFormInputs) => {
    console.log(data);
  };

  return (
    <AuthContainer>
      <FormProvider {...methods}>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthTitle>Registrarse</AuthTitle>

            <TestInput name="email" label="Correo Electrónico" type="email" control={methods.control} />
            <TestInput name="password" label="Contraseña" type="password" control={methods.control} />

          <Button type="submit" variant="primary">Registrarse</Button>
        </AuthForm>
      </FormProvider>
    </AuthContainer>
  );
};

export default Register;