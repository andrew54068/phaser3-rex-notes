// import * as Phaser from 'phaser';
import Board from '../board/Board';
import MiniBoard from '../miniboard/MiniBoard';

export default class Image extends Phaser.GameObjects.Image {
    constructor(
        board: Board | MiniBoard,
        tileX: number, tileY: number, tileZ?: number,
        fillColor?: number | null, fillAlpha?: number | null,
        addToBoard?: boolean
    );
}