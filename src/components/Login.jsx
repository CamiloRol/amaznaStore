import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("/loogin.png")',
      backdropFilter: 'blur(100px)',
    }}>
      <div className="bg-black bg-opacity-85 text-white max-w-sm w-full rounded-xl p-6 shadow-lg">
        <h1 className="text-center text-2xl font-bold text-blue-400 mb-1">¡Bienvenido!</h1>
        <h2 className="text-center text-base text-gray-200 mb-6">Inicia sesión</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-white text-black border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-white text-black border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="********"
              required
            />
          </div>
            
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-400 via-white-500 to-blue-300 text-black font-bold rounded hover:from-orange-300 hover:to-red-500 transition duration-300"
          >
            Iniciar sesión
          </button>
          
        </form>
        <Link to="/Register">
        <a  onClick={() => navigate(`/`)}className="text-left mt-4 text-sm">
          - Volver al inicio -{' '}
          {/* <Link to="/Register" className="text-orange-400 hover:underline">Regístrate</Link> */}
        </a>
        <a  onClick={() => navigate(`/Register`)}className="text-center mt-4 text-sm">
          ¿No tienes cuenta?{' '}
          {/* <Link to="/Register" className="text-orange-400 hover:underline">Regístrate</Link> */}
        </a>
        </Link>
      </div>
    </div>
  );
}
