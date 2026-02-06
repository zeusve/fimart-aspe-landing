import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => <div {...props}>{children}</div>,
    a: ({ children, ...props }: React.PropsWithChildren<object>) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: React.PropsWithChildren<object>) => <button {...props}>{children}</button>,
    span: ({ children, ...props }: React.PropsWithChildren<object>) => <span {...props}>{children}</span>,
    p: ({ children, ...props }: React.PropsWithChildren<object>) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

// Wrapper para providers
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  </BrowserRouter>
);

// Tests para constantes
describe("Constants", () => {
  it("should have valid WhatsApp link", async () => {
    const { WHATSAPP_LINK } = await import("@/lib/constants");
    expect(WHATSAPP_LINK).toContain("wa.me");
    expect(WHATSAPP_LINK).toContain("34652667953");
  });

  it("should have valid clinic info", async () => {
    const { CLINIC_INFO } = await import("@/lib/constants");
    expect(CLINIC_INFO.name).toBe("Clínica FIMART");
    expect(CLINIC_INFO.city).toBe("Aspe");
  });

  it("should have social links", async () => {
    const { SOCIAL_LINKS } = await import("@/lib/constants");
    expect(SOCIAL_LINKS.facebook).toContain("facebook.com");
    expect(SOCIAL_LINKS.instagram).toContain("instagram.com");
  });
});

// Tests para componentes
describe("ThemeToggle", () => {
  it("should render theme toggle button", async () => {
    const ThemeToggle = (await import("@/components/ThemeToggle")).default;

    render(
      <TestWrapper>
        <ThemeToggle />
      </TestWrapper>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label");
  });
});

describe("FloatingCTA", () => {
  it("should render WhatsApp button", async () => {
    const FloatingCTA = (await import("@/components/FloatingCTA")).default;

    render(
      <TestWrapper>
        <FloatingCTA />
      </TestWrapper>
    );

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href");
    expect(link.getAttribute("href")).toContain("wa.me");
  });
});

describe("Footer", () => {
  it("should render footer with contact info", async () => {
    const Footer = (await import("@/components/Footer")).default;

    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    );

    expect(screen.getByText("FIMART")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
