const Badge = ({ img, name }) => {
  return (
    <section className="flex  flex-col items-center w-40 pb-5">
      <section className=" bg-[#0f204a] rounded-md p-2">
        <figure className=" flex items-center w-24 h-24 p-4 rounded-full bg-white hover:scale-105 transition-transform duration-100 ease-in-out">
          <img src={img} className="rounded-xl" alt={`badge-${name}`} />
        </figure>
      </section>
      <section className=" relative top-1 bg-black w-24 text-center rounded text-white font-semibold">
        {name}
      </section>
    </section>
  );
};

export default Badge;
