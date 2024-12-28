import { expect, test } from "@playwright/test";

test("Should login successfully", async ({ page }) => {
  await page.route("http://localhost:8080/auth/login", (route) => {
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        token: "randomtoken",
      }),
    });
  });

  await page.goto("http://localhost:5173/");

  const homeText = page.getByRole("heading", {
    name: "BEM-VINDO A MEDICAL CLINIC",
  });

  await expect(homeText).toBeVisible();

  const loginButton = page.getByRole("link", { name: "Fazer login" });
  await loginButton.click();

  await expect(page).toHaveURL("http://localhost:5173/login");

  const emailInput = page.getByPlaceholder("Digite seu email");
  const passwordInput = page.getByPlaceholder("Digite sua senha");
  const submitButton = page.getByRole("button", { name: "Entrar" });

  await emailInput.fill("test@mail.com");
  await passwordInput.fill("123456");
  await submitButton.click();

  await expect(page).toHaveURL("http://localhost:5173");
});
