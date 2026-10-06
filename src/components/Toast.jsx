/* toast notifikasi — meluncur dari bawah */
export default function Toast({ toast }) {
  return (
    <div
      className={`fixed bottom-7 left-1/2 z-[3000] max-w-[90vw] rounded-full px-[26px] py-[15px] text-center text-[14.5px] font-bold text-white shadow-[0_14px_34px_rgba(0,0,0,0.25)] transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        toast?.ok === false ? 'bg-pink-dark' : 'bg-green-deep'
      } ${toast ? 'translate-x-[-50%] translate-y-0' : 'translate-x-[-50%] translate-y-[120px]'}`}
    >
      {toast?.msg ?? ''}
    </div>
  );
}
