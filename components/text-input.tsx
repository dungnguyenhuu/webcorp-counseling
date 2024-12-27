import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type TextInputType = {
  className?: string;
  showTextInput?: boolean;
  valueSet?: string;
  showChevronDownIcon?: boolean;

  /** Variant props */
  property1?: string;

  /** Style props */
  textInputFlex?: CSSProperties["flex"];
  textInputWidth?: CSSProperties["width"];
  valueSetFlex?: CSSProperties["flex"];
  valueSetHeight?: CSSProperties["height"];
  valueSetWidth?: CSSProperties["width"];
  valueSetDisplay?: CSSProperties["display"];
  valueSetColor?: CSSProperties["color"];
  valueSetTextDecoration?: CSSProperties["textDecoration"];
};

const TextInput: NextPage<TextInputType> = ({
  className = "",
  property1 = "Dropdown",
  showTextInput,
  textInputFlex,
  textInputWidth,
  valueSet,
  valueSetFlex,
  valueSetHeight,
  valueSetWidth,
  valueSetDisplay,
  valueSetColor,
  valueSetTextDecoration,
  showChevronDownIcon,
}) => {
  const textInputStyle: CSSProperties = useMemo(() => {
    return {
      flex: textInputFlex,
      width: textInputWidth,
    };
  }, [textInputFlex, textInputWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      flex: valueSetFlex,
      height: valueSetHeight,
      width: valueSetWidth,
      display: valueSetDisplay,
      color: valueSetColor,
      textDecoration: valueSetTextDecoration,
    };
  }, [
    valueSetFlex,
    valueSetHeight,
    valueSetWidth,
    valueSetDisplay,
    valueSetColor,
    valueSetTextDecoration,
  ]);

  return (
    showTextInput && (
      <div
        className={`w-[111px] rounded-md bg-white border-primary border-[1px] border-solid box-border flex flex-row items-start justify-start p-2 gap-1 text-left text-sm text-secondary font-body-small ${className}`}
        data-property1={property1}
        style={textInputStyle}
      >
        <Image
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          width={24}
          height={24}
          alt=""
          src="/eye.svg"
        />
        <div
          className="h-[22px] w-[70px] relative tracking-[-0.02em] leading-[22px] inline-block shrink-0"
          style={textStyle}
        >
          {valueSet}
        </div>
        {showChevronDownIcon && (
          <Image
            className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
            width={22}
            height={22}
            alt=""
            src="/chevrondown.svg"
          />
        )}
      </div>
    )
  );
};

export default TextInput;
