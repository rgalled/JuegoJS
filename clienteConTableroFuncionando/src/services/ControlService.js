import { ConnectionHandler } from "./ConnectionHandler.js";
import { UIv1 } from "../UIv1.js";

export const ControlService = (player) => {
    document.getElementById("move").addEventListener("click", (event) => {
        switch (player.direction) {
            case "up":
                player.y = player.y - 1;
                break;
            case "left":
                player.x = player.x - 1;
                break;
            case "down":
                player.y = player.y + 1;
                break;
            case "right":
                player.x = player.x + 1;
                break;
        }
        ConnectionHandler.sendMessage({
            data: player,
            type: "move"
        })
    })
    document.getElementById("rotate").addEventListener("click", (event) => {
        console.log("me roto");
    })
    document.getElementById("shot").addEventListener("click", (event) => {
        console.log("disparo");
    })
}