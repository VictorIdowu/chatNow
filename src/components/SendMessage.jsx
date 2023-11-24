import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter valid message!");
      return;
    }
    setValue("");

    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
        time: `${hour}:${min < 10 ? "0" : ""}${min}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed bottom-0 w-full pb-10 shadow-lg px-4 lg:px-0 backdrop-blur-md">
      <form onSubmit={handleSendMessage} className="containerWrap flex gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input w-full focus:outline-none border border-gray-500"
          type="text"
        />
        <button
          type="submit"
          className="w-auto btn shadow-lg text-white rounded-r-lg px-5 text-sm"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
