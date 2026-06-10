"use client";

import {
  createElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
} from "react";

import { cn } from "@/lib/utils";

function useRevealOnce() {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    observerRef.current?.disconnect();
    observerRef.current = null;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.40, rootMargin: "0px 0px -5% 0px" }
    );

    observerRef.current = observer;
    observer.observe(node);
  }, []);

  useEffect(() => () => observerRef.current?.disconnect(), []);

  return { ref, visible };
}

function toRevealDuration(duration: number | string): string {
  return typeof duration === "number" ? `${duration}ms` : duration;
}

type RevealStaggerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
  /** Animation duration per card — number (ms) or CSS time string (e.g. "0.8s"). */
  duration?: number | string;
} & Omit<
  ComponentPropsWithoutRef<T>,
  "as" | "className" | "children" | "duration"
>;

export function RevealStagger<T extends ElementType = "div">({
  as,
  className,
  children,
  duration,
  style,
  ...props
}: RevealStaggerProps<T>) {
  const Tag = as ?? "div";
  const { ref, visible } = useRevealOnce();

  const revealStyle: CSSProperties = {
    ...style,
    ...(duration != null && {
      "--reveal-duration": toRevealDuration(duration),
    }),
  };

  return createElement(
    Tag,
    {
      ref,
      "data-visible": visible || undefined,
      className: cn(
        "reveal-stagger",
        visible && "reveal-stagger--visible",
        className
      ),
      style: revealStyle,
      ...props,
    },
    children
  );
}

type RevealProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
  /** Animation duration — number (ms) or CSS time string (e.g. "0.8s"). */
  duration?: number | string;
} & Omit<
  ComponentPropsWithoutRef<T>,
  "as" | "className" | "children" | "duration"
>;

export function Reveal<T extends ElementType = "div">({
  as,
  className,
  children,
  duration,
  style,
  ...props
}: RevealProps<T>) {
  const Tag = as ?? "div";
  const { ref, visible } = useRevealOnce();

  const revealStyle: CSSProperties = {
    ...style,
    ...(duration != null && {
      "--reveal-duration": toRevealDuration(duration),
    }),
  };

  return createElement(
    Tag,
    {
      ref,
      "data-visible": visible || undefined,
      className: cn("reveal-item", visible && "reveal-item--visible", className),
      style: revealStyle,
      ...props,
    },
    children
  );
}
