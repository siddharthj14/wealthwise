"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Toggle from "./Toggle"; // Tailwind version (no CSS)

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Toggle
      toggled={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    />
  );
}
