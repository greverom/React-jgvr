import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { LoginFormInputs } from '../../Interfaces/authentication';
import { AuthContainer, AuthForm, AuthTitle, RememberMeContainer, RememberMeCheckbox, 
        ForgotPasswordLink, RememberMeLabel, RememberAndForgotContainer, 
        } from "../../styles/styled/auth.styles";
import Button from '../../components/ui/buttons/button';
import { useAuth } from '../../hooks/Auth/useAuth';
import TestInput from '../../components/ui/Input/textInput';

const loginSchema = yup.object().shape({
  email: yup.string().required('El correo es obligatorio').email('Correo inválido'),
  password: yup.string().required('La contraseña es obligatoria'),
  rememberMe: yup.boolean().default(false).transform((value) => value ?? false),
});

const Login: React.FC = () => {
  const methods = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const { handleSubmit, setValue } = methods;
  const { handleLogin, rememberMe, setRememberMe } = useAuth(setValue);

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    handleLogin(data.email, data.password, data.rememberMe);
  };

  return (
    <AuthContainer>
      <FormProvider {...methods}>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthTitle>Iniciar Sesión</AuthTitle>

            <TestInput name="email" label="Correo Electrónico" type="email" control={methods.control} />
            <TestInput name="password" label="Contraseña" type="password" control={methods.control} />

          <RememberAndForgotContainer>
            <RememberMeContainer>
              <RememberMeCheckbox 
                type="checkbox" 
                {...methods.register("rememberMe")} 
                id="rememberMe" 
                checked={rememberMe} 
                onChange={() => setRememberMe(!rememberMe)} 
              />
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