"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitcher.module.css"; // Import your CSS module

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.themeSwitcher}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleThemeToggle}
        />
        <span className={`${styles.slider} ${styles.round}`} />
      </label>
      <span className={styles.themeLabel}>
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
