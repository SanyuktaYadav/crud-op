import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ viewId, showPopup, setShowPopup }) => {
	const users = useSelector(store => store.userDetail.users);

	const [user] = users.filter((element) => element.id === viewId)

  return (
    <div className="modal-background">
      <div className="modal-container">
        <h2>{user.name}</h2>
				<h3>{user.email}</h3>
				<h4>{user.age}</h4>
				<p>{user.gender}</p>
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  );
};

export default CustomModal;
