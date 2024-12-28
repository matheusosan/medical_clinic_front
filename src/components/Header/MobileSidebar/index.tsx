import React from "react";

interface MobileSidebarProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string; // Classe adicional opcional
}

export default function MobileSidebar({
  children,
  className,
}: MobileSidebarProps) {
  return <div className={className}>{children}</div>;
}
