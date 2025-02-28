import   React from 'react';
import   * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { LoginFormInputs } from '../Interfaces/authenticationProps';
import   Button from '../components/ui/buttons/button';
import { useAuth } from '../hooks/Auth/useLogin';
import   TestInput from '../components/ui/Form/testInput';
import   TestCheckbox from '../components/ui/Form/testCheckbox';
import { AuthContainer, AuthForm, AuthTitle, 
         ForgotPasswordLink, LoginButtonContainer, RememberAndForgotContainer } from "../styles/Login-Register/login-register";
import Modal from '../components/ui/modal/modal';

const loginSchema = yup.object().shape({
  email: yup.string().required('El correo es obligatorio').email('Correo inválido'),
  password: yup.string().required('La contraseña es obligatoria'),
  rememberMe: yup.boolean().default(false).transform((value) => value ?? false),
});

const Login: React.FC = () => {
  const methods = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const { handleSubmit, setValue, formState } = methods;
  const { handleLogin, errorModal, setErrorModal } = useAuth( setValue, formState ); 

  const onSubmit = ({ email, password, rememberMe }: LoginFormInputs) => {
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

          <LoginButtonContainer>
          <Button type="submit" variant="primary">Ingresar</Button>
          </LoginButtonContainer>
        </AuthForm>
      </FormProvider>
      <Modal 
        isOpen={errorModal.isOpen}
        onClose={() => setErrorModal({ isOpen: false, title: "", message: "", type: "error" })}
        type={errorModal.type}  
        title={errorModal.title}
        message={errorModal.message}
       />
    </AuthContainer>
  );
};

export default Login;