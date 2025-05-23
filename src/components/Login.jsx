import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
      const navigate = useNavigate();
      const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      try {
        console.log("Enviando:", email, password);

        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        console.log("Respuesta del backend:", response.status, data);

        if (!response.ok) {
          throw new Error(data?.error || 'Credenciales inválidas o error de autenticación');
        }

        const { user, token } = data;

        localStorage.setItem('token', token);
        localStorage.setItem('userEmail', email); // Guardo solo el email en localStorage

        if (['admin', 'developer', 'marketer', 'staff'].includes(user.rol)) {
          navigate('/dashboard');
        } else {
          navigate('/');
        }

      } catch (error) {
        console.error("Error en login:", error);
        alert(error.message);
      }
    
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("/loogin.png")',
      backdropFilter: 'blur(100px)',
    }}>
      <div className="bg-black bg-opacity-85 text-white max-w-sm w-full rounded-xl p-6 shadow-lg">
        <h1 className="text-center text-2xl font-bold text-blue-400 mb-1">¡Bienvenido!</h1>
        <h2 className="text-center text-base text-gray-200 mb-6">Inicia sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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
              name="password"
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
        <div className="flex flex-col gap-2 mt-4">
          <button onClick={() => navigate(`/`)} className="text-left text-sm underline">
            - Volver al inicio -
          </button>
          <button onClick={() => navigate(`/Register`)} className="text-center text-sm underline">
            ¿No tienes cuenta? Regístrate
          </button>
        </div>
      </div>
    </div>
  );
}