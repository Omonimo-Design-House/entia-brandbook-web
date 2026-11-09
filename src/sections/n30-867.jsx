const imgReglaLateral = "https://www.figma.com/api/mcp/asset/393ab0a9-526e-4f38-8db0-afc9394b3f10.svg";

export default function Component06Personalidad() {
  return (
    <div className="bg-[#fff7ed] relative size-full" data-node-id="30:867" data-name="06-Personalidad">
      <div className="absolute h-[200px] left-0 top-0 w-[1920px]" data-node-id="30:868" data-name="Chrome / Encabezado" />
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Source_Code_Pro:Medium'] font-medium gap-px items-start leading-[normal] left-[81px] overflow-clip text-[15px] top-[72px] whitespace-nowrap" data-node-id="30:869" data-name="Meta">
        <p className="relative shrink-0 text-[#400]" data-node-id="30:870">
          Entia®
        </p>
        <p className="relative shrink-0 text-[rgba(68,0,0,0.45)]" data-node-id="30:871">
          Brand Guidelines
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[723px] items-start left-[92px] overflow-clip top-[181px] w-[1372px]" data-node-id="30:872" data-name="Meta">
        <p className="[word-break:break-word] font-['Source_Serif_4:Light'] font-light leading-[134px] relative shrink-0 text-[#400] text-[128px] w-[1324px]" data-node-id="30:873">{`Para descargar la versión PDF de este manual, haz click en el botón `}</p>
      </div>
      <div className="absolute h-[2px] left-[364px] top-[57px] w-[1476px]" data-node-id="30:886" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="absolute bg-[#400] h-[2px] left-[80px] top-[57px] w-[248px]" data-node-id="30:887" data-name="Regla lateral" />
      <div className="absolute content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex items-center justify-center left-[92px] p-[25px] rounded-[37px] top-[628px]" data-node-id="41:477">
        <a className="[word-break:break-word] block font-['Source_Code_Pro:Medium'] font-medium leading-[0] relative shrink-0 text-[#400] text-[16px] tracking-[4.16px] uppercase whitespace-nowrap" href="https://drive.google.com/drive/folders/1g_gyCnZ1kCHHWc5c_b1m-p_HC-fepk0P?usp=sharing" data-node-id="41:478" target="_blank">
          <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">descargar EN PDF</p>
        </a>
      </div>
    </div>
  );
}
