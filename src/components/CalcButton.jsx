/* BU DOSYADA DEĞİŞİKLİK YAPMA */

export default function CalcButton(props) {
  const { value, onClick = (e) => {} } = props;

  return (
    <div className="flex-1">
      <button
        value={value}
        type="button"
        onClick={(e) => {
          onClick(e);
        }}
        className="text-center select-none border border-[#6c5ce7] text-white outline-0 p-4 text-2xl rounded-none bg-[#546de5] w-full hover:bg-[#8e9fec] active:bg-[#8393dd] transition-all"
      >
        {value}
      </button>
    </div>
  );
}

/* BU DOSYADA DEĞİŞİKLİK YAPMA */
