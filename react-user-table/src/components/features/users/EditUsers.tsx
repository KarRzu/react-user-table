import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../main";
import { editUser } from "../redux/UserReducer";

export function EditUsers() {
  const { id } = useParams<{ id: string }>();
  const users = useSelector((state: RootState) => state.users);
  const user = users.filter((f) => f.id.toString() == id);

  const { name, username, email, phone } = user[0];

  const [updateName, setName] = useState(name);
  const [updateUsername, setUsername] = useState(username);
  const [updateEmail, setEmail] = useState(email);
  const [updatePhone, setPhone] = useState(phone);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      editUser({
        id: id,
        name: updateName,
        username: updateUsername,
        email: updateEmail,
        phone: updatePhone,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="w-full mt-8 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Edit User</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter name"
                value={updateName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter username"
                value={updateUsername}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter email"
                value={updateEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter phone number"
                value={updatePhone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
