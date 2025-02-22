import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormInputs } from '../../Interfaces/authentication';
import '../../styles/auth.css'; 

const registerSchema = yup.object().shape({
  username: yup.string().required('El nombre de usuario es obligatorio'),
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required('La contraseña es obligatoria'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), undefined], 'Las contraseñas deben coincidir')
    .required('La confirmación es obligatoria'),
});

const Register: React.FC = () => {
  const methods = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data: RegisterFormInputs) => {
    console.log(data);
  };

  return (
    <div className="register-container">
      <FormProvider {...methods}>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Registrarse</h2>

          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input id="email" type="email" {...register("email")} />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" {...register("password")} />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input id="confirmPassword" type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
          </div>

          <button className="register-button" type="submit">Registrarse</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Register;