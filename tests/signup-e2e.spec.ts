import { expect, test } from "@playwright/test";

test("Should signup successfully", async ({ page }) => {
  await page.route("http://localhost:8080/client", (route) => {
    route.fulfill({
      status: 201,
      contentType: "application/json",
      body: JSON.stringify("Cadastro realizado com sucesso!"),
    });
  });

  await page.goto("http://localhost:5173/");

  await expect(page).toHaveTitle(/Medical Clinic/);

  const loginButton = page.getByRole("link", { name: "Cadastrar-se" });
  await loginButton.click();

  await expect(page).toHaveURL("http://localhost:5173/cadastrar");

  const nameInput = page.getByPlaceholder("Digite seu nome");
  const birthDateInput = page.getByPlaceholder("Digite sua data de nascimento");
  const cpfInput = page.getByPlaceholder("Digite seu CPF");
  const passwordInput = page.getByPlaceholder("Crie uma senha");
  const phoneNumberInput = page.getByPlaceholder(
    "Digite seu número de telefone"
  );
  const emailInput = page.getByPlaceholder("Digite seu email");

  const submitButton = page.getByRole("button", { name: "Cadastrar" });

  await nameInput.fill("John Doe");
  await birthDateInput.fill("2000-01-01");
  await cpfInput.fill("11111111111");
  await passwordInput.fill("123456");
  await phoneNumberInput.fill("51999999999");
  await emailInput.fill("test@mail.com");

  await submitButton.click();

  await expect(page).toHaveURL("http://localhost:5173");
});
