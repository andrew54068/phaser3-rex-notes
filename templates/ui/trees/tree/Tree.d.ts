import Folder from '../../folder/Folder';
import Sizer from '../../sizer/Sizer';
import Triangle from '../../triangle/Triangle';
import SimpleLabel from '../../simplelabel/SimpleLabel';
export default Tree;

declare namespace Tree {
    type GameObjectType = (scene: Phaser.Scene, data: Object) => Phaser.GameObjects.GameObject |
        Phaser.GameObjects.GameObject;

    interface ISpaceConfig extends Folder.ISpaceConfig {
        indent?: number,
        indentLeft?: number, indentRight?: number, indentTop?: number, indentBottom?: number,

        nodeLeft?: number, nodeRight?: number, nodeTop?: number, nodeBottom?: number,
        toggleButton?: number,
    }

    interface IConfig {
        background?: GameObjectType,
        toggleButton?: GameObjectType | Triangle.IConfig,
        nodeBackground?: GameObjectType,
        nodeBody?: GameObjectType | SimpleLabel.IConfig,

        transition: Folder.ITransitionConfig,

        orientation?: Sizer.OrientationTypes,
        space?: ISpaceConfig,
        align?: Folder.IAlignConfig,
        expand?: Folder.IExpandConfig,
    }

    interface IAddTreeConfig extends IConfig {
        nodeKey?: string
    }

}

declare class Tree extends Folder {
    constructor(
        scene: Phaser.Scene,
        config?: Tree.IConfig
    );

    readonly nodesMap: { [nodeKey: string]: Phaser.GameObjects.GameObject };

    addTree(
        config?: Tree.IAddTreeConfig | string
    ): Tree;

    insertTree(
        index: number,
        config?: Tree.IAddTreeConfig | string
    ): Tree;

    addNode(
        config?: Sizer.IAddConfig | string
    ): Phaser.GameObjects.GameObject;

    insertNode(
        index: number,
        config?: Sizer.IAddConfig | string
    ): Phaser.GameObjects.GameObject;

    getNode(
        key: string
    ): Phaser.GameObjects.GameObject;

    getNodes(
        out?: Phaser.GameObjects.GameObject[]
    ): Phaser.GameObjects.GameObject[];

    getAllNodes(
        out?: Phaser.GameObjects.GameObject[]
    ): Phaser.GameObjects.GameObject[];

    getTreePatent(
        gameObject?: Phaser.GameObjects.GameObject
    ): Tree | null | undefined;

    getTreeRoot(
        gameObject?: Phaser.GameObjects.GameObject
    ): Tree | null | undefined;

    isGrandsonNode(
        gameObject: Phaser.GameObjects.GameObject
    ): boolean;

    removeNode(
        gameObject: Phaser.GameObjects.GameObject,
        destroyChild?: boolean
    ): this;

    removeAllNodes(
        destroyChild?: boolean
    ): this;

    createTree(
        config?: Tree.IConfig | string
    ): Tree;


    setText(text: string): this;
    text: string;

    setTexture(
        key: string | Phaser.Textures.Texture,
        frame?: string | number
    ): this;
    readonly texture: Phaser.Textures.Texture | Phaser.Textures.CanvasTexture;
    readonly frame: Phaser.Textures.Frame;
}