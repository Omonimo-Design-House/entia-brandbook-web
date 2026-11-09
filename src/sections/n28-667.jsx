const imgReglaLateral = "https://www.figma.com/api/mcp/asset/1663f3f6-db06-48d5-b0de-88161355ca9d.svg";
const imgCapa4 = "https://www.figma.com/api/mcp/asset/1abbdf0c-54bb-48b4-9034-f56f84574b3d.svg";
const imgCapa5 = "https://www.figma.com/api/mcp/asset/ba093448-a118-4ea2-94d7-472a1a723aa1.svg";
const imgCapa6 = "https://www.figma.com/api/mcp/asset/92bb66e3-0ad6-4e2f-a6e4-82cd9d8c667b.svg";
const imgCapa7 = "https://www.figma.com/api/mcp/asset/cb441ea2-adab-497c-b4a5-88bea93e873d.svg";

export default function Component06Personalidad() {
  return (
    <div className="bg-[#fff7ed] relative size-full" data-node-id="28:667" data-name="06-Personalidad">
      <div className="absolute h-[200px] left-0 top-0 w-[1920px]" data-node-id="28:668" data-name="Chrome / Encabezado" />
      <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Source_Code_Pro:Medium'] font-medium gap-px items-start leading-[normal] left-[81px] overflow-clip text-[15px] top-[72px] whitespace-nowrap" data-node-id="28:669" data-name="Meta">
        <p className="relative shrink-0 text-[#400]" data-node-id="28:670">
          Entia®
        </p>
        <p className="relative shrink-0 text-[rgba(68,0,0,0.45)]" data-node-id="28:671">
          Brand Guidelines
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[365px] overflow-clip top-[72px]" data-node-id="28:672" data-name="Meta">
        <p className="[word-break:break-word] font-['Source_Code_Pro:Medium'] font-medium leading-[normal] relative shrink-0 text-[#400] text-[32px] whitespace-nowrap" data-node-id="28:673">{`Recursos Gráficos `}</p>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-[365px] overflow-clip top-[116px]" data-node-id="28:674" data-name="Meta">
        <p className="[word-break:break-word] font-['Source_Serif_4:Light_Italic'] font-light italic leading-[normal] relative shrink-0 text-[24px] text-[rgba(68,0,0,0.45)] whitespace-nowrap" data-node-id="28:675">
          Doodles
        </p>
      </div>
      <div className="absolute bg-[rgba(68,0,0,0.45)] h-[2px] left-[81px] top-[229px] w-[248px]" data-node-id="28:676" data-name="Regla lateral" />
      <div className="absolute h-[2px] left-[364px] top-[57px] w-[1476px]" data-node-id="28:688" data-name="Regla lateral">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgReglaLateral} />
      </div>
      <div className="absolute bg-[#400] h-[2px] left-[80px] top-[57px] w-[248px]" data-node-id="28:689" data-name="Regla lateral" />
      <div className="absolute content-stretch flex gap-[20px] h-[433px] items-start left-[364px] overflow-clip top-[230px] w-[1478px]" data-node-id="28:696" data-name="Fotos">
        <div className="bg-[#eec000] content-stretch flex flex-[1_0_0] h-[420px] items-center justify-center min-w-px overflow-clip relative rounded-[24px]" data-node-id="28:697" data-name="FOTO">
          <div className="absolute h-[312.329px] left-[31.9px] top-[53.84px] w-[290.69px]" data-node-id="2015:353" data-name="Capa_4">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCapa4} />
          </div>
        </div>
        <div className="bg-[#a2c4d7] content-stretch flex flex-[1_0_0] h-[420px] items-center justify-center min-w-px overflow-clip relative rounded-[24px]" data-node-id="28:698" data-name="FOTO">
          <div className="absolute inset-[14.89%_9%]" data-node-id="2015:408" data-name="Capa_4">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCapa5} />
          </div>
        </div>
        <div className="bg-[#dc973c] content-stretch flex flex-[1_0_0] h-[420px] items-center justify-center min-w-px overflow-clip relative rounded-[24px]" data-node-id="28:699" data-name="FOTO">
          <div className="absolute inset-[9%_13.7%]" data-node-id="2015:434" data-name="Capa_4">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCapa6} />
          </div>
        </div>
        <div className="bg-[#9e9e59] content-stretch flex flex-[1_0_0] h-[420px] items-center justify-center min-w-px overflow-clip relative rounded-[24px]" data-node-id="28:700" data-name="FOTO">
          <div className="absolute inset-[21.65%_9%]" data-node-id="2015:458" data-name="Capa_4">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCapa7} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Source_Code_Pro:Light'] font-light leading-[0] left-[88px] text-[#400] text-[15px] top-[257px] w-[231px] whitespace-pre-wrap" data-node-id="37:1368">
        <p className="leading-[normal] mb-0">Los doodles capturan la esencia de un trabajo introspectivo y sacan a la luz lo que tenemos en la mente. Usan trazos vectoriales uniformes que simulan un dibujo a mano y retratan personajes en momentos de intimidad y vulnerabilidad.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">Cada figura va sobre un recorte de papel Ivory, con el trazo en Shadow Desire. Priorizamos la expresividad y la abstracción sobre el realismo.</p>
      </div>
    </div>
  );
}
