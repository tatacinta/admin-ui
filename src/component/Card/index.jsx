const Card = ({ title, desc, children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-gray-600">{title}</h2>
      {desc && <div className="text-gray-500 mb-4">{desc}</div>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
