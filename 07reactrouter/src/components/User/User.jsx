import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-orange-700 text-white text-3xl text-center p-8">
      User - {userid}
    </div>
  );
};

export default User;
