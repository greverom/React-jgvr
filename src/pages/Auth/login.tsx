import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { LoginFormInputs } from '../../Interfaces/authentication';
import { useAuthPassword } from '../../hooks/useAuthPassword';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

import { AuthContainer, AuthForm, AuthTitle, InputGroup, Label, Input, 
  ErrorMessage, RememberMeContainer, RememberMeCheckbox, 
  ForgotPasswordLink, RememberMeLabel, RememberAndForgotContainer, 
  InputContainer ,InputIcon} from "../../styles/styled/auth.styles";
import Button from '../../components/ui/buttons/button';

const loginSchema = yup.object().shape({
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('La contraseña es obligatoria'),
  rememberMe: yup.boolean(),
});

const Login: React.FC = () => {
  const methods = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const { register, handleSubmit, formState: { errors } } = methods;
  const { showPassword, togglePasswordVisibility } = useAuthPassword();
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
          <InputContainer>
            <InputIcon $position="left">
              <FaEnvelope />
            </InputIcon>
            <Input id="email" type="email" {...register("email")} $hasError={!!errors.email} />
          </InputContainer>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Contraseña</Label>
          <InputContainer>
            <Input id="password" type={showPassword ? "text" : "password"} {...register("password")} $hasError={!!errors.password} />
            <InputIcon $position="right" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </InputIcon>
          </InputContainer>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputGroup>

        <RememberAndForgotContainer>
          <RememberMeContainer>
            <RememberMeCheckbox type="checkbox" {...register("rememberMe")} id="rememberMe" />
            <RememberMeLabel htmlFor="rememberMe">Recordar usuario</RememberMeLabel>
          </RememberMeContainer>
            <ForgotPasswordLink href="#">¿Olvidaste tu contraseña?</ForgotPasswordLink>
        </RememberAndForgotContainer>


        <Button type="submit" variant="primary">Ingresar</Button>
      </AuthForm>
    </FormProvider>
  </AuthContainer>
  );
};

export default Login;