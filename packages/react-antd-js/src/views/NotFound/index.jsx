import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  const goHome = () => {
    // history.goBack();
    navigate("/", { replace: true });
  };
  return (
    <>
      <h1>404</h1>
      {/* goBack */}
      <button onClick={goHome}>goBack</button>
    </>
  );
}
export default NotFound;
