const ProfileSkeleton = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Skeleton da Imagem */}
      <div className="w-60 h-60 rounded-full bg-slate-200 animate-pulse"></div>

      {/* Skeleton do Texto de Boas-Vindas */}
      <div className="w-48 h-6 bg-slate-200 rounded animate-pulse"></div>

      {/* Skeleton do Nome do Usuário */}
      <div className="w-32 h-6 bg-slate-200 rounded animate-pulse"></div>
    </div>
  );
};

export default ProfileSkeleton;
