import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { getUserByUid, createUser } from "../api/user";

const TestLogin = () => {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      localStorage.setItem("uid", user.uid);

      const existingUser = await getUserByUid(user.uid);

      if (!existingUser) {
        await createUser({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          phone: user.phoneNumber || "",
          createdAt: new Date().toISOString(),
        });
      }

      navigate("/testProfile");
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h2 className="title">Вход</h2>

        <input type="text" placeholder="Email" className="input form-control" />
        <input
          type="password"
          placeholder="Пароль (минимум 6 символов)"
          className="input form-control"
        />

        <button className="btn btn-primary">Войти</button>

        <p className="text-primary pt-3 ps-5">
          Нет аккаунта? Зарегистритуйтесь
        </p>
        <p className="text-center text-secondary ">или</p>
        <button  className="btn btn-outline-dark"   onClick={loginWithGoogle} >
        <i class="fa-solid fa-magnifying-glass text-primary"></i> Войти через Google
        </button>
      </div>
    </div>
  );
};

export default TestLogin;
