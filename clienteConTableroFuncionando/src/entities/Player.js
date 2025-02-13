export const Player = {
    x: 0,
    y: 0,
    status: 0,
    direction: 0,
    visibility: true,
}
import { UIv1 } from "../UIv1.js";
import { ControlService } from "../services/controlService.js";

export class PlayerHandler {
    #players = [];
    #yourPlayer = null;

    constructor() {
    }

    setPlayer(players) {
        this.#players = players;
        this.#players.forEach(a => {
            console.log(a)
        })
        console.log(this.#players)
        UIv1.drawPlayers(this.#players);
        this.#setCurrentPosition();
        ControlService(this.#yourPlayer);
    }


    //Pasa las coordenadas del jugador de la lista con el del usuario
    //y luego lo elimina
    #setCurrentPosition() {
        this.#players.forEach(playerList => {
            if (playerList.id == this.#yourPlayer.id) {
                this.#yourPlayer.x = playerList.x
                this.#yourPlayer.y = playerList.y
            }
            this.#players.splice(this.#players.indexOf(playerList), 1);
        })
    }

    setYourPlayer(player) {
        this.#yourPlayer = player;
        console.log(this.#yourPlayer)
    }

    uploadPlayer(player) {
        if (player.x < 1) {
            player.x = 1;
        }
        if (player.y < 1) {
            player.y = 1;
        }
        if (player.x > 10) {
            player.x = 10;
        }
        if (player.y > 10) {
            player.y = 10;
        }
        console.log(player)
        if (this.#yourPlayer.id == player.id) {
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaa")
            this.#yourPlayer = player.x;
            this.#yourPlayer = player.y;
            UIv1.movePlayer(this.#yourPlayer, player);
        } else {
            this.#players.forEach(playerList => {
                console.log("aaaaaaaaaaaaaaaaaaaaaaaaa")
                if (playerList.id == player.id) {
                    console.log("bbbbbbbbbbbbbbbbbb")
                    playerList.x = player.x;
                    playerList.y = player.y;
                    UIv1.movePlayer(playerList, player);
                };
            })
        }

    }

}