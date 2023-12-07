import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { focalIzquierdoData } from "../../../data/index.js";

test("should handle click events on articles", () => {
    const articles = [
        {
            author: "string",
            imageAlt: "string",
            imageAuthor: "string",
            imageNote: "string",
            lead: "string",
            title: "string",
            subTitle: "string",
            type: {
                article: "string",
                body: "string",
                mediaContainer: "string",
                img: "string",
                marque:"string",
                author: "string",
            },
            urlNote: "string", }
    ];

    const getArticles = (quantity) => {
        if (quantity > articles.length) {
            return articles.splice(0);
        } else {
            return articles.splice(0, quantity);
        }
    };

    const { container } = render(<focalIzquierdoData articles={getArticles} />);

    const articleElements = container.querySelectorAll("a");
    articleElements.forEach((article, index) => {
        console.log(article);
        expect(article).toHaveAttribute(
            "href",
            "https://example.com/nota" + index + ".html"
        );
    });
});