import React from "react";

const InfoBox = ({
  childeren,
  title,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`text-2xl ${textColor} font-bold`}>{title}</h2>
      <p className="mt-2 mb-4">{childeren}</p>
      <a
        href={buttonInfo.link}
        className={`inline-block text-white rounded-lg px-4 py-2 hover:opacity-80 ${buttonInfo.backgroundColor}`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
