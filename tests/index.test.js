const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");
require("@testing-library/jest-dom/extend-expect");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8");

describe("index.html", () => {
	let dom;
	let container;
	beforeAll(async () => {
		dom = await jsdom.JSDOM.fromFile("index.html", {
			runScripts: "dangerously",
			resources: "usable",
		});
		await new Promise((resolve) => dom.window.addEventListener("load", resolve));
		container = dom.window.document;
	});
	it("renders an html element", () => {
		expect(container.querySelector("html")).not.toBeNull();
	});
	it("sets a title in the head", () => {
		expect(container.title).not.toEqual("");
		expect(container.querySelector("title").parentElement.tagName).toEqual("HEAD");
	});
	it("loads the p5.js library", () => {
		expect(container.querySelector("script[src='p5.js']")).not.toBeNull();
	});
	it("loads the script.js file", () => {
		expect(container.querySelector("script[src='script.js']")).not.toBeNull();
	});
	it("uses p5 to creates a canvas element", () => {
		expect(container.querySelector("canvas")).not.toBeNull();
	});
});
