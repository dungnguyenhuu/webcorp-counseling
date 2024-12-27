import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type MenuItemType = {
  className?: string;
  menu?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  menuItemHeight?: CSSProperties["height"];
  menuTextDecoration?: CSSProperties["textDecoration"];
};

const MenuItem: NextPage<MenuItemType> = ({
  className = "",
  property1 = "Đóng",
  menuItemHeight,
  menu,
  menuTextDecoration,
}) => {
  const menuItemStyle: CSSProperties = useMemo(() => {
    return {
      height: menuItemHeight,
    };
  }, [menuItemHeight]);

  const menuStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: menuTextDecoration,
    };
  }, [menuTextDecoration]);

  return (
    <div
      className={`w-[168px] rounded-lg bg-lightsteelblue overflow-hidden flex flex-row items-center justify-start py-2 px-2.5 box-border gap-2 text-left text-sm text-primary font-body-small ${className}`}
      data-property1={property1}
      style={menuItemStyle}
    >
      <Image
        className="w-4 relative h-4 overflow-hidden shrink-0"
        width={16}
        height={16}
        alt=""
        src="/cube24.svg"
      />
      <a
        className="[text-decoration:none] flex-1 relative tracking-[-0.02em] leading-[22px] font-semibold text-[inherit]"
        style={menuStyle}
      >
        {menu}
      </a>
      <Image
        className="w-3 relative h-3 overflow-hidden shrink-0"
        width={12}
        height={12}
        alt=""
        src="/iconschevrondown.svg"
      />
    </div>
  );
};

export default MenuItem;
