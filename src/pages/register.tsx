import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormInputs } from "../Interfaces/authenticationProps";
import { AuthContainer, AuthForm, AuthTitle, LoginButtonContainer } from "../styles/Login-Register/login-register";
import Button from "../components/ui/buttons/button";
import TestInput from "../components/ui/Form/testInput";
import { useRegister } from "../hooks/Auth/useRegister";
import Modal from "../components/ui/modal/modal";

const registerSchema = yup.object().shape({
  email: yup.string().email("Correo inválido").required("El correo es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria").min(6, "Mínimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Las contraseñas deben coincidir")
    .required("La confirmación es obligatoria"),
});

const Register: React.FC = () => {
  const methods = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const { handleSubmit, formState, getValues } = methods;
  const { handleRegister, registerModal, setRegisterModal } = useRegister(formState); 

  const onSubmit = () => {
    const email = getValues("email");
    const password = getValues("password");
    handleRegister(email, password);
  };

  return (
    <AuthContainer>
      <FormProvider {...methods}>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthTitle>Registrarse</AuthTitle>

          <TestInput name="email" label="Correo Electrónico" type="email" control={methods.control} />
          <TestInput name="password" label="Contraseña" type="password" control={methods.control} />
          <TestInput name="confirmPassword" label="Confirmar Contraseña" type="password" control={methods.control} />


          <LoginButtonContainer>
            <Button type="submit" variant="primary">Registrarse</Button>
          </LoginButtonContainer>
        </AuthForm>
      </FormProvider>
      <Modal 
        isOpen={registerModal.isOpen}
        onClose={() => setRegisterModal({ isOpen: false, title: "", message: "", type: "success" })}
        type={registerModal.type}
        title={registerModal.title}
        message={registerModal.message}
      />
    </AuthContainer>
  );
};

export default Register;