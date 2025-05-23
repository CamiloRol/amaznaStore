import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
/* import { useForm } from 'react-hook-form'; */

export default function Register() {
  /*  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  */

  const navigate = useNavigate()
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        /* backgroundColor: '#141414', */
        backgroundImage: 'url("/BGamazna.png")',
        backdropFilter: 'blur(100px)',
      }}
    >
      <div className="bg-black-100 bg-white text-blue-400 rounded-xl p-15 shadow-lg w-[90%] max-w-xl mt-30">
        <h1 className="text-center text-3xl font-bold mb-6">
          Formulario de Registro
        </h1>

        <form /* onSubmit={handleSubmit(onSubmit)} */ className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block mb-1 text-lg">User Name</label>
            <input
              type="text"
              className="w-full text-white border border-blue-400 px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              /*  {...register('name', {
                required: true,
                maxLength: 20,
              })} */
            />
            {/* {errors.name?.type === 'required' && (
              <p className="text-red-500 text-sm">Este campo es requerido</p>
            )}
            {errors.name?.type === 'maxLength' && (
              <p className="text-red-500 text-sm">El nombre no puede exceder los 20 caracteres</p>
            )} */}
          </div>

          {/* Rol */}
          <div>
            <label className="block mb-1 text-lg">Rol</label>
            <select
              className="w-full bg-white text-black border border-blue-400 px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              /*  {...register('genre')} */
            >
              <option value="Cliente">Cliente</option>
              <option value="Recepcionista">Super-admin</option>
              <option value="Mesero">Admin</option>
              <option value="Admin">Developer</option>
              <option value="Admin">marketer</option>
              <option value="Admin">Staff</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-lg">Email</label>
            <input
              type="text"
              className="w-full bg-white text-white border border-blue-400 px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              /*  {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })} */
            />
            {/* {errors.email?.type === 'required' && (
              <p className="text-red-500 text-sm">Este campo es requerido</p>
            )}
            {errors.email?.type === 'pattern' && (
              <p className="text-red-500 text-sm">El email no es válido</p>
            )} */}
          </div>

          {/* Contraseña */}
          <div>
            <label className="block mb-1 text-lg">Contraseña</label>
            <input
              type="password"
              className="w-full text-blue border border-blue-400 px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              /* {...register('password')} */
            />
          </div>

          {/* Botón */}
          <Link to="/Login">
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-400 via-white-500 to-blue-300 text-black font-bold rounded hover:from-blue-100 hover:to-blue-500 transition duration-300"
            >
              Registrarse
            </button>
          </Link>
          <a  onClick={() => navigate(`/`)}className="text-left mt-4 text-sm">
          - Volver al inicio -{' '}
          {/* <Link to="/Register" className="text-orange-400 hover:underline">Regístrate</Link> */}
          </a>
        </form>
      </div>
    </div>
  );
}
