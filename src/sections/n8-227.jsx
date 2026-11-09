const imgReglaLateral = "https://www.figma.com/api/mcp/asset/72c43e51-cdf8-4d3b-96e5-a0e4b55e5c38.svg";

export default function Component02Introduccion() {
  return (
    <div className="bg-[#fff7ed] relative size-full" data-node-id="8:227" data-name="02 · Introducción">
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Source_Code_Pro:Medium'] font-medium gap-px items-start leading-[normal] left-[79px] overflow-clip text-[15px] top-[72px] whitespace-nowrap" data-node-id="8:230" data-name="Meta">
        <p className="relative shrink-0 text-[#400]" data-node-id="8:231">
          Entia®
        </p>
        <p className="relative shrink-0 text-[rgba(68,0,0,0.45)]" data-node-id="8:232">
          Brand Guidelines
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[362px] overflow-clip top-[72px]" data-node-id="8:233" data-name="Meta">
        <p className="[word-break:break-word] font-['Source_Code_Pro:Medium'] font-medium leading-[normal] relative shrink-0 text-[#400] text-[32px] whitespace-nowrap" data-node-id="8:234">
          Introducción
        </p>
      </div>
      <p className="[word-break:break-word] absolute font-['Source_Serif_4:Light'] font-light h-[726px] leading-[127px] left-[361px] text-[#400] text-[96px] top-[224px] tracking-[-3.84px] w-[1464px]" data-node-id="8:249">{`Este manual documenta los elementos que conforman la identidad visual de Entia® y el criterio con el que deben aplicarse. `}</p>
      <div className="[word-break:break-word] absolute font-['Source_Code_Pro:Light'] font-light h-[92px] leading-[0] left-[366px] text-[32px] text-[rgba(68,0,0,0.45)] top-[833px] w-[912px] whitespace-pre-wrap" data-node-id="8:251">
        <p className="leading-[19px] mb-0">{`Omónimo Design House `}</p>
        <p className="leading-[19px] mb-0">​</p>
        <p className="leading-[19px]">{`Medellín / Colombia -(2026)© `}</p>
      </div>
      <div className="absolute h-[2px] left-[364px] top-[57px] w-[1476px]" data-node-id="17:1357" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="absolute bg-[#400] h-[2px] left-[80px] top-[57px] w-[248px]" data-node-id="17:1358" data-name="Regla lateral" />
    </div>
  );
}
