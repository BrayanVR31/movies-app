interface Props {
  image?: string;
}

const Avatar = ({ image }: Props) => {
  return (
    <div className="w-7 h-7 bg-blue-500 rounded-full">
      <img src={image} />
    </div>
  );
};

export default Avatar;
