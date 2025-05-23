import { useNavigate } from 'react-router-dom';
const LandingCard=function(){
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 h-[85vh] p-9 bg-white shadow rounded-lg flex flex-col justify-end items-start">
        <h2 className="text-2xl font-semibold mb-2 ">Welcome to PopX</h2>
        <p className="text-gray-600 mb-5 text-left">
          Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,
        </p>
        <button onClick={()=> navigate('/signup')} className="w-full bg-purple-600 text-white font-semibold py-2 rounded mb-3 hover:bg-purple-700">
          Create Account
        </button>
        <button onClick={()=> navigate('/login')} className="w-full bg-purple-100 text-purple-800 font-semibold py-2 rounded hover:bg-purple-200">
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default LandingCard;

