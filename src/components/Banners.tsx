import { Link } from "react-router-dom";
// very unfortunate naming, but as an example I think it’s suitable
const imagesData = [
  {
    id: 1,
    imgUrl: "/1.png",
    desc: "some image 1",
    linkUrl: "#",
  },
  {
    id: 2,
    imgUrl: "/2.png",
    desc: "some image 2",
    linkUrl: "#",
  },
  {
    id: 3,
    imgUrl: "/3.png",
    desc: "some image 3",
    linkUrl: "#",
  },
];
const Banners = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      {imagesData.map((imgData) => {
        // here we can create an image item component, but for simplicity, I won't separate it into a separate component.
        return (
          <Link to={imgData.linkUrl} key={imgData.id}>
            <img
              src={imgData.imgUrl}
              alt={imgData.desc}
              className=" rounded-md"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Banners;
