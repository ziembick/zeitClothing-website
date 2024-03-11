"use client";

import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { NavItem } from "./nav-item";
import Image from "next/image";

const NAV_ITEMS = [
  {
    label: "SHOP",
    href: "/shop",
  },
  {
    label: "LOOKBOOK",
    href: "/lookbook",
  },
  {
    label: "INSIDE ZEIT",
    href: "/inside",
  },
  {
    label: "ONDE ENCONTRAR",
    href: "/encontrar",
  },
  {
    label: "FALE CONOSCO",
    href: "/contato",
  },
];

export const Header = () => {
  const user = {
    name: "John",
  };

  const cart = {
    totalCount: 10,
  };

  const logout = () => {};

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            ZEIT
          </Link>
          <nav className={styles.teste}>
            <ul>
              <li>
                {NAV_ITEMS.map((item) => (
                  <NavItem {...item} key={item.label} />
                ))}
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              {user ? (
                <li className={styles.menu_container}>
                  <Link href="/dashboard">{user.name}</Link>
                  <div className={styles.menu}>
                    <Link href="/profile">Profile</Link>
                    <Link href="/orders">Orders</Link>
                    <a onClick={logout}>Logout</a>
                  </div>
                </li>
              ) : (
                <Link href="/login">Login</Link>
              )}

              <li>
                <Link href="/cart" className={styles.cart}>
                  Cart
                  {cart.totalCount > 0 && (
                    <span className={styles.cart_count}>{cart.totalCount}</span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
