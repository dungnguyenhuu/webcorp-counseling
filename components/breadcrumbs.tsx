import type { NextPage } from "next";

export type BreadcrumbsType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const Breadcrumbs: NextPage<BreadcrumbsType> = ({
  className = "",
  property1 = "Thu gọn",
}) => {
  return (
    <div
      className={`h-[22px] w-[30px] flex flex-row items-start justify-start py-[10.4px] px-[7px] box-border ${className}`}
      data-property1={property1}
    >
      <div className="w-3 relative bg-primary h-[1.2px]">
        <div className="absolute top-[-6px] left-[0px] bg-primary w-4 h-[1.2px]" />
        <div className="absolute bottom-[-6px] left-[0px] bg-primary w-4 h-[1.2px]" />
      </div>
    </div>
  );
};

export default Breadcrumbs;
