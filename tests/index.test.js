const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");
require("@testing-library/jest-dom/extend-expect");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8");

let dom;
let container;

describe("index.html", () => {
	beforeEach(() => {
		dom = new jsdom.JSDOM(html);
		container = dom.window.document;
	});
	it("sets DOCTYPE to html", () => {
		expect(container.doctype.name).toEqual("html");
	});
	it("sets charset to utf-8", () => {
		expect(container.querySelector("meta[charset]")).not.toBeNull();
		expect(
			container
				.querySelector("meta[charset]")
				.getAttribute("charset")
				.toLowerCase()
		).toEqual("utf-8");
	});
	it("sets a title in the head", () => {
		expect(container.title).not.toEqual("");
		expect(container.querySelector("title").parentElement.tagName).toEqual(
			"HEAD"
		);
	});
	it("renders an html element with a lang attribute set to en", () => {
		expect(container.querySelector("html")).not.toBeNull();
		expect(container.querySelector("html").lang).toEqual("en");
	});

	it("renders an h1 element in the body", () => {
		let heading = container.querySelector("h1");
		expect(heading).not.toBeNull();
		expect(container.body).toContainElement(heading);
	});
	it("renders only 1 h1 element", () => {
		expect(container.querySelectorAll("h1").length).toBe(1);
	});
	it("renders at least one img element", () => {
		expect(container.querySelectorAll("img").length).not.toBe(0);
	});
	it("has alt-text on all images", () => {
		let images = container.querySelectorAll("img");
		expect(images.length).not.toBe(0);
		images.forEach((img) => {
			expect(img.alt).not.toBe("");
		});
	});
	it("renders a ul element", () => {
		expect(container.querySelector("ul")).not.toBeNull();
	});
	it("renders only li elements as direct children of ul", () => {
		let lists = container.querySelectorAll("ul");
		expect(lists.length).not.toBe(0);
		lists.forEach((list) => {
			for (let i = 0; i < list.children.length; i++) {
				expect(list.children[i].tagName).toEqual("LI");
			}
		});
	});
});
