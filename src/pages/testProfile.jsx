import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { getUserByUid } from "../api/user";

const TestProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (!uid) return;

    getUserByUid(uid).then(setUser);
  }, []);

  const logout = async () => {
    await signOut(auth);          
    localStorage.removeItem("uid"); 
    navigate("/testLogin");               
  };

  if (!user) return <p>Загрузка...</p>;

  return (
    <div className="container-fluid ">
      {/* <h2>Профиль</h2>
      <img src={user.avatar} width={80} style={{ borderRadius: "50%" }} />
      <p>{user.name}</p>
      <p>{user.email}</p>

      <button onClick={logout}>Выйти</button> */}
      <div className="row pt-2 pb-2 bg-dark">
        <div className="col-4">
        <button className="btn btn-success">EDUPORTAL <i class="fa-solid fa-graduation-cap text-dark ps-2 pe-3"></i></button>
        </div>
        <div className="col-4"></div>
        <div className="col-4 text-end">
            <a href="/tests">
            <button  className="btn btn-success me-2">Тесты</button>
            </a>
      
            <button className="btn btn-secondary me-2" onClick={logout}>Выйти</button>
            <button className="btn btn-danger">Удалить аккаунт</button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
            <h2 className="text-center pt-5">Привет <i class="fa-solid fa-hand-spock"></i></h2>
            <p className="text-center fs-4">Добро пожаловать в платформу тестирования!</p>
            <p className="text-center fs-4">Проверь свои знания!</p>
        </div>
      </div>
    </div>
  );
};

export default TestProfile;