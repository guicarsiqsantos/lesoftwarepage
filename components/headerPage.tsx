"use client";

import { Briefcase, FileText, Home, User } from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";
import { NavBar } from "./ui/tubelight-navbar";
import { Logo } from "./ui/logo";

export function HeaderPage() {
  const navItems = [
    { name: "Início", url: "#hero", icon: Home },
    { name: "Por que nos escolher", url: "#beneficios", icon: User },
    { name: "Nossos Serviços", url: "#servicos", icon: Briefcase },
    { name: "Contato", url: "#contato", icon: FileText },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center ">
      <div className="flex justify-between items-center w-full max-w-7xl p-6">
        <Logo />
        <NavBar items={navItems} />
        <ThemeToggle />
      </div>
    </header>
  );
}
