// import * as Phaser from 'phaser';
import Board from '../board/Board';
import MiniBoard from '../miniboard/MiniBoard';

export default class Image extends Phaser.GameObjects.Image {
    constructor(
        board: Board | MiniBoard,
        source: string | Phaser.Textures.Texture,
        tileX: number, tileY: number, tileZ?: number,
        frame?: string | number,
        addToBoard?: boolean
    );
}