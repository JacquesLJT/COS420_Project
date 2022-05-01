import Chat from "../Pages/Chat";
import { render, screen } from "@testing-library/react";

test("Initialize chat client", () => {
    render(<Chat />);

    const chatClient = Chat.chatClient;

    expect(chatClient).toBeUndefined();
});