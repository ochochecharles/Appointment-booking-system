import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();

    const handleUserClick = () => {
    navigate('/user');
  };

    const handleLoginClick = () => {
    navigate('/login');
  };
    return ( 
        <div
        className="bg-[url('/desktop-hero.jpg')] bg-cover bg-center min-h-screen max-h-screen flex flex-cols items-center justify-center px-4"
        >
            <section>
                <div className="space-y-6 px-16">
                    <h1 className="text-2xl font-bold text-center">
                        Your Health, Your Time, Book with Ease
                    </h1>
                    <p className="text-xl font-semibold">
                        Skip the wait. Secure your consultation online in just a few clicks — quick, convenient, and completely hassle-free.
                    </p>
                </div>
                <div className="flex flex-col gap-4 items-center sm:flex sm:flex-row sm:justify-center py-8">
                    <button onClick={handleUserClick} className="text-white font-bold bg-blue-600 hover:bg-blue-700  px-4 py-2 rounded sm:w-70 w-full">Book Appointment</button>
                    <button onClick={handleLoginClick} className="text-white font-bold bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded sm:w-70 w-full">Login</button>
                </div>
            </section>

        </div>
     );
}

export default Home;
