import   React from 'react';
import   * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { LoginFormInputs } from '../../Interfaces/authenticationProps';
import   Button from '../../components/ui/buttons/button';
import { useAuth } from '../../hooks/Auth/useAuth';
import   TestInput from '../../components/ui/Form/testInput';
import   TestCheckbox from '../../components/ui/Form/testCheckbox';
import { AuthContainer, AuthForm, AuthTitle, 
         ForgotPasswordLink, RememberAndForgotContainer } from "../../styles/Auth/auth.styles";

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
  const { handleLogin } = useAuth(setValue);
  const onSubmit = ({email, password, rememberMe}: LoginFormInputs) => {
    handleLogin(email, password, rememberMe);
  };

  return (
    <AuthContainer>
      <FormProvider {...methods}>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthTitle>Iniciar Sesión</AuthTitle>

          <TestInput name="email" label="Correo Electrónico" type="email" control={methods.control} />
          <TestInput name="password" label="Contraseña" type="password" control={methods.control} />

          <RememberAndForgotContainer>
            <TestCheckbox name="rememberMe" label="Recordar usuario" control={methods.control} />
            <ForgotPasswordLink href="#">¿Olvidaste tu contraseña?</ForgotPasswordLink>
          </RememberAndForgotContainer>

          <Button type="submit" variant="primary">Ingresar</Button>
        </AuthForm>
      </FormProvider>
    </AuthContainer>
  );
};

export default Login;