interface ChipProps {
  name: string;
}

const Chip = ({ name }: ChipProps) => {
  return <span className="bg-black rounded-2xl px-3 py-1 text-white text-body-medium">{name}</span>;
};

export default Chip;
