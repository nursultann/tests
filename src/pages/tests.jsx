import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { answers } from "../questions/answers";

const Tests = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("uid");
    navigate("/");
  };

  return (
    <div className="container py-4">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center bg-dark text-white p-3 rounded shadow-sm mb-4">
        <div>
          <button className="btn btn-success fw-bold">
            EDUPORTAL{" "}
            <i className="fa-solid fa-graduation-cap text-dark ms-2"></i>
          </button>
        </div>
  
        <div>
          <button className="btn btn-success me-2">Тесты</button>
          <button className="btn btn-warning me-2" onClick={logout}>
            Выйти
          </button>
          <button className="btn btn-danger">Удалить</button>
        </div>
      </div>
  
      {/* TITLE */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          <i className="fa-solid fa-book me-2"></i>
          Тексты по программированию
        </h2>
      </div>
  
      {/* QUESTIONS */}
      <div className="d-flex flex-column align-items-center">
        {answers.map((i, index) => (
          <div
            key={index}
            className="card w-75 p-4 mb-4 shadow-sm border-0"
            style={{ borderRadius: "12px" }}
          >
            <h5 className="mb-3">{i.question}</h5>
  
            <div className="form-check mb-2">
              <input type="radio" name={`q-${index}`} className="form-check-input" />
              <label className="form-check-label">{i.one}</label>
            </div>
  
            <div className="form-check mb-2">
              <input type="radio" name={`q-${index}`} className="form-check-input" />
              <label className="form-check-label">{i.two}</label>
            </div>
  
            <div className="form-check mb-3">
              <input type="radio" name={`q-${index}`} className="form-check-input" />
              <label className="form-check-label">{i.three}</label>
            </div>
  
            <button className="btn btn-primary w-100">
              Проверить ответ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tests;
