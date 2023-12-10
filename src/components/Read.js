import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "../store/userDetailSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const allData = useSelector((store) => store.userDetail);

  const searctTerm = allData.searchData;

  const [radioData, setRadioData] = useState("");

  const [viewId, setViewId] = useState();
  const [showPopup, setShowPopup] = useState();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (allData.loading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <div>
      {showPopup && (
        <CustomModal
          viewId={viewId}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <div class="text-center m-2">
        <h2>All Data</h2>
        <input
          className="form-check-input"
          name="gender"
          type="radio"
          checked={radioData === ""}
          onChange={(e) => setRadioData("")}
        />
        <label className="form-check-label m-1">All</label>
        <input
          className="form-check-input"
          name="gender"
          value="Male"
          type="radio"
          checked={radioData === "Male"}
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label m-1">Male</label>
        <input
          className="form-check-input"
          name="gender"
          value="Female"
          type="radio"
          checked={radioData === "Female"}
          onChange={(e) => setRadioData("Female")}
        />
        <label className="form-check-label m-1">Female</label>
      </div>

      <div>
        {allData?.users
          .filter((user) => user.gender.includes(radioData))
          .filter((user) =>
            user.name.toLowerCase().includes(searctTerm.toLowerCase())
          )
          .map((user) => (
            <div className="card mx-auto mb-4" style={{ width: "40rem" }}>
              <div className="card-body p-5">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {user.email}
                </h6>
                <p className="card-text">
                  {user.age},{user.gender}
                </p>
                <button
                  className="card-link"
                  onClick={() => [setViewId(user.id), setShowPopup(true)]}
                >
                  View
                </button>
                <Link to={`/edit/${user.id}`} className="card-link">
                  Edit
                </Link>
                <Link
                  to="/"
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="card-link"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
