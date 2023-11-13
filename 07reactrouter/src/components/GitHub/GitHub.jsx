import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const GitHub = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/som-bee")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();

  return (
    <div className="bg-gray-600 text-white justify-center p-4 flex items-center">
      <img className="w-48 rounded-full " src={data.avatar_url} />
      <div className="p-8">
        <Link
          className="text-3xl hover:text-orange-600 block"
          to={data.html_url}
        >
          GitHub - {data.name}
        </Link>
        <div>{data.bio}</div>
        <Link className="block hover:text-orange-600" to={data.blog}>
          Portfolio
        </Link>
        <div>Followers : {data.followers}</div>
        <div>Company : {data.company}</div>
        <div>Location : {data.location}</div>
      </div>
    </div>
  );
};

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/som-bee");
  return response.json();
};
