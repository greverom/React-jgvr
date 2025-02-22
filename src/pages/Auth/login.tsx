import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormInputs } from '../../Interfaces/authentication';
import '../../styles/auth.css'; 

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
    <div className="login-container">
      <FormProvider {...methods}>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Iniciar Sesión</h2>

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

          <button className="login-button" type="submit">Ingresar</button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;