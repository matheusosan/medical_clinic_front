import { Key } from "react";

const SkeletonAppointments = () => {
  return (
    <ul>
      {[...Array(3)].map((_: unknown, i: Key | null | undefined) => (
        <div
          key={i}
          className="flex items-center w-full justify-between md:px-12 border-b border-slate-300 py-4 shadow-slate-300/75 shadow-md cursor-pointer relative"
        >
          <div className="flex flex-col justify-center md:justify-start w-full md:flex-row gap-2 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="h-4 bg-slate-200 w-32 mb-2 rounded animate-pulse"></div>
              <div className="h-4 bg-slate-200 w-16 rounded animate-pulse"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-4 bg-slate-200 w-32 mb-2 rounded animate-pulse"></div>
              <div className="h-4 bg-slate-200 w-16 rounded animate-pulse"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-4 bg-slate-200 w-32 mb-2 rounded animate-pulse"></div>
              <div className="h-4 bg-slate-200 w-16 rounded animate-pulse"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-4 bg-slate-200 w-32 mb-2 rounded animate-pulse"></div>
              <div className="h-4 bg-slate-200 w-16 rounded animate-pulse"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-4 bg-slate-200 w-32 mb-2 rounded animate-pulse"></div>
              <div className="h-4 bg-slate-200 w-16 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="absolute top-4 right-4 md:static">
            <div className="h-8 w-8 bg-slate-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default SkeletonAppointments;
