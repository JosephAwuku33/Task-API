var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { beforeAll, describe, expect, expectTypeOf, test } from "vitest";
const BEFORE_ALL_TIMEOUT = 30000; // 30 sec
describe("", () => {
    let response;
    let body;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        response = yield fetch("https://task-api-qkge.onrender.com/tasks");
        body = yield response.json();
    }), BEFORE_ALL_TIMEOUT);
    test("Should have response status 200", () => {
        expect(response.status).toBe(200);
    });
    test("Should have content-type", () => {
        expect(response.headers.get("Content-Type")).toBe("application/json; charset=utf-8");
    });
    test("Should have array in the body", () => {
        expectTypeOf(body).toBeArray();
    });
});
