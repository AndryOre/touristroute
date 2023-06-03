import React from "react";
import Header from "../../Ui/Header";
import Footer from "../../Ui/Footer";
import Input from "../../Ui/Input";
import Button from "../../Ui/Button";
import LogIn from "../../../assets/log-in.svg";

const Register = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="auth" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex  flex-col items-center gap-8 px-4 py-2 lg:flex-row lg:justify-center lg:rounded lg:bg-white lg:p-8 ">
          <img src={LogIn} alt="Log In Image" className="h-24 lg:h-96" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">Bienvenido de vuelta</div>
              <div className="text-sm font-semibold text-neutral-800">
                ¡Planifiquemos tu proximo viaje!
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Correo electrónico"
                type="email"
                leftIcon="envelope"
              />
              <Input
                placeholder="Contraseña"
                type="password"
                leftIcon="key"
                rightIcon="eye"
              />
              <div className="flex items-center justify-end">
                <Button label="¿Olvidaste tu contraseña?" variant="text" />
              </div>
            </div>
            <Button label="Iniciar sesión" fullWidth />
            <div className="flex items-center justify-center text-sm font-semibold">
              <div>¿No tienes una cuenta?</div>
              <Button label="Regístrate ahora" variant="text" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;