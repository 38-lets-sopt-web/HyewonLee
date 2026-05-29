interface InfoBoxProps {
  label: string;
  value: string;
}

const InfoBox = ({ label, value }: InfoBoxProps) => {
  return (
    <div className="bg-black/10 rounded-xl p-5 w-70">
      <p className="text-body-bold">{label}</p>
      <p className="text-body-medium">{value}</p>
    </div>
  );
};

export default InfoBox;
