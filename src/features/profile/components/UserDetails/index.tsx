import { useProfile } from "../../hooks/useProfile";
import ProfileSkeleton from "../ProfileSkeleton";

type UserDetailsProps = {
  props: ReturnType<typeof useProfile>;
};

export default function UserDetails({ props }: UserDetailsProps) {
  return (
    <section className="flex flex-col items-center h-full w-full md:w-[400px] border-r border-slate-300 gap-4 py-4 md:py-0 border-b  md:gap-12">
      <h2 className="text-3xl text-center md:py-6 w-full font-bold text-[#0B4FFF]">
        Perfil
      </h2>
      {props.isUserLoading ? (
        <ProfileSkeleton />
      ) : (
        <>
          <img
            className="rounded-full w-60"
            src="https://media.licdn.com/dms/image/v2/D4D03AQEf783BDuouxg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671417760869?e=1730937600&v=beta&t=hl2vo6QvswKgqip_2lAa0s4IypQ-hOd5OcryUuBMj44"
            alt=""
          />
          <h2 className="text-black ">
            Bem vindo,{" "}
            <span className="font-bold text-[#0B4FFF]">
              {props.userData?.name}
            </span>
          </h2>
        </>
      )}
    </section>
  );
}
