/* BU DOSYADA DEĞİŞİKLİK YAPMA */

export default function TotalDisplay({ value }) {
  return (
    <div>
      <textarea
        className="h-14 bg-stone-200 py-2.5 px-3 text-2xl/normal w-full block resize-none"
        readOnly
        value={value}
        rows="1"
        id="total"
        type="text"
        name="ans"
      ></textarea>
    </div>
  );
}

/* BU DOSYADA DEĞİŞİKLİK YAPMA */
