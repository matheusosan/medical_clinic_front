import "@testing-library/jest-dom";
import { server } from "../mocks/browser";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
