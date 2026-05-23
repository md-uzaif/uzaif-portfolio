import Link from "next/link";

import { FOOTER_DATA } from "@/lib/constants";

export const Footer = () => {
  return (
    <div className="w-full bg-transparent p-4 text-gray-200 shadow-lg">
      <div className="m-auto flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-row flex-wrap items-center justify-around gap-4">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex h-auto min-w-[200px] flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="my-2 flex flex-row items-center"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-1 text-center text-[15px]">
          &copy; Uzaif {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};
