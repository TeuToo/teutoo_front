interface TextFieldProps {
  title: string;
  placeholder: string;
}
export default function TextField({ title, placeholder }: TextFieldProps) {
  return (
    <label className="text-black flex flex-col my-2">
      <span className="text-sm">{title}</span>

      <input
        type="text"
        placeholder={placeholder}
        className=" text-[#697077] border border-[#DDE1E6] rounded-[12px] h-[38px]"
      />
    </label>
  );
}
