import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormInputs } from '../../Interfaces/authentication';
import { AuthContainer, AuthForm, AuthTitle, InputGroup, Label, Input, ErrorMessage, 
        InputContainer, InputIcon} from "../../styles/styled/auth.styles";
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuthPassword } from '../../hooks/useAuthPassword';
import Button from '../../components/ui/buttons/button';

const registerSchema = yup.object().shape({
  //username: yup.string().required('El nombre de usuario es obligatorio'),
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('La contraseña es obligatoria'),
  confirmPassword: yup.string()
    // .oneOf([yup.ref('password'), undefined], 'Las contraseñas deben coincidir')
    // .required('La confirmación es obligatoria'),
});

const Register: React.FC = () => {
  const methods = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const { register, handleSubmit, formState: { errors } } = methods;
  const { showPassword, togglePasswordVisibility } = useAuthPassword();
  const onSubmit = (data: RegisterFormInputs) => {
    console.log(data);
  };

  return (
    <AuthContainer>
      <FormProvider {...methods}>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthTitle>Registrarse</AuthTitle>

          {/* <InputGroup>
            <Label htmlFor="username">Nombre de Usuario</Label>
            <Input id="username" type="text" {...register("username")} />
            {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
          </InputGroup> */}

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

          {/* <InputGroup>
            <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
            <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
          </InputGroup> */}

          <Button type="submit" variant="primary">Ingresar</Button>
        </AuthForm>
      </FormProvider>
    </AuthContainer>
  );
};

export default Register;