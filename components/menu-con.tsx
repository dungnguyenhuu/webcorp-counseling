import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type MenuConType = {
  className?: string;
  menuName?: string;

  /** Variant props */
  property1?: boolean;

  /** Style props */
  menuConHeight?: CSSProperties["height"];
  menuNameFontFamily?: CSSProperties["fontFamily"];
};

const MenuCon: NextPage<MenuConType> = ({
  className = "",
  property1 = false,
  menuConHeight,
  menuName,
  menuNameFontFamily,
}) => {
  const menuConStyle: CSSProperties = useMemo(() => {
    return {
      height: menuConHeight,
    };
  }, [menuConHeight]);

  const menuNameStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: menuNameFontFamily,
    };
  }, [menuNameFontFamily]);

  return (
    <div
      className={`w-[168px] rounded-lg overflow-hidden flex flex-row items-center justify-start py-1 pl-[34px] pr-2.5 box-border text-left text-smi text-primary font-body-small data-[property1='true']:bg-cornflowerblue data-[property1='true']:shrink-0 data-[property1='true']:z-[0] [&_.menu-name]:data-[property1='true']:h-[unset] [&_.menu-name]:data-[property1='true']:w-[unset] [&_.menu-name]:data-[property1='true']:text-white [&_.menu-name]:data-[property1='true']:[display:unset] [&_.menu-name]:data-[property1='true']:[align-items:unset] [&_.menu-name]:data-[property1='true']:font-semibold ${className}`}
      data-property1={property1}
      style={menuConStyle}
    >
      <div
        className="menu-name h-[22px] w-[137px] relative tracking-[-0.02em] leading-[22px] flex items-center"
        style={menuNameStyle}
      >
        {menuName}
      </div>
    </div>
  );
};

export default MenuCon;
