import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/UserReducer";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../main";

export type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export function AddUsers() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state: RootState) => state.users.data);

  const getNewId = () => {
    if (users && users.length > 0) {
      return Math.max(...users.map((user) => user.id)) + 1;
    }
    return 1;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser: UserProps = {
      id: getNewId(),
      name,
      username,
      email,
      phone,
    };

    dispatch(addUser(newUser));

    navigate("/");
  };

  return (
    <div className="w-full mt-8 flex justify-center items-center  p-6">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1 text-left "
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1 text-left "
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1 text-left "
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1 text-left "
            >
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}
