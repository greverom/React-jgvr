import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormInputs } from '../../Interfaces/authentication';
import { AuthContainer, AuthForm, AuthTitle, InputGroup, Label, Input, ErrorMessage, AuthButton } from "../../styles/auth.styles";

const loginSchema = yup.object().shape({
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('La contraseña es obligatoria'),
});

const Login: React.FC = () => {
  const methods = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  return (
    <AuthContainer>
    <FormProvider {...methods}>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle>Iniciar Sesión</AuthTitle>

        <InputGroup>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputGroup>

        <AuthButton type="submit">Ingresar</AuthButton>
      </AuthForm>
    </FormProvider>
  </AuthContainer>
  );
};

export default Login;