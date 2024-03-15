// import * as Phaser from 'phaser';
import Board from '../board/Board';
import MiniBoard from '../miniboard/MiniBoard';

export default class Image extends Phaser.GameObjects.Image {
    constructor(
        board: Board | MiniBoard,
        source: HTMLImageElement | HTMLCanvasElement | HTMLImageElement[] | HTMLCanvasElement[] | Phaser.Renderer.WebGL.Wrappers.WebGLTextureWrapper,
        width: number, height: number,
        tileX: number, tileY: number, tileZ?: number,
        frame?: string | number,
        addToBoard?: boolean
    );
}