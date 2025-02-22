import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { LoginFormInputs } from '../../Interfaces/authentication';
import { useAuthPassword } from '../../hooks/useAuthPassword';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

import { AuthContainer, AuthForm, AuthTitle, InputGroup, Label, Input, ErrorMessage, AuthButton, 
         RememberMeContainer, RememberMeCheckbox, ForgotPasswordLink, RememberMeLabel, RememberAndForgotContainer, InputContainer, EmailIcon,
         PasswordIcon} from "../../styles/styled/auth.styles";

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
            <EmailIcon>
              <FaEnvelope /> 
            </EmailIcon>
              <Input id="email" type="email" {...register("email")} />
          </InputContainer>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Contraseña</Label>
          <InputContainer>
            <Input id="password" type={showPassword ? "text" : "password"} {...register("password")} />
            <PasswordIcon onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />} 
            </PasswordIcon>
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


        <AuthButton type="submit">Ingresar</AuthButton>
      </AuthForm>
    </FormProvider>
  </AuthContainer>
  );
};

export default Login;