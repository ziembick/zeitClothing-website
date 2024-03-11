import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={styles.nav}>
      {label}
    </Link>
  );
};
